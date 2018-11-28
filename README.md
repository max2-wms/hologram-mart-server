# Hologram-Mart Server

## Step 1: Install Node, NPM and Docker

Install Node and NPM on your machine; this typically requires administrative access, 
e.g. become root or use `sudo` (or use a Windows installer).

You must be running at least Node 4.x.x and npm 3.x.x. You can verify 
what, if any, versions you have installed by running `node -v` and 
`npm -v` in a terminal window.

You can download current versions of these tools [here](https://nodejs.org/en/download/current/).

If you use a Linux-like environment, you are encouraged to use your
package manager to install these tools.

If you use OS X, you may wish to consider installing via [HomeBrew](http://brew.sh/).

Then Install Docker for Windows or Docker for Mac. You can download current version of this
tool [here](https://www.docker.com/products/docker-desktop).

## Step 2: Install the nodemon package globally on your system ( optional )

IMPORTANT NOTE: This, and all following steps, should be run as a regular (non-root) user.
Strange problems occur with package installation when you are the root user, or from using
the `sudo` command.

In a command shell, run the following command to acquire both the "angular cli" and the "github pages" packages:

`$ npm install -g nodemon`

find more documentation about this package at:

https://www.npmjs.com/package/nodemon

## Step 3: Check out the source code

IMPORTANT NOTE: This, and all following steps, should be run as a regular (non-root) user.
Strange problems occur with package installation when you are the root user, or from using
the `sudo` command.

In a command shell, make a clone of the git repository:

`$ git clone git@github.com:max2-wms/node-backend.git server`

Then enter the directory created. All further commands will be run inside that directory.

Run `$ cd server`.

## Step 4: Install the NPM dependencies on your machine

Run `$ npm install`.

## Step 5.a: Run the development server on your machine ( optional, Docker is recommended to start app )

Run `$ nodemon`.

(This will compile and run the node-based web API available at http://localhost:63145/. When application files are changed, 
the server will automatically reload to reflect the changes.

Note: This will provide local access only (e.g. as per URL above).

## Step 5.b: Run the development server in Docker container ( recommended, avoids having to install MongoDB on your machine )

Run `$ npm start` to start the server and run `$ npm stop` to stop it.

## Step 6: Build the project

First, make sure you've built the client app and that the resulting files have been placed inside the public folder in this project. the server project and client projects are meant to be siblings, sitting together in a parent folder. Run `$ npm run build` to build the project, the resulting Docker image will be named "max2wms/hologram-mart". if you want to run that image, run `docker run -p 63145:63145 max2wms/hologram-mart`. If you want to build and run the image, run `$ npm run build:start` instead. You can run `$ npm run build:stop` to kill the server. 

## Step 7: Run the app in production mode

Run `$ npm run start:prod` to start the server, run `$ npm run stop:prod` to stop it.

## Step 8: Initiate a Swarm Cluster ( optional, to allow for easy scaling of the app to handle high traffic )

Run `$ npm run swarm:init` to create a swarm, you will have to run `npm run swarm:init --advertise-addr <IP ADDRESS>` if you want to deploy the app on a cloud server, make sure Node and NPM are installed first in that case. Run `$ npm run node:ls` to list the nodes that form the swamr cluster. Run `$ npm run deploy:stack` to deploy the app on a swarm cluster. Run `$ npm run stack:ls` to list your stacks. Run `$ npm run undeploy:stack` to stop the server. Run `$ npm run swarm:leave` to leave the swarm.
