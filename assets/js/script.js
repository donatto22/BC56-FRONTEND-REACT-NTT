import { getCategories, getProducts } from './api.js'
import { verifyCounter } from './cart.js'
import { renderProducts } from './functions.js'

const { products } = await getProducts()

// verify if there is already a cart counter
verifyCounter()

renderProducts(products, 'products')