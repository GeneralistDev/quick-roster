#!/bin/bash

export SERVERLESS_STAGE=$1

if [ -z ${SERVERLESS_STAGE} ]; then
    echo "Please set the serverless stage eg. dan"
    exit 1
fi

formica deploy --stack gamification-infrastructure-$SERVERLESS_STAGE --region us-east-1 --profile gamification
