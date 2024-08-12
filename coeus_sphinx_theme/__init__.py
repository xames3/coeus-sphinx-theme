"""\
Coeus Sphinx Theme
==================

Author: Akshay "XA" Mestry <xa@mes3.dev>
Created on: Sunday, August 11 2024
Last updated on: Sunday, August 11 2024

This module defines the Coeus Sphinx Theme, providing utilities and
configuration for integrating a custom theme into Sphinx documentation.

The Coeus Sphinx Theme ensures that assets are hashed for cache busting,
and integrates seamlessly with Sphinx's HTML output, enabling parallel
reading and writing during documentation generation.
"""

from __future__ import annotations

import os
import typing as t

from sphinx.application import Sphinx
from sphinx.util import logging

logger = logging.getLogger(__name__)

theme_name: t.Final[str] = "coeus_sphinx_theme"
theme_version: str = "1.0.0alpha"


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
    app.add_html_theme(name=theme_name, theme_path=here)
    return {
        "version": theme_version,
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
