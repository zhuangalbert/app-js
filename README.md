# app-js

# Installation

on this project, you need to install tool on your local :
- Git
- Docker
- Docker Compose
- Mysql Server (if you need to use local database)

### Architecture Structure
```
- app-js
 |- api
   |- models
     |- controller
     |- route
 |- auth
 |- config
 |- migration
 |- node_modules
 |- app.js
```

# How to Setup Local

1. Clone repository using command : 
```bash
git@github.com:zhuangalbert/app-js.git
```

2. enter the directory
```bash
cd app-js
```

3. Create file .env, by copying from .env.example, don't forget to modify .env value 
```bash
cp .env.example .env
```
my .env :
```bash
# APP
API_SECRET=app-beta
APP_PORT=3000

# DATABASE
DB_HOST=docker.for.mac.localhost
DB_DATABASE=ralaliweb_db
DB_USERNAME=root
DB_PASSWORD=abganteng
DB_PORT=3306
```

you can use the mysql database on the local machine with the following configuration : 
```bash
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=database_name
DB_USERNAME=database_username
DB_PASSWORD=database_password
```

4. run docker-compose with command : 
```bash
docker-compose up --build
```
this command take a long time.
If you get a screen like the one below, the setup is successful and you are ready to develop your project:

```bash
app_db_mysql | 2020-04-06T21:29:06.640384Z 0 [Note] Server hostname (bind-address): '*'; port: 3306
app_db_mysql | 2020-04-06T21:29:06.642948Z 0 [Note] IPv6 is available.
app_db_mysql | 2020-04-06T21:29:06.638201Z 0 [Note] InnoDB: Buffer pool(s) load completed at 200406 21:29:06
app_db_mysql | 2020-04-06T21:29:06.645619Z 0 [Note]   - '::' resolves to '::';
app_db_mysql | 2020-04-06T21:29:06.646063Z 0 [Note] Server socket created on IP: '::'.
app_db_mysql | 2020-04-06T21:29:06.649666Z 0 [Warning] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.
app_db_mysql | 2020-04-06T21:29:06.852337Z 0 [Note] Event Scheduler: Loaded 0 events
app_db_mysql | 2020-04-06T21:29:06.852815Z 0 [Note] mysqld: ready for connections.
app_db_mysql | Version: '5.7.28'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server (GPL)
app_nodejs   | Running: 3000
```

5. Migrate Database, we need go to container : 
to execute docker container, first we need to know list of active container. 
you can see the active container with this command : 
```bash
docker ps
```
[](docs/images/docker-ps.png)

then execute the docker container with this command : 
```bash
docker exec -it {container_id/image_name} /bin/bash 
```
[](docs/images/docker-execute.png)
Now, we are in the docker container.
We need to migrate Database with Sequelize (depedencies from node_modules) docs : https://sequelize.org/.
With this command : 
```bash
node_modules/.bin/sequelize db:migrate
```
[](docs/images/db-migrate.png)


## Documentation - CURL

- Create User


Note : 
- postman collection : https://www.getpostman.com/collections/94b8163f12ac89ec8a3c
