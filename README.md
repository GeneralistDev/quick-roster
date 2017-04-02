# A Cloud Guru - Gamification Engine

## Contribution

### Setup
#### Dependencies
* nvm (node version manager)
* avn & avn-nvm
* python3 and pip

#### Steps
1. `pip install aws-cli && pip install formica`
2. `npm install -g yarn`
3. `aws configure --profile gamification` and enter the ACCESS_KEY_ID and SECRET_ACCESS_KEY that were generated for your IAM user
4. `./install.sh`
5. `cd ../engine && sls deploy -s <yourstage> --verbose`
6. `cd infrastructure && ./setup.sh <stage> <iamuser> && ./deploy.sh <stage> <iamuser>` You will need to copy the key arn output from the cloudformation screen in AWS
7. Make a new copy of the config file `dan.yml` in `engine/config/` and name it `<yourstage>.yml` and put it in the same folder.
8. Replace the KMSKeyId with your ARN from step 6.
9. Encrypt your environment variables.
