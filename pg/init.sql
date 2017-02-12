drop table if exists users;
create table users (
	id uuid primary key,
	username varchar,
	email varchar,
	password varchar
);
create index users_by_username on users (username);

drop table if exists products;
create table products (
	id uuid primary key,
	owner_id uuid,
	title varchar,
	type varchar,
	price integer
);
create index products_by_owner_id on products (owner_id);

drop table if exists purchases;
create table purchases (
	user_id uuid,
	product_id uuid
);
create index purchases_by_user_id on purchases (user_id);
create index purchases_by_product_id on purchases (product_id);
