import { getCategories, getProducts } from './api.js'
import { renderProducts } from './functions.js'

const { products } = await getProducts()

renderProducts(products, 'products')

