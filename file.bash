#!/bin/bash

set -e
set -x

cd "$GITHUB_WORKSPACE/JavaScript_Mini_Project"  # Set working directory to the project directory
mkdir mydir
find . -name mydir 
echo "$(pwd)"
echo 'directory is successfully created'

