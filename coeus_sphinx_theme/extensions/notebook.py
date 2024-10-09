"""\
Coeus Sphinx Theme Notebook Directive
=====================================

Author: Akshay Mestry <xa@mes3.dev>
Created on: Wednesday, October 09 2024
Last updated on: Wednesday, October 09 2024

This module provides a custom directive for the Coeus Sphinx Theme,
that allows authors and contributors to embed a Jupyter Notebook or a
Jupyter Lite interpreter in their document pages.

Coeus Sphinx Theme's notebook embedding feature is created using the
custom `notebook` directive, which is included as part of this
theme. The directive is implemented below, and is available to use by
authors and contributors when building the documentation.

.. note::

    This module is designed specifically for the Coeus Sphinx Theme,
    hence the directive may not be available or may be implemented
    differently for different themes. Please consult the documentation
    for more information.

.. versionadded:: 2024.10.10
"""

from __future__ import annotations

import os
import typing as t

import docutils.nodes as nodes
import docutils.parsers.rst as rst
import jinja2

if t.TYPE_CHECKING:
    from sphinx.writers.html import HTMLTranslator

name: t.Final[str] = "notebook"

source = os.path.join(
    os.path.abspath(os.path.join(os.path.dirname(__file__), "..")),
    "notebook.html.jinja",
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
        base = self.options.get("content", "_jupyter")
        if self.content:
            url = f"../{base}/notebooks/?path=" + "\n".join(self.content)
        if not self.content:
            url = f"../{base}/repl/index.html?kernel=python&toolbar=1"
        self.options["url"] = url
        attributes: dict[str, str] = {}
        attributes["text"] = template.render(**self.options)
        attributes["format"] = "html"
        attributes["class"] = "jupyter-embed"
        return [nodes.raw(**attributes)]


def visit(self: HTMLTranslator, node: node) -> None:
    """Node visitor function which maps the node element."""
    pass


def depart(self: HTMLTranslator, node: node) -> None:
    """Node departure function which maps the node element."""
    pass


directive.has_content = True
directive.option_spec = {
    "content": rst.directives.unchanged,
    "width": rst.directives.unchanged,
    "height": rst.directives.unchanged,
}
