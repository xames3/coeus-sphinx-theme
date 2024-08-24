"""\
Coeus Sphinx Theme
==================

Author: Akshay "XA" Mestry <xa@mes3.dev>
Created on: Sunday, August 11 2024
Last updated on: Friday, August 23 2024

This module defines the Coeus Sphinx Theme, providing utilities and
configuration for integrating a custom theme into Sphinx documentation.

The Coeus Sphinx Theme ensures that assets are hashed for cache busting,
and integrates seamlessly with Sphinx's HTML output, enabling parallel
reading and writing during documentation generation.

.. versionadded:: 2024.08.23

    [1] Support for embedding YouTube videos and Glossary table via
        custom directives.
    [2] Support for native JQuery and DataTableJS via the
        `sphinx_datatables` and `sphinxcontrib.jquery` extensions as
        part of Coeus's install.
    [3] Support Coeus specific HTML theming options.

.. versionchanged:: 2024.08.23

    [1] Adopting year-based versioning.
    [2] Major refactor to conform to the newest changes.
    [3] `module.klass` is now `module.directive`.
"""

from __future__ import annotations

import os
import types
import typing as t

from docutils.nodes import Node
from sphinx.application import Sphinx
from sphinx.util import logging

from coeus_sphinx_theme.extensions import contributor_hero
from coeus_sphinx_theme.extensions import documentation_hero
from coeus_sphinx_theme.extensions import embed_youtube
from coeus_sphinx_theme.extensions import glossary_table
from coeus_sphinx_theme.extensions import homelander
from coeus_sphinx_theme.extensions import top_ribbon

logger = logging.getLogger(__name__)

theme_name: t.Final[str] = "coeus_sphinx_theme"
theme_version: str = "2024.08.23"

modules: t.Sequence[types.ModuleType] = (
    contributor_hero,
    documentation_hero,
    embed_youtube,
    glossary_table,
    homelander,
    top_ribbon,
)

natively_supported_extensions: t.Sequence[str] = (
    "sphinx_datatables",
    "sphinx_design",
    "sphinx_tags",
    "sphinxcontrib.jquery",
)


def update_html_context(
    app: Sphinx,
    pagename: str,
    templatename: str,
    context: dict[str, t.Any],
    doctree: Node,
) -> None:
    """Register function for Coeus' HTML context.

    .. versionadded:: 2024.08.23

        [1] Support Coeus specific HTML theming options.
    """
    coeus_theme_options = app.config.html_coeus_theme_options
    available_options = ("navbar_links", "show_previous_next_pages")
    for option in available_options:
        context[option] = coeus_theme_options.get(option)


def setup(app: Sphinx) -> dict[str, t.Any]:
    """Initialize the Coeus Sphinx Theme and connect its setup.

    This function registers the Coeus Sphinx Theme with the Sphinx
    application. It also sets the theme's parallel read and write safety
    properties.

    :param app: The Sphinx application instance.
    :return: A dictionary indicating that the theme is safe for parallel
        reading and writing.

    .. versionadded:: 2024.08.23

        [1] Support Coeus specific HTML theming options.

    .. versionchanged:: 2024.08.23

        [1] `module.klass` is now `module.directive`.
    """
    here = os.path.abspath(os.path.dirname(__file__))
    for extension in natively_supported_extensions:
        app.setup_extension(extension)
    config = app.config
    coeus_theme_configurations: dict[str, tuple[t.Any, ...]] = {
        "html_coeus_author": (config.author, tuple),
        "html_coeus_copyright": (config.copyright, str),
        "html_coeus_documentation": ("#", str),
        "html_coeus_email": ("#", str),
        "html_coeus_favicon": ("#", str),
        "html_coeus_github": ("#", str),
        "html_coeus_homepage": ("#", str),
        "html_coeus_include_last_updated_date": (True, bool),
        "html_coeus_license": ("#", str),
        "html_coeus_logo": ("", str),
        "html_coeus_permalinks_icon": ("", str),
        "html_coeus_repository": ("#", str),
        "html_coeus_tags_create_badges": (True, bool),
        "html_coeus_tags_create_tags": (True, bool),
        "html_coeus_tags_page_title": ("Tagged", str),
        "html_coeus_tags_prefix": ("", str),
        "html_coeus_theme_options": (config.html_theme_options, dict),
        "html_coeus_title": (config.html_title or config.project, tuple),
        "html_coeus_twitter": ("#", str),
        "html_coeus_version": (config.release, str),
    }
    for name, default in coeus_theme_configurations.items():
        app.add_config_value(name, default[0], "html", default[1])
    coeus_theme_defaults: dict[str, str] = {
        "html_baseurl": "html_coeus_documentation",
        "html_favicon": "html_coeus_favicon",
        "html_logo": "html_coeus_logo",
        "html_permalinks_icon": "html_coeus_permalinks_icon",
        "html_theme_options": "html_coeus_theme_options",
        "html_title": "html_coeus_title",
        "tags_create_badges": "html_coeus_tags_create_badges",
        "tags_create_tags": "html_coeus_tags_create_tags",
        "tags_intro_text": "html_coeus_tags_prefix",
        "tags_page_title": "html_coeus_tags_page_title",
    }
    for default, new in coeus_theme_defaults.items():  # type: ignore
        setattr(config, default, getattr(config, new))  # type: ignore
    app.add_html_theme(name=theme_name, theme_path=here)
    app.add_css_file("theme.css", priority=900)
    app.add_js_file("theme.js", loading_method="defer")
    for module in modules:
        app.add_node(module.node, html=(module.visit, module.depart))
        app.add_directive(module.name, module.directive)
        if module.add_html_context:
            app.connect("html-page-context", module.html_page_context)
    app.connect("html-page-context", update_html_context)
    return {
        "version": theme_version,
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
