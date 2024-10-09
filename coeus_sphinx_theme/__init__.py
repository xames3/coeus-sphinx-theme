"""\
Coeus Sphinx Theme
==================

Author: Akshay Mestry <xa@mes3.dev>
Created on: Sunday, August 11 2024
Last updated on: Wednesday, October 09 2024

This module defines the extensions for Coeus Sphinx Theme, providing
utilities and configuration for integrating a custom theme into Sphinx
documentation.

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

.. versionadded:: 2024.09.01

    [1] This update adds support for fetching the YouTube video title
        automatically using `pytube` module.
    [2] The directive now supports adding a custom title to the YouTube
        video using the `title` option.
    [3] Support for Bootstrap-native image carousels using the extension
        like, `sphinx_carousel`.
    [4] Added support for location, reading time and document language
        options in the `contributors` directive.
    [5] Added new `headshots` directive that allows authors and
        contributors to add information about themselves as contributor
        in particular, their photo (if any) and their affiliation.
    [6] Added support for automatically listing the author provided
        socials via the `html_coeus_socials` option.
    [7] Added support for custom Sphinx `stylize` role.

.. versionchanged:: 2024.09.01

    [1] The `embed_youtube` extension is now `youtube_video`, which
        made a lot of sense when we noticed the use of the extension in
        retrospective usage.
    [2] The `documentation_hero` extension is now `title_hero`, which
        made a lot of sense when we noticed the use of the extension in
        retrospective usage.
    [3] The `glossary_table` extension will now considers `term` as
        the content which begins with `*` rather than something ending
        with `::`. Rest of the directive's functionality stays the same.
    [4] The `contributor_hero` extension is now `contributors`, which
        made a lot of sense when we noticed the use of the extension in
        retrospective usage.
    [5] The `top_ribbon` extension is now `announcement`, which made a
        lot of sense when we noticed the use of the extension in
        retrospective usage.
    [6] The extensions have been significantly refactored to minimize
        code duplication and the docstrings now justify the code that
        they represent. This is a big change over the previous
        extension-management capabilties of Coeus Sphinx Theme.
    [7] The extensions now use a `Jinja2` template rather than using
        `Jinja2` string rendering. This is just for the convenience and
        for future enhancements.
    [8] The `ClassVar` update now conforms to the `mypy` restrictions.
    [9] The `copyrights` are now properly shown in the website's footer.

.. deprecated:: 2024.09.01

    [1] The `controls`, `modestbranding`, `color`, `width` and `height`
        options for the `youtube_video` directive have been deprecated
        until further exploration.
    [2] The `html_coeus_twitter` option is now deprecated in favor of
        the `html_coeus_socials` option.
    [3] The use of `modules` collection is now deprecated in favor of
        `directives` import.
    [4] The `glossary_table` directive is now deprecated in favor of
        Sphinx's `glossary` directive to better support with `term`
        cross-reference role.

.. versionadded:: 2024.09.09

    [1] Added support for "Open Graph Protocol" using another extension,
        called `sphinxext.opengraph`.
    [2] Added support for collapsible table of content in the sidebar
        and post processing HTML capabilities.

.. versionchanged:: 2024.09.09

    [1] The syntax of the `people` option is now changed and is now
        handled using `docutils.statemachine` for supporting the nested
        parsing in the `headshots` module whereas it is now handled at
        the `node` level rather than the node visitor method in the
        `contributors` module. Rest of the functionality remains intact
        with no affect on the performance.
    [2] The `gradient` option from the `title-hero` directive is now
        optional and is handled at the HTML level. This functionality
        is now been taken over the CSS gradient animation.

.. deprecated:: 2024.09.09

    [1] The `people` option is now deprecated in favor of more simple
        and intuitive `list-table` like directive layout from both
        the `headshots` and `contributors` modules.
    [2] The `article` option is now deprecated from `title-hero`
        directive.
    [3] The `html_coeus_include_last_updated_date` option is now
        deprecated in favor of traditional sphinx option.

.. versionadded:: 2024.09.16

    [1] Added native support for mangling `sphinx_tags` tags with custom
        embedding for `title-hero` directive.
    [2] Added support for `supported_language` option from `conf.py` in
        the `contributors` directive.

.. versionchanged:: 2024.09.16

    [1] The `language` option is now optional and is not enforced in
        the `contributors` directive.

.. versionadded:: 2024.10.10

    [1] Added support for embedding Jupyter Lite/Notebooks inside the
        documentation using the `notebook` directive.
"""

from __future__ import annotations

import os
import types
import typing as t

import docutils.parsers.rst as rst
import sphinx_tags

from coeus_sphinx_theme.extensions import directives
from coeus_sphinx_theme.extensions import roles
from coeus_sphinx_theme.utils import add_title_hero
from coeus_sphinx_theme.utils import create_file_with_title_hero
from coeus_sphinx_theme.utils import post_process_build
from coeus_sphinx_theme.utils import read_env_docs

if t.TYPE_CHECKING:
    import docutils.nodes as nodes
    from sphinx.application import Sphinx

theme_name: t.Final[str] = "coeus_sphinx_theme"
theme_version: str = "2024.10.10"

natively_supported_extensions: t.Sequence[str] = (
    "sphinx_carousel.carousel",
    "sphinx_design",
    "sphinx_tags",
    "sphinxcontrib.jquery",
    "sphinxext.opengraph",
)

coeus_theme_default_mapping: dict[str, str] = {
    "html_baseurl": "html_coeus_documentation",
    "html_favicon": "html_coeus_favicon",
    "html_logo": "html_coeus_logo",
    "copyright": "html_coeus_copyright",
    "html_permalinks_icon": "html_coeus_permalinks_icon",
    "html_theme_options": "html_coeus_theme_options",
    "html_title": "html_coeus_title",
    "tags_create_badges": "html_coeus_tags_create_badges",
    "tags_create_tags": "html_coeus_tags_create_tags",
    "tags_intro_text": "html_coeus_tags_prefix",
    "tags_page_title": "html_coeus_tags_page_title",
}

sphinx_tags.tagpage = add_title_hero
sphinx_tags.Tag.create_file = create_file_with_title_hero


def update_html_context(
    app: Sphinx,
    pagename: str,
    templatename: str,
    context: dict[str, t.Any],
    doctree: nodes.Node,
) -> None:
    """Register theming options for Coeus' HTML context.

    .. versionadded:: 2024.08.23

        [1] Support Coeus specific HTML theming options.

    .. versionchanged:: 2024.09.01

        [1] Theming options are now directly merged with the `context`.
    """
    context.update(app.config.html_coeus_theme_options)


def fix(module: types.ModuleType) -> type[nodes.Element]:
    """Update `__name__` attribute of the module's node.

    .. versionadded:: 2024.09.01
    """
    node = module.node
    node.__name__ = "".join(_.capitalize() for _ in module.name.split("-"))
    return node


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

    .. versionadded:: 2024.09.01

        [1] Added support for custom Sphinx `stylize` role.

    .. versionchanged:: 2024.09.01

        [1] The extension's node object's `__name__` is now updated.

    .. deprecated:: 2024.09.01

        [1] The `html_coeus_twitter` option is now deprecated in favor
            of the `html_coeus_socials` option.
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
        "html_coeus_license": ("#", str),
        "html_coeus_logo": ("", str),
        "html_coeus_permalinks_icon": ("", str),
        "html_coeus_repository": ("#", str),
        "html_coeus_tags_create_badges": (True, bool),
        "html_coeus_tags_create_tags": (True, bool),
        "html_coeus_tags_page_title": ("Tagged Pages", str),
        "html_coeus_tags_prefix": ("", str),
        "html_coeus_theme_options": (config.html_theme_options, dict),
        "html_coeus_title": (config.html_title or config.project, tuple),
        "html_coeus_socials": ({}, dict),
        "html_coeus_version": (config.release, str),
    }
    for name, (default, types) in coeus_theme_configurations.items():
        app.add_config_value(name, default, "html", types)
    for default, new in coeus_theme_default_mapping.items():
        setattr(config, default, getattr(config, new))
    app.add_html_theme(name=theme_name, theme_path=here)
    app.add_css_file("coeus.css", priority=900)
    app.add_js_file("main.js", loading_method="defer")
    app.add_js_file("coeus.js", loading_method="defer")
    for directive in directives:
        app.add_node(fix(directive), html=(directive.visit, directive.depart))
        app.add_directive(directive.name, directive.directive)
        if hasattr(directive, "html_page_context"):
            app.connect("html-page-context", directive.html_page_context)
    for role in dir(roles):
        if role.endswith("_role"):
            _role = role[:-5].replace("_", "-")
            rst.roles.register_local_role(_role, getattr(roles, role))
    app.connect("env-before-read-docs", read_env_docs)
    app.connect("build-finished", post_process_build)
    app.connect("html-page-context", update_html_context)
    return {"parallel_read_safe": True, "parallel_write_safe": True}
