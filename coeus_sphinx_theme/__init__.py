"""\
Coeus Sphinx Theme
==================

Author: Akshay "XA" Mestry <xa@mes3.dev>
Created on: Sunday, August 11 2024
Last updated on: Monday, August 12 2024

This module defines the Coeus Sphinx Theme, providing utilities and
configuration for integrating a custom theme into Sphinx documentation.

The Coeus Sphinx Theme ensures that assets are hashed for cache busting,
and integrates seamlessly with Sphinx's HTML output, enabling parallel
reading and writing during documentation generation.
"""

from __future__ import annotations

import os
import types
import typing as t

from sphinx.application import Sphinx
from sphinx.util import logging

from coeus_sphinx_theme.extensions import contributor_hero
from coeus_sphinx_theme.extensions import documentation_hero
from coeus_sphinx_theme.extensions import homelander
from coeus_sphinx_theme.extensions import top_ribbon

logger = logging.getLogger(__name__)

theme_name: t.Final[str] = "coeus_sphinx_theme"
theme_version: str = "1.0.0alpha"

modules: t.Sequence[types.ModuleType] = (
    contributor_hero,
    documentation_hero,
    homelander,
    top_ribbon,
)


def setup(app: Sphinx) -> dict[str, t.Any]:
    """Initialize the Coeus Sphinx Theme and connect its setup.

    This function registers the Coeus Sphinx Theme with the Sphinx
    application. It also sets the theme's parallel read and write safety
    properties.

    :param app: The Sphinx application instance.
    :return: A dictionary indicating that the theme is safe for parallel
        reading and writing.
    """
    here = os.path.abspath(os.path.dirname(__file__))
    app.config.html_permalinks_icon = ""
    app.add_html_theme(name=theme_name, theme_path=here)
    app.add_css_file(f"{theme_name}.css", priority=900)
    for module in modules:
        if module.add_html_context:
            app.connect("html-page-context", module.callback)
        app.add_node(module.node, html=(module.visit, module.depart))
        app.add_directive(module.name, module.klass)
    return {
        "version": theme_version,
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
