const PRODUCTS = 'https://dummyjson.com/products'
const CATEGORIES = 'https://dummyjson.com/products/categories'

const get = async (endpoint) => {
    let data = null

    const api = await fetch(endpoint)

    if(!api.ok) throw new Error('Error al recolectar datos: ' + api.status)

    data = await api.json()

    return data
}

export const createProductCard = () => {
    console.log(123)
}

export const getCategories = async () => {
    let categories = null
    categories = await get(CATEGORIES)

    return { categories }
}

export const getProducts = async () => {
    let products = null
    products = await get(PRODUCTS)

    return { products }
}