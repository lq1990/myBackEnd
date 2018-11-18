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
$ psql mydb   // open mydb
> help
> \h
> \?
> \l
> \q

$ psql mydb
> select now();   // don't forget ;
> select version();
> \q

$ dropdb mydb
$ psql -l
```
### 03. table

- create table
- drop table
- psql
```
$ sudo su postgres
$ createdb mydb
$ psql -l
$ psql mydb
> create table posts (title varchar(255), content text);
> \dt   // view the table
> \d   // view posts
> alter table posts rename to myposts;
> \dt
> drop table myposts;    // don't use it normally
> \dt
> \q

$ nano db.sql
...
create table posts (title varchar(255), content text);
...

$ psql mydb
> \i db.sql   // import db.sql, this way to create is better.
> \dt

```

