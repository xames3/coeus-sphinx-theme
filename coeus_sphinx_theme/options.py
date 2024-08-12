"""\
Coeus Sphinx Theme Options
==========================

Author: Akshay "XA" Mestry <xa@mes3.dev>
Created on: Sunday, August 11 2024
Last updated on: Sunday, August 11 2024

This module defines the configuration options for the Coeus Sphinx Theme.
It provides a structured and easily accessible way to customize the
appearance and behavior of Sphinx-generated documentation using the
Coeus Theme.

The `CoeusThemeOptions` class encapsulates the available theme options,
allowing users to configure their Sphinx documentation through the
`html_theme_options` dictionary in their `conf.py` file.
"""

from __future__ import annotations

import typing as t
from dataclasses import dataclass
from dataclasses import field

from sphinx.util import logging

logger = logging.getLogger(__name__)


class GraphicalLink(t.TypedDict):
    """A type definition for a graphical link.

    This `TypedDict` represents a dictionary that stores information
    about a link that includes both a URL and an associated graphic
    (e.g., an icon or image).

    :param link: The URL to which the graphical link should point.
    :param graphic: The path to the graphic (icon/image) that should be
        displayed alongside the link.
    """

    link: str
    graphic: str


@dataclass
class CoeusThemeOptions:
    """Helper class for configuring the Coeus Sphinx Theme.

    This class contains various options that can be configured by the
    user in the `html_theme_options` dictionary within their Sphinx
    `conf.py` file. Each attribute in this class corresponds to a key in
    the `html_theme_options` dictionary, allowing users to customize
    the theme's behavior and appearance.

    :param show_breadcrumbs: If `True`, the theme includes breadcrumbs
        (navigation links) on every page except the root page.
    :param breadcrumbs_separator: The separator used between breadcrumb
        links.
    :param copy_link: If `True`, clicking a headerlink copies its URL
        to the clipboard.
    :param show_scroll_to_top: If `True`, the theme shows a button that
        scrolls to the top of the page when clicked.
    :param graphical_link: If `True`, the theme includes an icon after
        external links and adds `rel="nofollow noopener"` to the links'
        attributes.
    :param navbar_links: A dictionary containing links to include in the
        site header. The keys are labels for the links, and the values
        are URLs.
    :param graphical_links: A dictionary containing additional graphical
        links to include on the right of the search bar. The keys are
        labels for the links' `title` attributes, and the values are
        instances of `GraphicalLink`.
    :param logo_light: The path to a logo for the light mode. If using
        separate logos for light and dark modes, both must be provided.
    :param logo_dark: The path to a logo for the dark mode. If using
        separate logos for light and dark modes, both must be provided.
    :param globaltoc_includehidden: If `True`, the theme includes
        entries from hidden `toctree` directives in the sidebar.
    """

    breadcrumbs_separator: str = "/"
    copy_link: bool = True
    globaltoc_includehidden: bool = True
    graphical_link: bool = False
    graphical_links: dict[str, GraphicalLink] = field(default_factory=dict)
    logo_dark: str | None = None
    logo_light: str | None = None
    navbar_links: dict[str, str] = field(default_factory=dict)
    show_breadcrumbs: bool = True
    show_scroll_to_top: bool = False
