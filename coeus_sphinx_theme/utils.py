"""\
Coeus Sphinx Theme
==================

Author: Akshay Mestry <xa@mes3.dev>
Created on: Tuesday, September 10 2024
Last updated on: Tuesday, September 10 2024

This module defines the utilities for customizing or post processing
Coeus Sphinx Theme.

.. versionadded:: 2024.09.09
"""

from __future__ import annotations

import typing as t

import bs4
from sphinx.util.display import status_iterator

if t.TYPE_CHECKING:
    from sphinx.application import Sphinx
    from sphinx.environment import BuildEnvironment


def make_toc_collapsible(tree: bs4.BeautifulSoup) -> None:
    """Enhance the navigation sidebar by making the child elements
    collapsible.

    The function searches for the links within the left sidebar that
    have sibling `ul` elements (indicating child navigation items). It
    modifies these links and their parent elements to be collapsible
    using a toggle mechanism that simulates expansion and contraction.

    :param tree: Parsed HTML tree representing the document structure.
    """
    for link in tree.select("#left-sidebar a"):
        children = link.find_next_sibling("ul")
        if children:
            link.parent["x-data"] = (
                "{ expanded: $el.classList.contains('current') }"
            )
            link["@click"] = "expanded = !expanded"
            link["class"].append("expandable")
            link[":class"] = "{ 'expanded': expanded }"
            children["x-show"] = "expanded"
            button = tree.new_tag(
                "button",
                type="button",
                **{"@click.prevent.stop": "expanded = !expanded"},
            )
            i = tree.new_tag("i", attrs={"class": "fa-solid fa-circle-plus"})
            button.append(i)
            link.append(button)


def read_env_docs(
    app: Sphinx, _: BuildEnvironment, docnames: list[str]
) -> None:
    """Return the list of modified or changed documents into the Sphinx
    environment object for post-processing.

    This is essential for optimizing performance during post-processing,
    ensuring that only the modified documents are processed further in
    the build pipeline.

    :param app: Sphinx application object.
    :param _: Current build environment object.
    :param docnames: List of document names that were changed.
    """
    app.env.coeus_files = docnames


def remove_empty_toctree_wrappers(tree: bs4.BeautifulSoup) -> None:
    """Removes empty toctree wrapper divs from the parsed HTML tree to
    clean up the document structure.

    This function searches for empty `toctree-wrapper` divs, which may
    occur when using the `hidden` option in Sphinx toctrees. These empty
    divs, which typically contain only whitespace or an end-of-line
    character, are removed to ensure the final HTML is free from
    redundant empty elements.

    :param tree: Parsed HTML tree representing the document structure.
    """
    for div in tree.select("div.toctree-wrapper"):
        if len(div.contents) == 1 and not div.contents[0].strip():
            div.decompose()


def enhance_header_links_for_copy(tree: bs4.BeautifulSoup) -> None:
    """Adds functionality to header links, enabling them to copy their
    URL to the clipboard when clicked.

    This function modifies all anchor links with the class `headerlink`
    by binding a click event to each link. When the link is clicked,
    its URL is copied to the clipboard, and a temporary tooltip displays
    "Copied!" before reverting back to the default "Copy link" message.

    :param tree: Parsed HTML tree representing the document structure.
    """
    for link in tree.select("a.headerlink"):
        link["@click.prevent"] = (
            "window.navigator.clipboard.writeText($el.href); "
            "$el.setAttribute('data-tooltip', 'Copied!'); "
            "setTimeout(() => $el.setAttribute('data-tooltip', 'Copy link'),"
            " 2000)"
        )
        del link["title"]
        link["aria-label"] = "Copy link to this element"
        link["data-tooltip"] = "Copy link"


def remove_html_comments(tree: bs4.BeautifulSoup) -> None:
    """Removes all HTML comments from the parsed document to ensure
    cleaner final HTML output.

    This function identifies and strips out all HTML comments (i.e., text
    nodes enclosed in `<!-- -->`), which may be present in the document
    and are not needed in the final output.

    :param tree: Parsed HTML tree representing the document structure.
    """
    for comment in tree.find_all(string=lambda t: isinstance(t, bs4.Comment)):
        comment.extract()


def modify_single_html_document(html: str) -> None:
    """Parses, modifies, and rewrites a single HTML file to apply various
    post-processing transformations.

    This function takes a file path to an HTML document, parses it into a
    BeautifulSoup tree, applies several transformations (such as
    collapsible navigation links, scrollspy, removing comments, etc.),
    and writes the modified tree back into the original file.

    :param html: HTML document to be modified.
    """
    with open(html, encoding="utf-8") as f:
        tree = bs4.BeautifulSoup(f, "html.parser")
    make_toc_collapsible(tree)
    enhance_header_links_for_copy(tree)
    remove_empty_toctree_wrappers(tree)
    remove_html_comments(tree)
    with open(html, "w", encoding="utf-8") as f:
        f.write(str(tree))


def post_process_build(app: Sphinx, exc: Exception | None) -> None:
    """Post-processes HTML documents after the Sphinx build, applying
    final modifications to the output files.

    This function is triggered after the build process is completed. It
    checks if there are any errors, and if the builder is set to produce
    `HTML` or `dirhtml` output. It then applies final transformations
    to the list of modified documents stored in the environment, such as
    collapsible navigation, and comment removal.

    :param app: Sphinx application object.
    :param exc: Any exception raised during the build process, or None
        if no exceptions occurred.
    """
    if exc or app.builder.name not in {"html", "dirhtml"}:
        return
    files = [app.builder.get_outfilename(doc) for doc in app.env.coeus_files]
    if not files:
        return
    for doc in status_iterator(
        files,
        "Postprocessing... ",
        "darkgreen",
        len(files),
        app.verbosity,
    ):
        modify_single_html_document(doc)