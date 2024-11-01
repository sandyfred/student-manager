FROM node:20-slim

ENV NODE_ENV=production

# you'll likely want the latest npm, regardless of node version, for speed and fixes
# but pin this version for the best stability
RUN npm i npm@latest -g

# the official node image provides an unprivileged user as a security best practice
# but we have to manually enable it. We put it here so npm installs dependencies as the same
# user who runs the app.
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
USER node

# install dependencies first, in a different location for easier app bind mounting for local development
# WORKDIR now sets correct permissions if you set USER first
WORKDIR /opt/node_app

COPY --chown=node:node package.json package-lock.json* ./
RUN npm ci && npm cache clean --force
ENV PATH=/opt/node_app/node_modules/.bin:$PATH

# copy in our source code last, as it changes the most
# copy in as node user, so permissions match what we need
WORKDIR /opt/node_app/app
COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node", "./src/server.js" ]
