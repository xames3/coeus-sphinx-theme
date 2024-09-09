"""\
Coeus Sphinx Theme Step Flow Directive
======================================

Author: Akshay Mestry <xa@mes3.dev>
Created on: Sunday, September 08 2024
Last updated on: Sunday, September 08 2024

This module provides a custom directive for the Coeus Sphinx Theme,
that allows authors and contributors to make a step-by-step tutorial
carousel with images and captions.

Coeus Sphinx Theme's step-by-step flow guide is created using the custom
`step-flow` directive, which is included as part of this theme. The
directive is implemented below, and is available to use by authors and
contributors when building the documentation.

.. note::

    SVG images are more suitable for considering as banner or hero
    icons. Try using icons from `FontAwesome` as they're natively
    supported by Coeus Sphinx Theme.

.. versionadded:: 2024.09.09
"""

from __future__ import annotations

import typing as t

import docutils.nodes as nodes
import docutils.parsers.rst as rst

if t.TYPE_CHECKING:
    from sphinx.writers.html import HTMLTranslator

name: t.Final[str] = "step-flow"


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
        element = node("\n".join(self.content), **self.options)
        self.state.nested_parse(self.content, self.content_offset, element)
        return [element]


def visit(self: HTMLTranslator, node: node) -> None:
    """Node visitor function which maps the node element."""
    self.body.append(self.starttag(node, "div", CLASS="step-flow-carousel"))


def depart(self: HTMLTranslator, node: node) -> None:
    """Node departure function which maps the node element."""
    self.body.append("</div>")


directive.has_content = True
