#!/bin/bash
echo "This script will help you to decrypt an environment variable for your environment"
echo "Stage: "
read SERVERLESS_STAGE

echo "Value to decrypt: "
read VALUE

./node_modules/.bin/sls -s $SERVERLESS_STAGE crypt decrypt -v $VALUE
