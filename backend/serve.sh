#!/bin/bash

trap 'jobs -p | xargs kill' EXIT
source ../.env-deploy-dev
SERVERLESS_STAGE=$1
export AWS_SECRET_ACCESS_KEY=$(aws configure get aws_secret_access_key --profile $AWS_PROFILE)
export AWS_ACCESS_KEY_ID=$(aws configure get aws_access_key_id --profile $AWS_PROFILE)

./node_modules/.bin/sls simulate lambda --stage $SERVERLESS_STAGE -p 4000 &
sleep 5
./node_modules/.bin/sls simulate apigateway --stage $SERVERLESS_STAGE -p 4001 --lambda-port 4000
