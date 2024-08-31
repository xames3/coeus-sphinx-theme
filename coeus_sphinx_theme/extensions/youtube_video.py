"""\
Coeus Sphinx Theme YouTube Video Directive
==========================================

Author: Akshay Mestry <xa@mes3.dev>
Created on: Friday, August 23 2024
Last updated on: Sunday, August 25 2024

This module provides a custom directive for the Coeus Sphinx Theme,
that allows authors and contributors to embed a public YouTube video
as part of their document.

Coeus Sphinx Theme's YouTube video embedding mechanism is created using
the custom `youtube-video` directive, which is included as part of this
theme. The directive is implemented below, and is available to use by
authors and contributors when building the documentation.

.. note::

    This module is designed specifically for the Coeus Sphinx Theme,
    hence the directive may not be available or may be implemented
    differently for different themes. Please consult the documentation
    for more information.

.. versionadded:: 2024.08.23

.. versionadded:: 2024.09.01

    [1] This update adds support for fetching the YouTube video title
        automatically using `pytube` module.
    [2] The directive now supports adding a custom title to the YouTube
        video using the `title` option.

.. versionchanged:: 2024.09.01

    [1] The `embed_youtube` extension is now `youtube_video`, which
        made a lot of sense when we noticed the use of the extension in
        retrospective usage.
    [2] The module has been significantly refactored to minimize code
        duplication and the docstrings now justify the code that they
        represent. This is a big change over the previous extension-
        management capabilties of Coeus Sphinx Theme.
    [3] The extension will now use a `Jinja2` template rather than using
        `Jinja2` string rendering. This is just for the convenience and
        for future enhancements.
    [4] The `ClassVar` update now conforms to the `mypy` restrictions.

.. deprecated:: 2024.09.01

    [1] The `controls`, `modestbranding`, `color`, `width` and `height`
        options for the directive have been deprecated until further
        exploration.
    [2] Deprecated the need of temporary `options` dictionary.
"""

from __future__ import annotations

import os
import typing as t

import docutils.nodes as nodes
import docutils.parsers.rst as rst
import jinja2
import pytube

if t.TYPE_CHECKING:
    from sphinx.writers.html import HTMLTranslator

name: t.Final[str] = "youtube-video"

source = os.path.join(
    os.path.abspath(os.path.join(os.path.dirname(__file__), "..")),
    "youtube_video.html.jinja",
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

    .. versionadded:: 2024.09.01

        [1] This update adds support for fetching the YouTube video
            title automatically using `pytube` module.
        [2] The directive now supports adding a custom title to the
            YouTube video using the `title` option.

    .. versionchanged:: 2024.09.01

        [1] The `ClassVar` update now conforms to the `mypy`
            restrictions.

    .. deprecated:: 2024.09.01

        [1] The `controls`, `modestbranding`, `color`, `width` and
            `height` options for the directive have been deprecated
            until further exploration.
        [2] Deprecated the need of temporary `options` dictionary.
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
        url = rst.directives.uri(self.content.pop())
        self.options["url"] = (
            f"https://youtube.com/embed/{url.split('v=')[-1].split('&')[0]}"
            f"?start={self.options.get('startfrom', 0)}"
            f"&autoplay={self.options.get('autoplayer', 1)}"
            f"&cc_load_policy={self.options.get('showcaptions', 1)}&rel=0"
        )
        if "showtitle" in self.options:
            self.options["title"] = pytube.YouTube(url).title
        attributes: dict[str, str] = {}
        attributes["text"] = template.render(**self.options)
        attributes["format"] = "html"
        attributes["class"] = "youtube-video-container"
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
    "showcaptions": rst.directives.flag,
    "showtitle": rst.directives.flag,
    "startfrom": rst.directives.positive_int,
    "title": rst.directives.unchanged,
}
