import { getCategories, getProducts } from './api.js'
import { verifyCounter } from './cart.js'
import { renderProductList, renderProducts } from './functions.js'

const { products } = await getProducts()

// verify if there is already a cart counter
verifyCounter()

// adding all the products to the search engine
renderProductList(products)

renderProducts(products, 'products')