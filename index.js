const express = require('express')
const connect = require('./db')
const db_config = require('./db/config')
const sql = require('./db/queries')
const app = express()
const api = express.Router()

const RX_DIGITS = /^\d+$/

async function main() {
	const db = await connect(db_config)

	api.get('/products', async (req, res) => {
		const { limit } = req.query

		let q = sql.get_products()

		if (limit !== undefined) {
			if (RX_DIGITS.test(limit)) {
				const products = await db.any(q + sql.limit(limit))
				res.json(products)
			} else {
				res.status(400).send(`limit must be a number`)
			}
		} else {
			const products = await db.any(q)
			res.json(products)
		}
	}).get('/purchased-products', async (req, res) => {
		const { id, u } = req.query

		if (id && !u) {
			const products = await db.any(sql.get_purchased_products_by_user_id(id, 'products.*'))
			res.json(products)
		} else if (u && !id) {
			const products = await db.any(sql.get_purchased_products_by_username(u, 'products.*'))
			res.json(products)
		} else {
			res.status(400).send(`must provide one of uuid (id) or username (u) fields`)
		}
	}).get('/users', async (req, res) => {
		const { id, u } = req.query

		if (id) {
			if (u) {
				res.status(400).send(`must not provide more than one of uuid (id) or username (u) fields`)
			} else {
				const user = await db.oneOrNone(sql.get_user_by_user_id(id))
				res.json(user)
			}
		} else {
			if (u) {
				const user = await db.oneOrNone(sql.get_user_by_username(u))
				res.json(user)
			} else {
				const users = await db.any(sql.get_users())
				res.json(users)
			}
		}
	}).get('/purchases', async (req, res) => {
		const purchases = await db.any(sql.get_purchases())
		res.json(purchases)
	})

	app.use('/api', api)
	app.get('/', (req, res) => {
		res.send('Hello!')
	})

	app.listen(3000, () => {
		console.log('listening on port 3000')
	})
}

main()
