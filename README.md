## PostgreSql

### 01. install on Ubuntu 18.x.x
```
$ sudo apt-get install postgresql
$ psql --version

$ nmap 127.0.0.1 // view ports
```
### 02. begin to learn psql
```
$ sudo su postgres
$ psql --version
$ psql -l
$ createdb mydb
$ psql -l
$ psql mydb // open mydb
> help
> \h
> \?
> \l
> \q

$ psql mydb
> select now(); // don't forget ;
> select version();
> \q

$ dropdb mydb
$ psql -l
```
