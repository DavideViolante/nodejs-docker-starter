# Node.js Docker starter
The most basic boilerplate using Node.js, Express and Docker.

## Run
1. Clone this repo
2. Build image: `docker build -t nodejs-docker-starter .`
3. Run image: `docker run -p 3000:3000 -d --name nds nodejs-docker-starter:latest`
4. Go to http://localhost:3000

## Other commands
- Show running containers: `docker ps`
- Show app logs: `docker logs nds`
- Stop app: `docker rm -f nds`

## Author
- [Davide Violante](https://github.com/DavideViolante)
