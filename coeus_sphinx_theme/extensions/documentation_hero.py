"""\
Coeus Sphinx Theme Documentation Hero Directive
===============================================

Author: Akshay "XA" Mestry <xa@mes3.dev>
Created on: Monday, August 12 2024
Last updated on: Monday, August 12 2024

This module provides a custom directive for the Coeus Sphinx Theme,
that allows authors and contributors to add an icon or graphic as well
as a gradient to their documentation title.

Coeus Sphinx Theme's documentation hero is created using the custom
`documentation-hero` directive, which is included as part of this theme.
The directive is implemented below, and is available to use by authors
and contributors when building the documentation.

.. note::

    SVG images are more suitable for considering as banner or hero
    icons. Try using icons from `FontAwesome` as they're natively
    supported by Coeus Sphinx Theme.

.. note::

    This module is designed specifically for the Coeus Sphinx Theme,
    hence the directive may not be available or may be implemented
    differently for different themes. Please consult the documentation
    for more information.
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

available_types: tuple[str, ...] = ("Article", "Guide", "Changelog")


class DocumentationHeroNode(Element):
    pass


class DocumentationHeroDirective(Directive):
    """A directive class for a custom directive.

    This class allows using a custom directive and maps the source
    reStructuredText to `DocumentationHeroNode` element doctree node.

    By using a custom directive, it allows contributors or
    authors to render an abstract content for the provided content. This
    class' rendering HTML behavior is further extended using another
    Python functions, `visit` and `depart`.

    :var has_content: A boolean flag to allow content in the directive,
        defaults to `True`.
    :var final_argument_whitespace: A boolean flag, may the final argument
        contain whitespace, set to `True`.
    """

    has_content: bool = True
    final_argument_whitespace: bool = True
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
        node = DocumentationHeroNode("\n".join(self.content), **self.options)
        if (node_type := node.attributes["type"]) not in available_types:
            raise ValueError(
                "Invalid document type. "
                f"Either {', '.join(available_types)} are allowed"
            )
        self.state.document.settings.env.app.type = node_type
        self.state.document.settings.env.app.icon = node.attributes["icon"]
        self.state.document.settings.env.app.grad = node.attributes["gradient"]
        return [node]


def visit(self: HTMLTranslator, node: DocumentationHeroNode) -> None:
    """Node visitor function which maps the node element."""
    pass


def depart(self: HTMLTranslator, node: DocumentationHeroNode) -> None:
    """Node departure function which maps the node element."""
    pass


def setup_html_context(
    app: Sphinx,
    pagename: str,
    templatename: str,
    context: dict[str, t.Any],
    doctree: Node,
) -> None:
    """Register function for Jinja2 context."""
    context["type"] = getattr(app, "type", "")
    context["icon"] = getattr(app, "icon", "")
    context["gradient"] = getattr(app, "grad", "")


name: t.Final[str] = "documentation-hero"
node = DocumentationHeroNode
klass = DocumentationHeroDirective
add_html_context: bool = True
callback = setup_html_context
