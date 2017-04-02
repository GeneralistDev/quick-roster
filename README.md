# A Cloud Guru - Gamification Engine

## Contribution

### Setup
#### Dependencies
* nvm (node version manager)
* avn & avn-nvm
* yarn (globally installed)
* python and pip

#### Steps
1. `pip install aws-cli && pip install formica`
2. `./install.sh`
3. `cd infrastructure && ./setup.sh && ./deploy.sh`
4. `cd ../engine && sls deploy -s <yourstage> --verbose`