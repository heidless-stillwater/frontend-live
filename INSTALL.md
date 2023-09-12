
# Deploy a React Web Application to Google Cloud
https://www.youtube.com/watch?v=IjUnQ9kMnVo

### current LIVE

### github
https://github.com/heidless-stillwater/frontend-live

### vsCode


### Access app
### https://pfolio-frontend-service-7dd5pbcoiq-nw.a.run.app/

### run locally
```
# set to development

# test by specifying port
npm install
npm run build
npm start 5000
```
---
## Cloud Run

### .env.production
```
BACKEND_HOST=pfolio-release-0.ew.r.appspot.com
BACKEND_URL=https://pfolio-release-0.ew.r.appspot.com/
```

### gCloud config
```
gcloud config set account ambientuplift@gmail.com
gcloud init
- create new config
	- frontend-live
- log in with new account
	- ambientuplift@gmail.com
		- <PWD>
```

### set/create projects
```
<new project>->pfolio-frontend-0

# cli: specify project
gcloud config set project pfolio-release-0
```

### storage bucket
```
# project
pfolio-frontend-bcket-0

# storage bucket
'Cloud Storage'
-
NAME: pfolio-frontend-bucket-0
REGION: europe-west1
STORAGE CLASS: default->standard
ACCESS:
	- check Enforce public access prevention on this bucket
	- 'Uniform'
-
PROTECTION: none

# make image publicly accessible
https://www.youtube.com/watch?v=PoVbGE0HrRA&t=1s
- 
ACCESS CONTROL -> Fine Grained
PUBLIC ACCESS -> Subject to object ACLs
-
CLOUD STORAGE->pfolio-bucket-0->images
# within bucket
- <image>->'3 dots'->Edit Access->
Entity 1: Public
Name 1: allUsers
access 1: Reader
-



```

### create service
```
PROJECT: pfolio-live

'Cloud Run'->Create Service
- Select Continuously deploy new revisions from a source repository
	'Cloud Build'
		'Source Repository'
			GIT: heidless-stillwater/frontend-live
		'Build Configuration'
			BRANCH: ^master$
			DOCKERFILE: /Dockerfile

SERVICE NAME: pf-frontend-svc-0
REGION: europe-west1
Allow direct access to your service from the Internet
AUTHENTICATION: Allow unauthenticated invocations
```
The creates the service & configures Git Triggers to automatically re-deploy on Commit of Project

### service account
```
'IAM & ADMIN'->Service Accounts->Create Service Account

NAME: frontend-svcaccount-0
DESC: service account for github actions
ROLES:
Editor
Cloud Run Admin
Storage Admin
Service Account User
'CONTINUE'->DONE'
```

### service account key
```
'Service Accounts'->pf-backend-svcaccount-0->
'3 dots'->Manage Keys->Add Key->JSON

# json key file - automatically downloads to your local machine
i.e. Downloads/pfolio-frontend-0-d2290096b8e5.json

# copy to project root dir
i.e. pfolio-backend-deploy-0-380215-8f9cc9423783.json
```

### github secrets
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

### local config
Whenever working from local install using Cloud Run assets.
Configure ENV
```
CLOUD_RUN_PROJECT_NAME=pfolio-backend-deploy-2
CLOUD_RUN_SERVICE_ACCOUNT=`base64 -i pfolio-backend-deploy-2-d2290096b8e5.json`
```


### now trigger a build to confirm success/failure
```
touch TEST
commit & sync
```

