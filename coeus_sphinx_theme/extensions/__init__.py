"""\
Coeus Sphinx Theme Extension Manager
====================================

Author: Akshay Mestry <xa@mes3.dev>
Created on: Thursday, August 29 2024
Last updated on: Monday, September 09 2024

This module manages Coeus Sphinx Theme's directive and roles.

.. versionadded:: 2024.09.01

.. deprecated:: 2024.09.01

    [1] The `glossary_table` directive is now deprecated in favor of
        Sphinx's `glossary` directive to better support with `term`
        cross-reference role.

.. versionadded:: 2024.09.09

    [1] Added `step-flow` directive as part of the theme.
"""

import types
import typing as t

from . import announcement
from . import contributors
from . import headshots
from . import step_flow
from . import title_hero
from . import youtube_video

directives: t.Sequence[types.ModuleType] = (
    announcement,
    contributors,
    headshots,
    step_flow,
    title_hero,
    youtube_video,
)
