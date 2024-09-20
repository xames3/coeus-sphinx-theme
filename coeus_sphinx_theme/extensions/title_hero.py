"""\
Coeus Sphinx Theme Title Hero Directive
=======================================

Author: Akshay Mestry <xa@mes3.dev>
Created on: Monday, August 12 2024
Last updated on: Thursday, September 05 2024

This module provides a custom directive for the Coeus Sphinx Theme,
that allows authors and contributors to add a FontAwesome icon, a
background gradient, a summary and document type to their documentation
title banner. The summary is basically an abstract of the document's
contents that is displayed prominently at the top of the page after the
main title, helping readers quickly understand the scope and purpose of
the document.

Coeus Sphinx Theme's title hero banner is created using the custom
`title-hero` directive, which is included as part of this theme. The
directive is implemented below, and is available to use by authors and
contributors when building the documentation.

.. note::

    SVG images are more suitable for considering as banner or hero
    icons. Try using icons from `FontAwesome` as they're natively
    supported by Coeus Sphinx Theme.

.. note::

    The summary should be maximum of 2 lines.

.. note::

    This module is designed specifically for the Coeus Sphinx Theme,
    hence the directive may not be available or may be implemented
    differently for different themes. Please consult the documentation
    for more information.

.. versionchanged:: 2024.08.23

.. versionchanged:: 2024.09.01

    [1] The `documentation_hero` extension is now `title_hero`, which
        made a lot of sense when we noticed the use of the extension in
        retrospective usage.
    [2] The module has been significantly refactored to minimize code
        duplication and the docstrings now justify the code that they
        represent. This is a big change over the previous extension-
        management capabilties of Coeus Sphinx Theme.
    [3] The extension will now use a `Jinja2` template rather than using
        `Jinja2` string rendering. This is just for the convenience and
        for future enhancements.
    [4] The `ClassVar` update now conforms to the `mypy` restrictions.

.. versionchanged:: 2024.09.09

    [1] The `gradient` option is now optional and is handled at the
        HTML level. This functionality is now been taken over the CSS
        gradient animation.

.. deprecated:: 2024.09.09

    [1] The `article` option is now deprecated.
"""

from __future__ import annotations

import os
import typing as t

import docutils.nodes as nodes
import docutils.parsers.rst as rst
import jinja2

if t.TYPE_CHECKING:
    from sphinx.application import Sphinx
    from sphinx.writers.html import HTMLTranslator

name: t.Final[str] = "title-hero"

source = os.path.join(
    os.path.abspath(os.path.join(os.path.dirname(__file__), "..")),
    "title_hero.html.jinja",
)

with open(source) as f:
    template = jinja2.Template(f.read())


class node(nodes.Element):
    """Class for representing a node in a document tree."""

    pass


class directive(rst.Directive):
    """Class for representing a custom directive in reStructuredText.

    This class allows using a custom directive and maps the source
    reStructuredText to `node` element doctree node.

    By using a custom directive, Coeus Sphinx Theme allows contributors
    or authors to render content for their specific context and needs.
    """

    def run(self) -> list[nodes.Node]:
        """Return a list of node(s) from the reStructuredText source.

        This method processes the directive's arguments, options and
        content, and returns a list of `docutils` nodes that are
        inserted into the document tree where the directive was first
        encountered.

        :return: List of `docutils` node(s).
        """
        if not hasattr(e := self.state.document.settings.env, "title_hero"):
            e.title_hero = {}
        e.title_hero[e.docname] = (element := node("", **self.options))
        return [element]


def visit(self: HTMLTranslator, node: node) -> None:
    """Node visitor function which maps the node element."""
    self.body.append(template.render(**node.attributes))


def depart(self: HTMLTranslator, node: node) -> None:
    """Node departure function which maps the node element."""
    pass


def html_page_context(
    app: Sphinx,
    pagename: str,
    templatename: str,
    context: dict[str, t.Any],
    doctree: nodes.Node,
) -> None:
    """Register function for Coeus' HTML context."""
    if not hasattr(app.builder.env, "title_hero"):
        return
    if node := app.builder.env.title_hero.get(pagename, ""):
        context.update(node.attributes)


directive.has_content = True
directive.option_spec = {
    "gradient": rst.directives.unchanged,
    "icon": rst.directives.unchanged_required,
    "summary": rst.directives.unchanged_required,
}
