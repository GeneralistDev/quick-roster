# Quick Roster

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
* yarn
* python3 and pip

#### Steps
1. `pip install awscli && pip install formica formica-cli`
2. `npm install -g yarn`
3. `aws configure --profile quick-roster` and enter the ACCESS_KEY_ID and SECRET_ACCESS_KEY that were generated for your IAM user
    - ACCESS_KEY_ID & SECRET_ACCESS_KEY are provided
    - Default region: `us-east-1`
    - Default output format: `json` (this is by default)
4. Make a new copy of the config file `dan.yml` in `engine/config/` and name it `<yourstage>.yml` and put it in the same folder. You will need to replace the instances of `dan` with your own environment name
5. `./install.sh`
6. `./setup.sh` and follow the prompts
7. Open your AWS Cloudformation console and find the stack with name `quick-roster-infrastructure-<stage>`. Copy the EnvVarKeyArn from the stack Outputs.
8. Replace the KMSKeyId with your ARN from step 4 (`<yourstage>.yml` file).
9. Encrypt your environment variables using the `engine/encrypt.sh` (you can run this from the root project directory with `(cd engine && ./decrypt.sh)`)
9. Dale these changes using the `engine/deploy.sh` (you can run this from the root project directory with `(cd engine && ./deploy.sh)`)
