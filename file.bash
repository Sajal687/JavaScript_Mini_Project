#!/bin/bash

set -e
set -x

mkdir "$GITHUB_WORKSPACE/mydir"
find "$GITHUB_WORKSPACE" -name mydir 
echo "$(pwd)"
echo 'directory is successfully created'

