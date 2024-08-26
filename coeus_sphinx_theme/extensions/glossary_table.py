"""\
Coeus Sphinx Theme Glossary Table Directive
===========================================

Author: Akshay Mestry <xa@mes3.dev>
Created on: Friday, August 23 2024
Last updated on: Sunday, August 25 2024

This module provides a custom directive for the Coeus Sphinx Theme,
that allows authors and contributors to implement Sphinx's or Docutils'
glossary but in the style of list tables.

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

.. versionchanged:: 2024.08.30

    [1] The module has been significantly refactored to minimize code
        duplication and the docstrings now justify the code that they
        represent. This is a big change over the previous extension-
        management capabilties of Coeus Sphinx Theme.
    [2] The extension will now considers `term` as the content which
        begins with `*` rather than something ending with `::`. Rest
        of the directive's functionality stays the same.
    [3] The `ClassVar` update now conforms to the `mypy` restrictions.
"""

from __future__ import annotations

import typing as t

import docutils.nodes as nodes
import docutils.parsers.rst as rst

if t.TYPE_CHECKING:
    from docutils.statemachine import StringList
    from sphinx.writers.html import HTMLTranslator

name: t.Final[str] = "glossary-table"


class node(nodes.Element):
    """Class for representing a node in a document tree."""

    pass


class directive(rst.Directive):
    """Class for representing a custom directive in reStructuredText.

    The class allows using a custom directive and maps the source
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
        glossary = node("\n".join(self.content), **self.options)
        glossary += self.table(self.parse(self.content))
        return [glossary]

    def parse(self, content: StringList) -> list[tuple[str, ...]]:
        """Parse the directive and extract the glossary content."""
        term: str | None = None
        definition: list[str] = []
        glossary: list[tuple[str, ...]] = []
        for item in content:
            if not (element := item.strip()):
                continue
            if item.startswith("*"):
                if term:
                    glossary.append((term, "\n".join(definition)))
                term = element[1:].strip()
                definition = []
            else:
                definition.append(item)
        if term:
            glossary.append((term, "\n".join(definition)))
        return sorted(glossary, key=lambda x: x[0])

    def table(self, glossary: list[tuple[str, ...]]) -> nodes.table:
        """Build list style like table with glossary data."""
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
            body_row = nodes.row()
            term_entry = nodes.entry()
            term_entry += nodes.paragraph(text=term)
            body_row += term_entry
            def_entry = nodes.entry()
            def_entry += nodes.paragraph(text=definition)
            body_row += def_entry
            tbody += body_row
        return table


def visit(self: HTMLTranslator, node: node) -> None:
    """Node visitor function which maps the node element."""
    self.visit_table(node)


def depart(self: HTMLTranslator, node: node) -> None:
    """Node departure function which maps the node element."""
    self.depart_table(node)


directive.has_content = True
