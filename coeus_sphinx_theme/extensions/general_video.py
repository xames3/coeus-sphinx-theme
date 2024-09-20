"""\
Coeus Sphinx Theme General Video Directive
==========================================

Author: Akshay Mestry <xa@mes3.dev>
Created on: Saturday, September 14 2024
Last updated on: Saturday, September 14 2024

This module provides a custom directive for the Coeus Sphinx Theme,
that allows authors and contributors to embed a public video as part of
their document.

Coeus Sphinx Theme's video embedding mechanism is created using the
custom `video` directive, which is included as part of this theme. The
directive is implemented below, and is available to use by authors and
contributors when building the documentation.

.. note::

    This module is designed specifically for the Coeus Sphinx Theme,
    hence the directive may not be available or may be implemented
    differently for different themes. Please consult the documentation
    for more information.

.. versionadded:: 2024.09.16
"""

from __future__ import annotations

import os
import typing as t

import docutils.nodes as nodes
import docutils.parsers.rst as rst
import jinja2

if t.TYPE_CHECKING:
    from sphinx.writers.html import HTMLTranslator

name: t.Final[str] = "video"

source = os.path.join(
    os.path.abspath(os.path.join(os.path.dirname(__file__), "..")),
    "video.html.jinja",
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
        self.assert_has_content()
        self.options["url"] = "\n".join(self.content)
        attributes: dict[str, str] = {}
        attributes["text"] = template.render(**self.options)
        attributes["format"] = "html"
        attributes["class"] = "general-video-container"
        return [nodes.raw(**attributes)]


def visit(self: HTMLTranslator, node: node) -> None:
    """Node visitor function which maps the node element."""
    pass


def depart(self: HTMLTranslator, node: node) -> None:
    """Node departure function which maps the node element."""
    pass


directive.has_content = True
directive.option_spec = {
    "autoplay": rst.directives.flag,
    "title": rst.directives.unchanged,
}
