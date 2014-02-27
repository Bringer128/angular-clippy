#!/bin/sh

BUILD_DIR=build

rm -fr ${BUILD_DIR}
mkdir -p ${BUILD_DIR}/clippy
cp src/* ${BUILD_DIR}/clippy/
cp lib/clippy.min.js ${BUILD_DIR}/clippy
cp lib/clippy.css ${BUILD_DIR}/clippy
cp -r agents ${BUILD_DIR}/clippy/Agents
