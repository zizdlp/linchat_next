#!/bin/bash

DOCKER_BUILD_ARGS_FILE=".env"
DOCKER_BUILD_CMD="docker build"

while IFS= read -r line; do
  DOCKER_BUILD_CMD+=" --build-arg $line"
done < "$DOCKER_BUILD_ARGS_FILE"

DOCKER_BUILD_CMD+=" -t linchat_next_dev:latest . -f linchat_next.Dockerfile"

eval "$DOCKER_BUILD_CMD"