#!/bin/bash

cd engine

echo 'Serverless stage:'
read SERVERLESS_STAGE

echo 'IAMUser'
read IAMUSER

bash deploy.sh $SERVERLESS_STAGE

cd ../infrastructure

bash setup.sh $SERVERLESS_STAGE $IAMUSER

bash deploy.sh $SERVERLESS_STAGE
