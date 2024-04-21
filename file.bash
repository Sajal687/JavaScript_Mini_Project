#!/bin/bash

set -e
set -x

cd "$GITHUB_WORKSPACE"  # Set working directory to repository root
mkdir mydir
find . -name mydir 
echo "$(pwd)"
echo 'directory is successfully created'
