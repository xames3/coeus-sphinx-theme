"""\
Coeus Sphinx Theme YouTube Video Directive
==========================================

Author: Akshay "XA" Mestry <xa@mes3.dev>
Created on: Friday, August 23 2024
Last updated on: Friday, August 23 2024

This module provides a custom directive for the Coeus Sphinx Theme,
that allows authors and contributors to embed a public YouTube video
as part of their document.

Coeus Sphinx Theme's YouTube embedding mechanism is created using the
custom `youtube-video` directive, which is included as part of this
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

import jinja2 as j2
from docutils import nodes
from docutils.nodes import Element
from docutils.nodes import Node
from docutils.parsers.rst import Directive
from docutils.parsers.rst import directives
from docutils.parsers.rst import roles
from sphinx.util import logging
from sphinx.writers.html import HTMLTranslator

logger = logging.getLogger(__name__)

template: t.Final[j2.Template] = j2.Template(
    """\
<div class="youtube-video-container"><iframe width="{{ width }}"
height="{{ height }}" src="{{ url }}?controls=1&modestbranding=1"
title="YouTube video player" frameborder="0" allow="accelerometer;
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe></div>
"""
)


class YouTubeEmbedNode(Element):
    pass


class YouTubeEmbedDirective(Directive):
    """A directive class for a custom directive.

    This class allows using a custom directive and maps the source
    reStructuredText to `YouTubeEmbedNode` element doctree node.

    By using a custom directive, it allows contributors or
    authors to render an abstract content for the provided content. This
    class' rendering HTML behavior is further extended using another
    Python functions, `visit` and `depart`.

    :var has_content: A boolean flag to allow content in the directive,
        defaults to `True`.
    :var final_argument_whitespace: A boolean flag, may the final argument
        contain whitespace, set to `True`.
    :var option_spec: A mapping of option specificiations.
    """

    has_content: bool = True  # type: ignore[misc]
    final_argument_whitespace: bool = True  # type: ignore[misc]
    option_spec = {
        "width": directives.unchanged,
        "height": directives.unchanged,
        "start": directives.unchanged,
        "controls": directives.unchanged,
        "modestbranding": directives.unchanged,
        "color": directives.unchanged,
        "captions": directives.unchanged,
        "autoplay": directives.unchanged,
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
        width = self.options.get("width", "895px")
        height = self.options.get("height", "auto")
        start = self.options.get("start", 0)
        controls = self.options.get("controls", 1)
        modestbranding = self.options.get("modestbranding", 1)
        color = self.options.get("color", "red")
        captions = self.options.get("captions", 1)
        autoplayer = self.options.get("autoplayer", 1)
        content = self.content[0]
        uid = content.split("v=")[-1].split("&")[0]
        html_src = template.render(
            width=width,
            height=height,
            url=(
                f"https://www.youtube.com/embed/{uid}"
                f"?start={start}"
                f"&autoplay={autoplayer}"
                f"&controls={controls}"
                f"&modestbranding={modestbranding}"
                f"&color={color}"
                f"&cc_load_policy={captions}&rel=0"
            ),
        )
        node = nodes.raw(
            "", html_src, format="html", **{"class": "youtube-video-container"}
        )
        return [node]


def visit(self: HTMLTranslator, node: YouTubeEmbedNode) -> None:
    """Node visitor function which maps the node element."""
    pass


def depart(self: HTMLTranslator, node: YouTubeEmbedNode) -> None:
    """Node departure function which maps the node element."""
    pass


def html_page_context() -> None:
    """Register function for Coeus' HTML context."""
    pass


name: t.Final[str] = "youtube-video"
node = YouTubeEmbedNode
directive = YouTubeEmbedDirective
add_html_context: bool = False
callback = html_page_context
