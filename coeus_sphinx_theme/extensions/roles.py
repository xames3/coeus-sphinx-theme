"""\
Coeus Sphinx Theme Stylize Role
===============================

Author: Akshay Mestry <xa@mes3.dev>
Created on: Thursday, August 29 2024
Last updated on: Thursday, August 29 2024

This module provides a custom roles for the Coeus Sphinx Theme, that
allows authors and contributors to add features to their document pages.

.. note::

    This module is designed specifically for the Coeus Sphinx Theme,
    hence the role may not be available or may be implemented
    differently for different themes. Please consult the documentation
    for more information.

.. versionadded:: 2024.09.01
"""

from __future__ import annotations

import typing as t

import docutils.nodes as nodes


def stylize_role(
    role: str,
    rawtext: str,
    text: str,
    lineno: int,
    inliner: t.Any,
    options: dict | None = None,
    content: list | None = None,
) -> tuple[list[nodes.Node], list[nodes.system_message]]:
    """Apply inline styling to text.

    This function allows for applying a CSS style to a piece of text
    within reStructuredText using a role syntax. The expected input
    format is `text <style>`. If the input format is invalid, an error
    is reported.

    :param role: The role name used in the source text.
    :param rawtext: The entire markup text representing the role.
    :param text: The text by the user.
    :param lineno: The line number where the role was encountered in the
        source text.
    :param inliner: The inliner instance that called the role function.
    :param options: Additional options passed to the role function,
        defaults to `None`.
    :param content: Content passed to the role function, defaults
        to `None`.
    :return: A tuple of list with a single `nodes.raw` object
        representing the styled text and a list of system messages
        generated during processing (typically empty if no errors).
    :raises: None, but will report an error message if the input format
        is invalid.
    """
    try:
        element, style = map(str.strip, text.split("<", 1))
        style = style.rstrip(">")
    except ValueError:
        msg = inliner.reporter.error(
            f"Invalid style: {text!r}",
            nodes.literal_block(rawtext, rawtext),
            line=lineno,
        )
        return [inliner.problematic(rawtext, rawtext, msg)], [msg]
    raw = f'<span style="{style}">{element}</span>'
    return [nodes.raw(text=raw, format="html")], []
