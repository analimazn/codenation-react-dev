const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];
const productsList = require('./data/products.json')
const { makeCar } = require('./product/product')

function getShoppingCart(ids, productsList) {
	const car = makeCar(ids, productsList)
	return car
}

module.exports = { getShoppingCart }
