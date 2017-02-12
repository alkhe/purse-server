const limit = n => ` limit ${ n }`

const get_products = (fields = '*') =>
	`select ${ fields } from products`

const get_users = (fields = '*') =>
	`select ${ fields } from users`

const get_user_by_username = (username, fields = '*') =>
	`select ${ fields } from users where username='${ username }'`

const get_user_by_user_id = (id, fields = '*') =>
	`select ${ fields } from purchases where user_id='${ id }'`

const get_purchases = (fields = '*') =>
	`select ${ fields } from purchases`

const get_purchased_products_by_user_id = (id, fields = '*') =>
	`select ${ fields } from purchases join products on products.id=purchases.product_id where purchases.user_id='${ id }'`

const get_purchased_products_by_username = (username, fields = '*') =>
	`select ${ fields } from purchases join products on products.id=purchases.product_id where purchases.user_id=(${ get_user_by_username(username, ['id']) })`

module.exports = {
	limit,
	get_products,
	get_users,
	get_user_by_username,
	get_user_by_user_id,
	get_purchases,
	get_purchased_products_by_user_id,
	get_purchased_products_by_username
}
