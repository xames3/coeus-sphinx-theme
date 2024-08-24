"""\
Coeus Sphinx Theme Homelander Directive
=======================================

Author: Akshay "XA" Mestry <xa@mes3.dev>
Created on: Tuesday, August 13 2024
Last updated on: Friday, August 23 2024

This module provides a custom directive for the Coeus Sphinx Theme,
for a custom background of the landing page.

.. note::

    SVG images are more suitable for considering as banner or hero
    icons. Try using icons from `FontAwesome` as they're natively
    supported by Coeus Sphinx Theme.

.. note::

    This module is designed specifically for the Coeus Sphinx Theme,
    hence the directive may not be available or may be implemented
    differently for different themes. Please consult the documentation
    for more information.

.. versionchanged:: 2024.08.23
"""

from __future__ import annotations

import typing as t

from docutils.nodes import Element
from docutils.nodes import Node
from docutils.parsers.rst import Directive
from docutils.parsers.rst import directives
from sphinx.application import Sphinx
from sphinx.util import logging
from sphinx.writers.html import HTMLTranslator

logger = logging.getLogger(__name__)


class HomelanderNode(Element):
    pass


class HomelanderDirective(Directive):
    """A directive class for a custom directive.

    This class allows using a custom directive and maps the source
    reStructuredText to `HomelanderNode` element doctree node.

    By using a custom directive, it allows contributors or
    authors to render an abstract content for the provided content. This
    class' rendering HTML behavior is further extended using another
    Python functions, `visit` and `depart`.

    :var has_content: A boolean flag to allow content in the directive,
        defaults to `True`.
    :var final_argument_whitespace: A boolean flag, may the final argument
        contain whitespace, set to `True`.
    :var option_spec: A mapping of option specificiations.
    """

    has_content: bool = True  # type: ignore[misc]
    final_argument_whitespace: bool = True  # type: ignore[misc]
    option_spec = {
        "type": directives.unchanged_required,
        "icon": directives.unchanged_required,
        "gradient": directives.unchanged_required,
    }

    def run(self) -> list[Node]:
        """Create node from the reStructuredText source.

        This method processes the directive's arguments, options and
        content, and return a list of Docutils/Sphinx nodes that will be
        inserted into the document tree at the point where the directive
        was encountered.

        :return: List of Docutils node for custom directive.
        """
        node = HomelanderNode("\n".join(self.content), **self.options)
        return [node]


def visit(self: HTMLTranslator, node: HomelanderNode) -> None:
    """Node visitor function which maps the node element."""
    pass


def depart(self: HTMLTranslator, node: HomelanderNode) -> None:
    """Node departure function which maps the node element."""
    pass


def html_page_context(
    app: Sphinx,
    pagename: str,
    templatename: str,
    context: dict[str, t.Any],
    doctree: Node,
) -> None:
    """Register function for Coeus' HTML context."""
    if pagename == "landing-page":
        context["is_homelander"] = True


name: t.Final[str] = "homelander"
node = HomelanderNode
directive = HomelanderDirective
add_html_context: bool = True
callback = html_page_context
