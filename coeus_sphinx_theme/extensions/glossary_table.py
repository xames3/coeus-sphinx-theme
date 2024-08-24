"""\
Coeus Sphinx Theme Glossary Table Directive
===========================================

Author: Akshay "XA" Mestry <xa@mes3.dev>
Created on: Friday, August 23 2024
Last updated on: Friday, August 23 2024

This module provides a custom directive for the Coeus Sphinx Theme,
that allows authors and contributors to implement Sphinx's glossary but
in List Table style.

Coeus Sphinx Theme's list table derived glossary table is created using
the custom `glossary-table` directive, which is included as part of this
theme. The directive is implemented below, and is available to use by
authors and contributors when building the documentation.

.. note::

    This module is designed specifically for the Coeus Sphinx Theme,
    hence the directive may not be available or may be implemented
    differently for different themes. Please consult the documentation
    for more information.

.. versionadded:: 2024.08.23
"""

from __future__ import annotations

import typing as t

from docutils import nodes
from docutils.nodes import Element
from docutils.nodes import Node
from docutils.parsers.rst import Directive
from docutils.statemachine import StringList
from sphinx.util import logging
from sphinx.writers.html import HTMLTranslator

logger = logging.getLogger(__name__)


class GlossaryTableNode(Element):
    pass


class GlossaryTableDirective(Directive):
    """A directive class for a custom directive.

    This class allows using a custom directive and maps the source
    reStructuredText to `GlossaryTableNode` element doctree node.

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
        content = self.parse_content(self.content)
        node = GlossaryTableNode("\n".join(self.content), **self.options)
        node += self.build_table(content)
        return [node]

    def parse_content(self, content: StringList) -> list[tuple[str, str]]:
        """Parse the directive and extract the glossary content."""
        glossary: list[tuple[str, str]] = []
        term: str | None = None
        definition: list[str] = []
        for row in content:
            element = row.strip()
            if not element:
                continue
            if row[0].isalpha() and row.endswith("::"):
                if term:
                    glossary.append((term, "\n".join(definition)))
                term = element[:-2].strip()
                definition = []
            else:
                definition.append(row)
        if term:
            glossary.append((term, "\n".join(definition)))
        return sorted(glossary, key=lambda x: x[0])

    def build_table(self, glossary: list[tuple[str, str]]) -> nodes.table:
        """Build table node with the glossary data."""
        table = nodes.table()
        tgroup = nodes.tgroup(cols=2)
        table += tgroup
        tgroup += nodes.colspec(colwidth=25)
        tgroup += nodes.colspec(colwidth=75)
        thead = nodes.thead()
        tgroup += thead
        tbody = nodes.tbody()
        tgroup += tbody
        header_row = nodes.row()
        header_term = nodes.entry()
        header_term += nodes.paragraph(text="Term")
        header_row += header_term
        header_definition = nodes.entry()
        header_definition += nodes.paragraph(text="Definition")
        header_row += header_definition
        thead += header_row
        for term, definition in glossary:
            row = nodes.row()
            term_entry = nodes.entry()
            term_entry += nodes.paragraph(text=term)
            row += term_entry
            def_entry = nodes.entry()
            def_entry += nodes.paragraph(text=definition)
            row += def_entry
            tbody += row
        return table


def visit(self: HTMLTranslator, node: GlossaryTableNode) -> None:
    """Node visitor function which maps the node element."""
    self.visit_table(node)


def depart(self: HTMLTranslator, node: GlossaryTableNode) -> None:
    """Node departure function which maps the node element."""
    self.depart_table(node)


def html_page_context() -> None:
    """Register function for Coeus' HTML context."""
    pass


name: t.Final[str] = "glossary-table"
node = GlossaryTableNode
directive = GlossaryTableDirective
add_html_context: bool = False
callback = html_page_context
