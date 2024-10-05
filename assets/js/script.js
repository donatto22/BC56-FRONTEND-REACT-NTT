import { getCategories, getProducts } from './api.js'
import { verifyCounter } from './cart.js'
import { addToggleCategories, renderCategories } from './category.js'
import { renderProductList, renderProducts } from './functions.js'

const { products } = await getProducts()
const { categories } = await getCategories()

// verify if there is already a cart counter
verifyCounter()

// adding all the products to the search engine
renderProductList(products)

// adding the categories
renderCategories(categories)
addToggleCategories()

renderProducts(products, 'products')