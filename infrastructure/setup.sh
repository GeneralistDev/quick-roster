#!/bin/bash

export SERVERLESS_STAGE=$1
export IAM_USER=$2

if [ -z ${SERVERLESS_STAGE} ]; then
    echo "Please set the serverless stage eg. dan"
    exit 1
fi

if [ -z ${IAM_USER} ]; then
    echo "Please set the IAM User eg. daniel"
    exit 1
fi

formica new --stack gamification-infrastructure-$SERVERLESS_STAGE --region us-east-1 --profile gamification --parameter IAMUserName=$IAM_USER --parameter Stage=$SERVERLESS_STAGE
