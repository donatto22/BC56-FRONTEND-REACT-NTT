import { getCategories } from './functions.js'

const { categories } = await getCategories()
console.log(categories)