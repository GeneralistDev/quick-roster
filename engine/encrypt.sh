#!/bin/bash
echo "This script will help you to encrypt an environment variable for your environment"
echo "Stage: "
read SERVERLESS_STAGE

echo "Value to encrypt: "
read VALUE

./node_modules/.bin/sls -s $SERVERLESS_STAGE crypt encrypt -v $VALUE
