"""\
Coeus Sphinx Theme Contributor Hero Directive
=============================================

Author: Akshay "XA" Mestry <xa@mes3.dev>
Created on: Wednesday, August 14 2024
Last updated on: Friday, August 23 2024

This module provides a custom directive for the Coeus Sphinx Theme,
that allows authors and contributors to add information about themselves
in particular, their socials (if any) and the published date.

Coeus Sphinx Theme's contributor hero is created using the custom
`contributor-hero` directive, which is included as part of this theme.
The directive is implemented below, and is available to use by authors
and contributors when building the documentation.

.. note::

    This module is designed specifically for the Coeus Sphinx Theme,
    hence the directive may not be available or may be implemented
    differently for different themes. Please consult the documentation
    for more information.

.. versionchanged:: 2024.08.23
"""

from __future__ import annotations

import ast
import os.path as p
import typing as t

import jinja2 as j2
from docutils.nodes import Element
from docutils.nodes import Node
from docutils.parsers.rst import Directive
from docutils.parsers.rst import directives
from docutils.parsers.rst import roles
from sphinx.util import logging
from sphinx.writers.html import HTMLTranslator

logger = logging.getLogger(__name__)

file = p.basename(__file__).replace(".py", ".html")
path = p.abspath(p.join(p.dirname(__file__), ".."))
loader = j2.FileSystemLoader(path)
template = j2.Environment(loader=loader).get_template(file)


class ContributorHero(t.NamedTuple):
    """Collector for contributor hero."""

    contributors: str
    location: str
    timestamp: str


class ContributorHeroNode(Element):
    pass


class ContributorHeroDirective(Directive):
    """A directive class for a custom directive.

    This class allows using a custom directive and maps the source
    reStructuredText to `ContributorHeroNode` element doctree node.

    By using a custom directive, it allows contributors or
    authors to render an abstract content for the provided content. This
    class' rendering HTML behavior is further extended using another
    Python functions, `visit` and `depart`.

    :var has_content: A boolean flag to allow content in the directive,
        defaults to `True`.
    :var final_argument_whitespace: A boolean flag, may the final argument
        contain whitespace, set to `True`.
    :var option_spec: A mapping of option specificiations.

    .. versionchanged:: 2024.08.23
    """

    has_content: bool = True  # type: ignore[misc]
    final_argument_whitespace: bool = True  # type: ignore[misc]
    option_spec = {
        "contributors": directives.unchanged_required,
        "limit": directives.unchanged,
        "location": directives.unchanged_required,
        "prefix": directives.unchanged,
        "timestamp": directives.unchanged_required,
    }

    def run(self) -> list[Node]:
        """Create node from the reStructuredText source.

        This method processes the directive's arguments, options and
        content, and return a list of Docutils/Sphinx nodes that will be
        inserted into the document tree at the point where the directive
        was encountered.

        :return: List of Docutils node for custom directive.
        """
        roles.set_classes(self.options)
        node = ContributorHeroNode("\n".join(self.content), **self.options)
        self.add_name(node)
        self.state.nested_parse(self.content, self.content_offset, node)
        return [node]


def visit(self: HTMLTranslator, node: ContributorHeroNode) -> None:
    """Node visitor function which maps the node element."""
    contributors = ast.literal_eval(node.attributes["contributors"])
    if node.document:
        titles = node.document.asdom().getElementsByTagName("title")
    article = titles[0].firstChild.nodeValue
    subject = f"[{self.config.html_coeus_title}] {article}"
    limit = node.attributes.get("limit", 2)
    prefix = node.attributes.get("prefix", "Published by")
    html_src = template.render(
        html_coeus_contributor_hero_contributors=contributors,
        html_coeus_contributor_hero_contributors_limit=limit,
        html_coeus_contributor_hero_prefix=prefix,
        html_coeus_contributor_hero_location=node.attributes["location"],
        html_coeus_contributor_hero_timestamp=node.attributes["timestamp"],
        html_coeus_contributor_hero_email=self.config.html_coeus_email,
        html_coeus_contributor_hero_email_subject=subject,
        html_coeus_contributor_hero_github=self.config.html_coeus_github,
        html_coeus_contributor_hero_twitter=self.config.html_coeus_twitter,
    )
    self.body.append(html_src)


def depart(self: HTMLTranslator, node: ContributorHeroNode) -> None:
    """Node departure function which maps the node element."""
    pass


def html_page_context() -> None:
    """Register function for Coeus' HTML context."""
    pass


name: t.Final[str] = "contributor-hero"
node = ContributorHeroNode
directive = ContributorHeroDirective
add_html_context: bool = False
callback = html_page_context
