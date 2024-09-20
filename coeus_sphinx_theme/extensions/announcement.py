"""\
Coeus Sphinx Theme Announcement Directive
========================================

Author: Akshay Mestry <xa@mes3.dev>
Created on: Tuesday, August 13 2024
Last updated on: Sunday, August 25 2024

This module provides a custom directive for the Coeus Sphinx Theme,
that allows authors and contributors to add an announcement banner to
their document pages.

Coeus Sphinx Theme's top announcement ribbon is created using the
custom `announcement` directive, which is included as part of this
theme. The directive is implemented below, and is available to use by
authors and contributors when building the documentation.

.. note::

    This module is designed specifically for the Coeus Sphinx Theme,
    hence the directive may not be available or may be implemented
    differently for different themes. Please consult the documentation
    for more information.

.. versionchanged:: 2024.08.23

.. versionchanged:: 2024.09.01

    [1] The `top_ribbon` extension is now `announcement`, which made a
        lot of sense when we noticed the use of the extension in
        retrospective usage.
    [2] The module has been significantly refactored to minimize code
        duplication and the docstrings now justify the code that they
        represent. This is a big change over the previous extension-
        management capabilties of Coeus Sphinx Theme.
    [3] The `ClassVar` update now conforms to the `mypy` restrictions.
"""

from __future__ import annotations

import typing as t

import docutils.nodes as nodes
import docutils.parsers.rst as rst

if t.TYPE_CHECKING:
    from sphinx.application import Sphinx
    from sphinx.writers.html import HTMLTranslator

name: t.Final[str] = "announcement"


class node(nodes.Element):
    """Class for representing a node in a document tree."""

    pass


class directive(rst.Directive):
    """Class for representing a custom directive in reStructuredText.

    The class allows using a custom directive and maps the source
    reStructuredText to `node` element doctree node.

    By using a custom directive, Coeus Sphinx Theme allows contributors
    or authors to render content for their specific context and needs.

    .. versionchanged:: 2024.09.01

        [1] The `ClassVar` update now conforms to the `mypy`
            restrictions.
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
        if not hasattr(e := self.state.document.settings.env, "announcement"):
            e.announcement = {}
        e.announcement[e.docname] = (announcement := "\n".join(self.content))
        return [node(announcement, **self.options)]


def visit(self: HTMLTranslator, node: node) -> None:
    """Node visitor function which maps the node element."""
    pass


def depart(self: HTMLTranslator, node: node) -> None:
    """Node departure function which maps the node element."""
    pass


def html_page_context(
    app: Sphinx,
    pagename: str,
    templatename: str,
    context: dict[str, t.Any],
    doctree: nodes.Node,
) -> None:
    """Callback for Coeus Sphinx Theme's HTML context."""
    if not hasattr(app.builder.env, "announcement"):
        return
    if announcement := app.builder.env.announcement.get(pagename):
        context["announcement"] = announcement


directive.has_content = True
