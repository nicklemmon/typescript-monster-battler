#!/bin/bash

for file in ./dist/*.js
do
  mv "$file" "${file%.js}.mjs"
done
