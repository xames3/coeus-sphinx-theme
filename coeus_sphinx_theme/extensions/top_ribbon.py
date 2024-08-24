"""\
Coeus Sphinx Theme Top Ribbon Directive
=======================================

Author: Akshay "XA" Mestry <xa@mes3.dev>
Created on: Tuesday, August 13 2024
Last updated on: Friday, August 23 2024

This module provides a custom directive for the Coeus Sphinx Theme,
that allows authors and contributors to add an top_ribbon banner to
their document pages.

Coeus Sphinx Theme's documentation hero is created using the custom
`top_ribbon` directive, which is included as part of this theme.
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

import typing as t

from docutils.nodes import Element
from docutils.nodes import Node
from docutils.parsers.rst import Directive
from sphinx.application import Sphinx
from sphinx.util import logging
from sphinx.writers.html import HTMLTranslator

logger = logging.getLogger(__name__)


class TopRibbonNode(Element):
    pass


class TopRibbonDirective(Directive):
    """A directive class for a custom directive.

    This class allows using a custom directive and maps the source
    reStructuredText to `TopRibbonNode` element doctree node.

    By using a custom directive, it allows contributors or
    authors to render an abstract content for the provided content. This
    class' rendering HTML behavior is further extended using another
    Python functions, `visit` and `depart`.

    :var has_content: A boolean flag to allow content in the directive,
        defaults to `True`.
    :var final_argument_whitespace: A boolean flag, may the final argument
        contain whitespace, set to `True`.
    """

    has_content: bool = True  # type: ignore[misc]
    final_argument_whitespace: bool = True  # type: ignore[misc]

    def run(self) -> list[Node]:
        """Create node from the reStructuredText source.

        This method processes the directive's arguments, options and
        content, and return a list of Docutils/Sphinx nodes that will be
        inserted into the document tree at the point where the directive
        was encountered.

        :return: List of Docutils node for custom directive.
        """
        env = self.state.document.settings.env
        node = TopRibbonNode("\n".join(self.content), **self.options)
        if not hasattr(env, "top_ribbon"):
            env.top_ribbon = {}
        env.top_ribbon[env.docname] = "\n".join(self.content)
        return [node]


def visit(self: HTMLTranslator, node: TopRibbonNode) -> None:
    """Node visitor function which maps the node element."""
    pass


def depart(self: HTMLTranslator, node: TopRibbonNode) -> None:
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
    if not hasattr(app.builder.env, "top_ribbon"):
        return
    if top_ribbon := app.builder.env.top_ribbon.get(pagename, ""):
        context["top_ribbon"] = top_ribbon


name: t.Final[str] = "top-ribbon"
node = TopRibbonNode
directive = TopRibbonDirective
add_html_context: bool = True
callback = html_page_context
