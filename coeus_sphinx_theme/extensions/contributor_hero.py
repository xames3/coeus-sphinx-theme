"""\
Coeus Sphinx Theme Contributor Hero Directive
=============================================

Author: Akshay "XA" Mestry <xa@mes3.dev>
Created on: Wednesday, August 14 2024
Last updated on: Wednesday, August 14 2024

This module provides a custom directive for the Coeus Sphinx Theme,
that allows authors and contributors to add information about themselves
in particular, their socials (if any) and the published date.

Coeus Sphinx Theme's contributor hero is created using the custom
`contributor-hero` directive, which is included as part of this theme.
The directive is implemented below, and is available to use by authors
and contributors when building the documentation.

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
from docutils.parsers.rst import directives
from sphinx.util import logging
from sphinx.writers.html import HTMLTranslator

logger = logging.getLogger(__name__)


class ContributorHero(t.NamedTuple):
    """Collector for contributor hero."""

    contributors: str
    location: str
    timestamp: str


class ContributorHeroNode(Element):
    pass


template: t.Final[jinja2.Template] = jinja2.Template(
    """\
{%- if location and contributors and timestamp %}
<div class="container flex-1 px-0">
  <p class="contributor-hero-timestamp">{{ timestamp }}</p>
  <div class="contributor-hero-publisher py-2">
    <p>Published by {{ contributors }}</p>
    <div class="contributor-hero-socials">
      <i class="fa-solid fa-envelope"></i>
      <i class="fa-brands fa-github"></i>
      <i class="fa-brands fa-x-twitter"></i>
      <i class="fa-solid fa-link"></i>
    </div>
  </div>
</div>
{%- endif %}
"""
)


class ContributorHeroDirective(Directive):
    """A directive class for a custom directive.

    This class allows using a custom directive and maps the source
    reStructuredText to `ContributorHeroNode` element doctree node.

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
        "contributors": directives.unchanged_required,
        "location": directives.unchanged_required,
        "timestamp": directives.unchanged_required,
    }

    def run(self) -> list[Node]:
        """Create node from the reStructuredText source.

        This method processes the directive's arguments, options and
        content, and return a list of Docutils/Sphinx nodes that will be
        inserted into the document tree at the point where the directive
        was encountered.

        :return: List of Docutils node for custom directive.
        """
        roles.set_classes(self.options)
        node = ContributorHeroNode("\n".join(self.content), **self.options)
        self.add_name(node)
        self.state.nested_parse(self.content, self.content_offset, node)
        return [node]


def visit(self: HTMLTranslator, node: ContributorHeroNode) -> None:
    """Node visitor function which maps the node element."""
    html_src = template.render(
        contributors=node.attributes["contributors"],
        location=node.attributes["location"],
        timestamp=node.attributes["timestamp"],
    )
    self.body.append(html_src)


def depart(self: HTMLTranslator, node: ContributorHeroNode) -> None:
    """Node departure function which maps the node element."""
    pass


def empty():
    pass


name: t.Final[str] = "contributor-hero"
node = ContributorHeroNode
klass = ContributorHeroDirective
add_html_context: bool = False
callback = empty
