"""\
Coeus Sphinx Theme Extension Manager
====================================

Author: Akshay Mestry <xa@mes3.dev>
Created on: Thursday, August 29 2024
Last updated on: Saturday, September 14 2024

This module manages Coeus Sphinx Theme's directive and roles.

.. versionadded:: 2024.09.01

.. deprecated:: 2024.09.01

    [1] The `glossary_table` directive is now deprecated in favor of
        Sphinx's `glossary` directive to better support with `term`
        cross-reference role.

.. versionadded:: 2024.09.09

    [1] Added `step-flow` directive as part of the theme.

.. versionadded:: 2024.09.16

    [1] Added `video` directive as part of the theme.

.. versionadded:: 2024.10.10

    [1] Added `notebook` directive as part of the theme.
"""

import types
import typing as t

from . import announcement
from . import contributors
from . import general_video
from . import headshots
from . import notebook
from . import step_flow
from . import title_hero
from . import youtube_video

directives: t.Sequence[types.ModuleType] = (
    announcement,
    contributors,
    general_video,
    headshots,
    notebook,
    step_flow,
    title_hero,
    youtube_video,
)
