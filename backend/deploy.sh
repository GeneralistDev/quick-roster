#!/bin/bash

export SERVERLESS_STAGE=$1

./node_modules/.bin/sls deploy -s $SERVERLESS_STAGE --verbose
