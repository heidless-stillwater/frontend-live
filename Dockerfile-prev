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