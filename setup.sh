#!/bin/bash

cd engine

echo 'Serverless stage: (eg. dan)'
read SERVERLESS_STAGE

echo 'IAMUser: (eg. daniel)'
read IAMUSER

bash deploy.sh $SERVERLESS_STAGE

cd ../infrastructure

bash setup.sh $SERVERLESS_STAGE $IAMUSER

bash deploy.sh $SERVERLESS_STAGE
