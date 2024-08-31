"""\
Coeus Sphinx Theme Extension Manager
====================================

Author: Akshay Mestry <xa@mes3.dev>
Created on: Thursday, August 29 2024
Last updated on: Friday, August 30 2024

This module manages Coeus Sphinx Theme's directive and roles.

.. versionadded:: 2024.09.01

.. deprecated:: 2024.09.01

    [1] The `glossary_table` directive is now deprecated in favor of
        Sphinx's `glossary` directive to better support with `term`
        cross-reference role.
"""

import types
import typing as t

from . import announcement
from . import contributors
from . import headshots
from . import title_hero
from . import youtube_video

directives: t.Sequence[types.ModuleType] = (
    announcement,
    contributors,
    headshots,
    title_hero,
    youtube_video,
)
