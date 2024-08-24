"""\
Coeus Sphinx Theme Documentation Hero Directive
===============================================

Author: Akshay "XA" Mestry <xa@mes3.dev>
Created on: Monday, August 12 2024
Last updated on: Friday, August 23 2024

This module provides a custom directive for the Coeus Sphinx Theme,
that allows authors and contributors to add an icon or graphic, a
background gradient, a summary and document type to their documentation
title banner. The summary is basically an abstract of the document's
contents that is displayed prominently at the top of the page after the
main title, helping readers quickly understand the scope and purpose of
the document.

Coeus Sphinx Theme's documentation hero is created using the custom
`documentation-hero` directive, which is included as part of this theme.
The directive is implemented below, and is available to use by authors
and contributors when building the documentation.

.. note::

    SVG images are more suitable for considering as banner or hero
    icons. Try using icons from `FontAwesome` as they're natively
    supported by Coeus Sphinx Theme.

.. note::

    The summary should be maximum of 2 lines.

.. note::

    This module is designed specifically for the Coeus Sphinx Theme,
    hence the directive may not be available or may be implemented
    differently for different themes. Please consult the documentation
    for more information.

.. versionchanged:: 2024.08.23
"""

from __future__ import annotations

import typing as t

import jinja2
from docutils.nodes import Element
from docutils.nodes import Node
from docutils.parsers.rst import Directive
from docutils.parsers.rst import directives
from sphinx.application import Sphinx
from sphinx.util import logging
from sphinx.writers.html import HTMLTranslator

logger = logging.getLogger(__name__)


class DocumentationHero(t.NamedTuple):
    """Collector for documentation hero."""

    document: str
    gradient: str
    icon: str
    summary: str


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
    :var option_spec: A mapping of option specificiations.

    .. versionchanged:: 2024.08.23
    """

    has_content: bool = True  # type: ignore[misc]
    final_argument_whitespace: bool = True  # type: ignore[misc]
    option_spec = {
        "gradient": directives.unchanged_required,
        "icon": directives.unchanged_required,
        "summary": directives.unchanged_required,
        "type": directives.unchanged_required,
    }

    def run(self) -> list[Node]:
        """Create node from the reStructuredText source.

        This method processes the directive's arguments, options and
        content, and return a list of Docutils/Sphinx nodes that will be
        inserted into the document tree at the point where the directive
        was encountered.

        :return: List of Docutils node for custom directive.

        .. versionchanged:: 2024.08.23

            Available types are deprecated. None type will be rendered
            as an empty string in HTML.
        """
        env = self.state.document.settings.env
        node = DocumentationHeroNode("\n".join(self.content), **self.options)
        if not hasattr(env, "documentation_hero"):
            env.documentation_hero = {}
        env.documentation_hero[env.docname] = DocumentationHero(
            document=node.attributes["type"],
            gradient=node.attributes["gradient"],
            icon=node.attributes["icon"],
            summary=node.attributes["summary"],
        )
        return [node]


template: t.Final[jinja2.Template] = jinja2.Template(
    """\
<div class="documentation-hero-summary">
<p class="font-medium">{{ html_coeus_documentation_hero_summary }}</p>
</div>
"""
)


def visit(self: HTMLTranslator, node: DocumentationHeroNode) -> None:
    """Node visitor function which maps the node element."""
    html_src = template.render(
        html_coeus_documentation_hero_gradient=node.attributes["gradient"],
        html_coeus_documentation_hero_icon=node.attributes["icon"],
        html_coeus_documentation_hero_summary=node.attributes["summary"],
        html_coeus_documentation_hero_type=node.attributes["type"],
    )
    self.body.append(html_src)


def depart(self: HTMLTranslator, node: DocumentationHeroNode) -> None:
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
    builder = app.builder.env
    if not hasattr(builder, "documentation_hero"):
        return
    if attr := builder.documentation_hero.get(pagename, ""):
        context["html_coeus_documentation_hero_gradient"] = attr.gradient
        context["html_coeus_documentation_hero_icon"] = attr.icon
        context["html_coeus_documentation_hero_summary"] = attr.summary
        context["html_coeus_documentation_hero_type"] = attr.document


name: t.Final[str] = "documentation-hero"
node = DocumentationHeroNode
directive = DocumentationHeroDirective
add_html_context: bool = True
callback = html_page_context
