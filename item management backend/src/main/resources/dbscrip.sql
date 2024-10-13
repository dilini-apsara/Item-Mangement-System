use item_database;

create table item(
    code varchar(5) primary key ,
    name varchar(50) not null ,
    description varchar(300) not null ,
    price bigint not null ,
    amount int not null
);

