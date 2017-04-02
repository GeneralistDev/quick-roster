#!/bin/bash

export SERVERLESS_STAGE=$1

if [ -z ${SERVERLESS_STAGE} ]; then
    echo "Please set the serverless stage eg. dan"
    exit 1
fi

formica new --stack kms-key-$SERVERLESS_STAGE --region us-east-1 --profile gamification --parameter IAMUserName=$IAM_USER --parameter Stage=$SERVERLESS_STAGE