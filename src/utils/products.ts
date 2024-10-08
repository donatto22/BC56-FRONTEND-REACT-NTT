import { createProductCard } from "@helpers/createProductCard"
import { API_ENDPOINTS } from "../constants/apiEndpoints"
import useFetch from "@helpers/useFetch"

const { get } = useFetch()

const getProducts = async (category?: string) => {
    if(category) {
        const { products } = await get(`${API_ENDPOINTS.PRODUCTS_BY_CATEGORY}/${category}`)
        return { products }
    } else {
        const { products } = await get(API_ENDPOINTS.PRODUCTS)
        return { products }
    }
}

const renderProducts = async (products: Product[]) => {
    const productsGrid = document.getElementById('products')

    while(productsGrid?.firstChild) productsGrid.removeChild(productsGrid.firstChild)

    products.forEach(p => {
        const productCard = createProductCard(p)
        productsGrid?.appendChild(productCard)
    })
}

export {
    renderProducts, getProducts
}