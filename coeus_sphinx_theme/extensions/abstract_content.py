"""\
Coeus Sphinx Theme Abstract Content Directive
=============================================

Author: Akshay "XA" Mestry <xa@mes3.dev>
Created on: Monday, August 12 2024
Last updated on: Monday, August 12 2024

This module provides a custom directive for the Coeus Sphinx Theme,
that allows authors and contributors to add an abstract content to their
documentation. An `abstract content` is a brief summary of the
document's contents that is displayed prominently at the top of the page
after the main title, helping readers quickly understand the scope and
purpose of the document.

Coeus Sphinx Theme's abstract content is created using the custom
`abstract-content` directive, which is included as part of this theme.
The directive is implemented below, and is available to use by authors
and contributors when building the documentation.

.. note::

    The abstract should be a single paragraph of text and no more than
    70 characters.

.. note::

    This module is designed specifically for the Coeus Sphinx Theme,
    hence the directive may not be available or may be implemented
    differently for different themes. Please consult the documentation
    for more information.
"""

from __future__ import annotations

import typing as t

import jinja2
from docutils.nodes import Element
from docutils.nodes import Node
from docutils.parsers.rst import Directive
from docutils.parsers.rst import roles
from sphinx.util import logging
from sphinx.writers.html import HTMLTranslator

logger = logging.getLogger(__name__)


class AbstractContentNode(Element):
    pass


class AbstractContentDirective(Directive):
    """A directive class for a custom directive.

    This class allows using a custom directive and maps the source
    reStructuredText to `AbstractContentNode` element doctree node.

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

    def run(self) -> list[Node]:
        """Create node from the reStructuredText source.

        This method processes the directive's arguments, options and
        content, and return a list of Docutils/Sphinx nodes that will be
        inserted into the document tree at the point where the directive
        was encountered.

        :return: List of Docutils node for custom directive.
        """
        roles.set_classes(self.options)
        node = AbstractContentNode("\n".join(self.content), **self.options)
        self.add_name(node)
        self.state.nested_parse(self.content, self.content_offset, node)
        return [node]


template: t.Final[jinja2.Template] = jinja2.Template(
    """<p class="abstract-content font-medium">{{ content }}</p>"""
)


def visit(self: HTMLTranslator, node: AbstractContentNode) -> None:
    """Node visitor function which maps the node element."""
    content = node.children[0].astext().replace("\n", " ")
    node.remove(node.children[0])
    html_src = template.render(content=content)
    self.body.append(html_src)


def depart(self: HTMLTranslator, node: AbstractContentNode) -> None:
    """Node departure function which maps the node element."""
    pass


name: t.Final[str] = "abstract-content"
node = AbstractContentNode
klass = AbstractContentDirective
add_html_context: bool = False
callback = lambda: None
