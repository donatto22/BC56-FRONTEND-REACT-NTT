import { createProductCard } from "@helpers/createProductCard"
import { API_ENDPOINTS } from "../constants/apiEndpoints"
import useFetch from "@helpers/useFetch"

const { get } = useFetch()

const getProducts = async (category?: string) => {
    const { products } = await get(API_ENDPOINTS.PRODUCTS)
    return { products }
}

const renderProducts = async (products: Product[]) => {
    const productsGrid = document.getElementById('products')

    if(productsGrid?.firstChild) productsGrid.removeChild(productsGrid.firstChild)

    products.forEach(p => {
        const productCard = createProductCard(p)
        productsGrid?.appendChild(productCard)
    })
}

export {
    renderProducts, getProducts
}