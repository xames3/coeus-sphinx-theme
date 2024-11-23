"""\
Coeus Sphinx Theme Headshot Directive
=====================================

Author: Akshay Mestry <xa@mes3.dev>
Created on: Tuesday, August 27 2024
Last updated on: Saturday, November 23 2024

This module provides a custom directive for the Coeus Sphinx Theme,
that allows authors and contributors to add information about themselves
as contributor in particular, their photo (if any) and their affiliation.

Coeus Sphinx Theme's headshot section is created using the custom
`headshot` directive, which is included as part of this theme. The
directive is implemented below, and is available to use by authors and
contributors when building the documentation.

.. note::

    This module is designed specifically for the Coeus Sphinx Theme,
    hence the directive may not be available or may be implemented
    differently for different themes. Please consult the documentation
    for more information.

.. versionadded:: 2024.09.01

.. versionchanged:: 2024.09.09

    [1] The syntax of the `people` option is now changed and is now
        handled using `docutils.statemachine` for supporting the nested
        parsing. Rest of the functionality remains intact with no affect
        on the performance.

.. deprecated:: 2024.09.09

    [1] The `people` option is now deprecated in favor of more simple
        and intuitive `list-table` like directive layout.
"""

from __future__ import annotations

import os.path as p
import typing as t

import docutils.nodes as nodes
import docutils.parsers.rst as rst
import docutils.statemachine as stm

if t.TYPE_CHECKING:
    from sphinx.writers.html import HTMLTranslator

name: t.Final[str] = "headshots"


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

        .. versionchanged:: 2024.09.09

            [1] The syntax of the `people` option is now changed and is
                now handled using `docutils.statemachine` for supporting
                the nested parsing. Rest of the functionality remains
                intact with no affect on the performance.

        .. deprecated:: 2024.09.09

            [1] The `people` option is now deprecated in favor of more
                simple and intuitive `list-table` like directive layout.
        """
        self.assert_has_content()
        content: list[str] = []
        for line in self.content:
            if line and line.startswith("- "):
                content.append(current := line.split("- ")[-1].strip())
            else:
                current += line.strip()
                content[-1] = current
        people = [
            {
                "name": content[idx],
                "about": content[idx + 1],
                "headshot": content[idx + 2],
            }
            for idx in range(0, len(content), 3)
        ]
        if "sorted" in self.options:
            people = sorted(people, key=lambda x: x["name"])
        cols = self.options.get("columns", 2)
        (container := nodes.container())["classes"].append("headshots-grid")
        container["style"] = f"grid-template-columns: repeat({cols}, 1fr);"
        for person in people:
            individual = nodes.container()
            individual["classes"].append("headshot-card")
            identity = nodes.container()
            identity["classes"].append("headshot-identity-card")
            title = nodes.container()
            title["classes"].append("headshot-title-card")
            image = nodes.image(uri=person["headshot"])
            raw = p.join("..", "_images", p.basename(person["headshot"]))
            image["classes"].append("headshot-img")
            individual["style"] = (
                "background-image: linear-gradient(to right, "
                "rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0.7)), url("
                f'"{raw}");'
            )
            name = nodes.paragraph(text=person["name"])
            name["classes"].append("headshot-name")
            about_node = nodes.container()
            about_lines = stm.StringList([person["about"]])
            self.state.nested_parse(about_lines, 0, about_node)
            about = about_node[0]
            about["classes"].append("headshot-about")
            identity.append(image)
            title.append(name)
            title.append(about)
            identity.append(title)
            individual.append(identity)
            container.append(individual)
        return [container]


def visit(self: HTMLTranslator, node: node) -> None:
    """Node visitor function which maps the node element."""
    pass


def depart(self: HTMLTranslator, node: node) -> None:
    """Node departure function which maps the node element."""
    pass


directive.has_content = True
directive.option_spec = {
    "sorted": rst.directives.flag,
    "columns": rst.directives.unchanged,
}
