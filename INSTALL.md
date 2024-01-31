
# Deploy a React Web Application to Google Cloud
https://www.youtube.com/watch?v=IjUnQ9kMnVo

## Access app
### https://pf-frontend-svc-0-tr6lwdigpa-ew.a.run.app

## setup

### package.json

```
# ensure 'start' references $PORT
# allows cloud run to manage random PORT
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -- --port 3000"
  },
  
# test by specifying port
npm run build
npm start 5000
```


## docker
### Dockerfile
```
vi Dockerfile
# base image
FROM node:16.15.1-alpine

# Create and change to the app directory.
WORKDIR /usr/app

COPY . .

# Install production dependencies.

# use 'clean install' (ci)
RUN npm ci --only=production

RUN npm run build

CMD ["npm", "start"]
```

### build | run
```
docker build . -t pfolio-frontend
docker run -p 3000:3000 -e=PORT=3000 pfolio-frontend
```

## storage bucket
```
# project
heidless-pfolio-deploy

# storage bucket
'Cloud Storage'
-
frontend-bucket-0
-
```


## Cloud Run

## push to repository
```
gcloud builds submit --tag gcr.io/heidless-pfolio-deploy/pfolio-frontend .

## create Serice
-> deploy uploaded Container Registry
-> i.e  NOT continuous deployment

https://console.cloud.google.com/run?referrer=search&cloudshell=false&project=heidless-pfolio-deploy
-
'create service'

-
```

# link to app
https://pfolio-frontend-v2xr7nz45q-nw.a.run.app/


### github secrets
FIGURE out continuous deployment
```
# encode service account key
base64 -i pfolio-backend-deploy-2-d2290096b8e5.json > pfolio-key.base64

# configure github
github.com
'heidless-stillwater'->frontend-west1->Settings->Secrets & Variables->Actions
'New Repository Secret'
NAME: FRONTEND_WEST1_SECRET
< paste contents of 'pfolio-frontend-key.base64'>
'Add Secret'
-
```

### configure
```
https://console.cloud.google.com/run/create?enableapi=true&authuser=0&hl=en_GB&project=pfolio-backend-deploy-0-380215

'Cloud Run'->Create Service
-
pfolio-frontend-service
'Setup Cloud Build'
< pick repository >
'save'
-

# register container
'Container Registry'-> enable if not already done so

# service account
'IAM & ADMIN'->Service Accounts
-
NAME: pfolio-frontend-svcaccount
DESC: service account for github actions
ROLES:
Editor
Cloud Run Admin
Storage Admin
Service Account User
'DONE'

# newly created instance
'Service Accounts'->pfolio-frontend-svcaccount->
'3 dots'->Manage Keys->Add Key->JSON

# keyfile auto downloads
# copy to project root dir
i.e. pfolio-backend-deploy-0-380215-8f9cc9423783.json

# enable Registry API - IF NEEDED
'Container Registery'-'enable'

# ename Cloud Run API - if NECESSARY
'Cloud Run API'->'enable'

```

## configure github workflows
```
# in project root dir
vi .github/workflows/cloud-run.yml
-
europ-west2
-

# refresh gitub
git add .
git commit -m "added .github structure"

# github secrets
# encode service account key
i.e.base64 -i pfolio-backend-deploy-0-380215-8f9cc9423783.json

<github repository>->Settings->Secrets & Variables->Actions
'New Repository Secret'
-
CLOUD_RUN_PROJECT_NAME=pfolio-frontend-deploy-0
CLOUD_RUN_SERVICE_ACCOUNT=`base64 -i pfolio-backend-deploy-0-380215-8f9cc9423783.json`
-

# now trigger a build to confirm success/failure
<github repository>->Actions-><workflow of interest>
```

## refresh install of SDK
https://cloud.google.com/sdk/docs/install#deb
```
sudo apt-get install apt-transport-https ca-certificates gnupg

echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list

curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -

sudo apt-get update && sudo apt-get install google-cloud-cli

```

## Cloud Run: enable permissions
```
'Cloud Run'-><app service>->Triggers->Allow Unauthenticated invocations

gcloud run services add-iam-policy-binding nextjs-test \
    --member="allUsers" \
    --role="roles/run.invoker"
```

## continuous deployment
```
'Cloud Run'->Service Details->Setup Continuous Deployment
-
'Enable Cloud Build API'
<set repository>
-
```

## access frontend app
```
PROJECT: pfolio-frontend-deploy-0->Cloud Run->pfolio-frontend-service
```
https://pfolio-frontend-service-7dd5pbcoiq-nw.a.run.app


## backups
### frontend
```
STORAGE BUCKET: pfolio-frontend-deploy-0->'Cloud Storage'
-
frontend-bucket-0
-
```
