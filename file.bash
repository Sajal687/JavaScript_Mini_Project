#!/bin/bash

set -e
set -x

mkdir mydir
find . -name mydir 
echo "$(pwd)"
echo 'directory is successfully created'
