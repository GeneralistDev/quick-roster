# A Cloud Guru - Gamification Engine

## Contributing
### Commit Message Conventions
All commit messages must use one of the following as a prefix

* **NEW**: New features (used to tag this is the first time a new feature is added)
* **ENHANCE**:  Improvement to existing feature (Not purely visual, see looks ) 
* **FIX**: Fixed a bug
* **LOOKS**: UI Refinement (Predominantly not for functionality change, see enhance )
* **SPEED**: Performance-related code change
* **QUALITY**: Refactoring or internal quality adjustment
* **DOC**: Documentation
* **CONFIG**: Config setting changed 
* **TEST**: Testing related addition or enhancement

### Setup (Frontend)
Coming soon

### Setup (Backend)
#### Dependencies
* nvm (node version manager)
* avn & avn-nvm
* python3 and pip

#### Steps
1. `pip install aws-cli && pip install formica`
2. `npm install -g yarn`
3. `aws configure --profile gamification` and enter the ACCESS_KEY_ID and SECRET_ACCESS_KEY that were generated for your IAM user
4. `./install.sh`
5. `./setup.sh` and follow the prompts
6. Open your AWS console and find the stack with name `gamification-infrastructure-<stage>`. Copy the KMSKeyArn from the stack Outputs.
7. Make a new copy of the config file `dan.yml` in `engine/config/` and name it `<yourstage>.yml` and put it in the same folder.
8. Replace the KMSKeyId with your ARN from step 6.
9. Encrypt your environment variables using the `engine/encrypt.sh`
