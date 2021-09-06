# City Pop - ExpressJS

> Simple API server written in Typescript using Express as the framework of choice

The main purpose of this project is just to gain a little experience of Express
and MongoDB. The only endpoint available is `/albums` which returns a list of
citypop related albums from the MongoDB Atlas instance.

## Setup
Create a `.env` file at the root of this folder.
The `.env` file should look like the following:
```sh
PORT=5500 # Optional (default port used will be 5500)
MONGODB_ATLAS_URI=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
DOMAIN_NAME=http://domain.name.here/ # Optional (default is localhost)
```
Run the following commands to setup the development server:
```sh
npm i # or yarn
npm run start # or yarn start
```
