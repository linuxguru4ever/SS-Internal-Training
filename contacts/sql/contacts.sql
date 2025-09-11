drop table if exists contacts;

create table contacts(id serial primary key,firstname varchar(30) not null,lastname varchar(30) not null, email varchar(30) not null);

insert into contacts(firstname, lastname, email) values
  ('fname1','sname1','bilbo@testdomain.com'),
  ('fname2','sname2','frodo@testdomain.com'),
  ('fname3','sname3','sam@testdomain.com'),
  ('fname4','sname4','pippin@testdomain.com'),
  ('fname5','sname5','merry@testdomain.com');



