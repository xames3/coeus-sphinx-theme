"""\
Coeus Sphinx Theme Contributors Directive
=========================================

Author: Akshay Mestry <xa@mes3.dev>
Created on: Wednesday, August 14 2024
Last updated on: Wednesday, October 30 2024

This module provides a custom directive for the Coeus Sphinx Theme,
that allows authors and contributors to add information about themselves
as contributor in particular, their socials (if any) and the published
date.

Coeus Sphinx Theme's contributors section is created using the custom
`contributors` directive, which is included as part of this theme. The
directive is implemented below, and is available to use by authors and
contributors when building the documentation.

.. note::

    This module is designed specifically for the Coeus Sphinx Theme,
    hence the directive may not be available or may be implemented
    differently for different themes. Please consult the documentation
    for more information.

.. versionchanged:: 2024.08.23

.. versionadded:: 2024.09.01

    [1] Added support for location, reading time and document language
        options in the `contributors` directive.
    [2] Added support for automatically listing the author provided
        socials via the `html_coeus_socials` option.

.. versionchanged:: 2024.09.01

    [1] The `contributor_hero` extension is now `contributors`, which
        made a lot of sense when we noticed the use of the extension in
        retrospective usage.
    [2] The module has been significantly refactored to minimize code
        duplication and the docstrings now justify the code that they
        represent. This is a big change over the previous extension-
        management capabilties of Coeus Sphinx Theme.
    [3] The `ClassVar` update now conforms to the `mypy` restrictions.

.. versionchanged:: 2024.09.09

    [1] The syntax of the `people` option is now changed and is now
        handled at the `node` level rather than the node visitor method.
        Rest of the functionality remains intact with no affect on the
        performance.

.. deprecated:: 2024.09.09

    [1] The `people` option is now deprecated in favor of more simple
        and intuitive `list-table` like directive layout.

.. versionadded:: 2024.09.16

    [1] Added support for `supported_language` option from `conf.py`.

.. versionchanged:: 2024.09.16

    [1] The `language` option is now optional and is not enforced.

.. versionadded:: 2024.11.01

    [1] Added support for on hover modal popup for contributors.
    [2] Added support for proper resolving images over `http/s`.
    [3] Added support for optional extra social media connections like
        ORCID, LinkedIn, Twitter and YouTube.
"""

from __future__ import annotations

import os
import re
import shutil
import typing as t

import docutils.nodes as nodes
import docutils.parsers.rst as rst
import jinja2

if t.TYPE_CHECKING:
    from sphinx.writers.html import HTMLTranslator

name: t.Final[str] = "contributors"

source = os.path.join(
    os.path.abspath(os.path.join(os.path.dirname(__file__), "..")),
    "contributors.html.jinja",
)

options_re: t.Pattern = re.compile(r"(-\s:.*:\s)(.*)")
relpath_re: t.Pattern = re.compile(r"^(\.|\/)*")

socials: dict[str, str] = {
    "twitter": "fa-brands fa-x-twitter",
    "discord": "fa-brands fa-discord",
    "reddit": "fa-brands fa-reddit",
    "youtube": "fa-brands fa-youtube",
    "slack": "fa-brands fa-slack",
}

with open(source) as f:
    template = jinja2.Template(f.read())


class node(nodes.Element):
    """Class for representing a node in a document tree."""

    pass


class directive(rst.Directive):
    """Class for representing a custom directive in reStructuredText.

    The class allows using a custom directive and maps the source
    reStructuredText to `node` element doctree node.

    By using a custom directive, Coeus Sphinx Theme allows contributors
    or authors to render content for their specific context and needs.
    """

    def run(self) -> list[nodes.Node]:
        """Return a list of node(s) from the reStructuredText source.

        This method processes the directive's arguments, options and
        content, and returns a list of `docutils` nodes that are
        inserted into the document tree where the directive was first
        encountered.

        :return: List of `docutils` node(s).

        .. versionadded:: 2024.11.01

            [1] Added support for on hover modal popup for contributors.
            [2] Added support for proper resolving images over `http/s`.
            [3] Added support for optional extra social media
                connections like ORCID, LinkedIn, Twitter and YouTube.
        """
        self.assert_has_content()
        e = self.state.document.settings.env
        build = os.path.dirname(e.doctreedir)
        if not os.path.exists((images := os.path.join(build, "_images"))):
            os.makedirs(images, exist_ok=True)
        person = 0
        people = [{}]
        for content in self.content:
            if not content:
                people.append({})
                person += 1
            else:
                if (matches := options_re.match(content)) is not None:
                    pattern, value = matches.groups()
                    match pattern.strip(" -:"):
                        case "name":
                            people[person]["name"] = value
                        case "email":
                            people[person]["email"] = value
                        case "headshot":
                            if not value.startswith(("http://", "https://")):
                                r = relpath_re.match(value).group()
                                s = os.path.join(e.srcdir, value.lstrip("./"))
                                _ = os.path.basename(s)
                                d = os.path.join("_images", _)
                                people[person]["headshot"] = os.path.join(r, d)
                                shutil.copyfile(s, os.path.join(build, d))
                            else:
                                people[person]["headshot"] = value
                        case "github":
                            people[person]["github"] = value
                        case "orcid":
                            people[person]["orcid"] = value
                        case "linkedin":
                            people[person]["linkedin"] = value
                        case "twitter":
                            people[person]["twitter"] = value
                        case "youtube":
                            people[person]["youtube"] = value
                        case "status":
                            people[person]["status"] = value
        element = node("\n".join(self.content), **self.options)
        element.attributes["people"] = people
        return [element]


def visit(self: HTMLTranslator, node: node) -> None:
    """Node visitor function which maps the node element.

    .. versionadded:: 2024.09.01

        [1] Added support for automatically listing the author provided
            socials via the `html_coeus_socials` option.

    .. versionadded:: 2024.09.16

        [1] Added support for `supported_language` option.
    """
    title = (
        dom.asdom().getElementsByTagName("title")
        if (dom := node.document)
        else ["Article"]
    )
    article = title[0].firstChild.nodeValue
    node.attributes["people"] = node.attributes["people"]
    node.attributes["subject"] = f"[{self.config.html_coeus_title}] {article}"
    node.attributes["email"] = self.config.html_coeus_email
    node.attributes["github"] = self.config.html_coeus_github
    for platform, icon in socials.items():
        if platform in self.config.html_coeus_socials:
            self.config.html_coeus_socials[platform].append(icon)
    node.attributes["socials"] = self.config.html_coeus_socials
    node.attributes["languages"] = self.config.html_coeus_theme_options[
        "supported_languages"
    ]
    self.body.append(template.render(**node.attributes))


def depart(self: HTMLTranslator, node: node) -> None:
    """Node departure function which maps the node element."""
    pass


directive.has_content = True
directive.option_spec = {
    "prefix": rst.directives.unchanged,
    "limit": rst.directives.positive_int,
    "timestamp": rst.directives.unchanged,
    "location": rst.directives.unchanged_required,
    "language": rst.directives.unchanged,
}
