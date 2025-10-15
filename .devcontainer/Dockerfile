FROM ubuntu:jammy

RUN : \
    && apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
        build-essential \
        ca-certificates \
        git \
        make \
        python3 \
        python3-venv \
        python3-pip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ENV LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    VIRTUAL_ENV=/venv \
    PATH=/venv/bin:$PATH \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1 \
    PIP_NO_CACHE_DIR=1

WORKDIR /workspace

RUN : \
    && python3 -m venv "$VIRTUAL_ENV" \
    && git clone --depth 1 https://github.com/xames3/coeus-sphinx-theme.git /workspace/coeus-sphinx-theme \
    && git clone --depth 1 https://github.com/ciesin-geospatial/TOPSTSCHOOL-SPHINX.git /workspace/TOPSTSCHOOL-SPHINX \
    && "$VIRTUAL_ENV/bin/pip" install --upgrade pip setuptools wheel \
    && "$VIRTUAL_ENV/bin/pip" install --no-cache-dir -r /workspace/TOPSTSCHOOL-SPHINX/requirements.txt \
    && "$VIRTUAL_ENV/bin/pip" install --no-cache-dir -r /workspace/TOPSTSCHOOL-SPHINX/requirements-dev.txt \
    && git config --system --add safe.directory /workspace/coeus-sphinx-theme \
    && git config --system --add safe.directory /workspace/TOPSTSCHOOL-SPHINX \
    && cd /workspace/TOPSTSCHOOL-SPHINX/docs \
    && make html

WORKDIR /workspace/TOPSTSCHOOL-SPHINX/docs
