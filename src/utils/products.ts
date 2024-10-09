import { createProductCard } from "@helpers/createProductCard"
import { API_ENDPOINTS } from "../constants/apiEndpoints"
import useFetch from "@helpers/useFetch"
import { validateElement } from "@helpers/validateElement"

const { get } = useFetch()

const getProducts = async (category?: string): Promise<ProductResponse> => {
    if(category) {
        const { products } = await get(`${API_ENDPOINTS.PRODUCTS_BY_CATEGORY}/${category}`)
        return { products }
    } else {
        const { products } = await get(API_ENDPOINTS.PRODUCTS)
        return { products }
    }
}

const renderProducts = (products: Product[]) => {
    const productsGrid = document.getElementById('products')

    while(productsGrid?.firstChild) productsGrid.removeChild(productsGrid.firstChild)

    products.forEach(p => {
        const productCard = createProductCard(p)
        productsGrid?.appendChild(productCard)
    })
}

const renderProductList = (products: Product[]) => {
    const datalist = document.getElementById('productsList')

    products.forEach(p => {
        const option = document.createElement('option')
        option.value = p.title

        datalist?.appendChild(option)
    })
}

const filterProductsBySearch = () => {
    const input = document.getElementById('buscador') as HTMLInputElement

    input.addEventListener('input', () => {
        const regex = /^[a-zA-ZñÑ\s]*$/

        if (!regex.test(input.value)) {
            // if doesnt match it will delete the last character we put
            input.value = input.value.slice(0, -1)
            return
        }

        const productos = document.querySelectorAll('.product-card')
        
        productos.forEach((p) => {
            const productName = validateElement(p.querySelector('h3')).textContent!.toLowerCase()

            if(productName.includes(input.value.toLowerCase())) {
                (p as HTMLElement).style.display = 'block'
            } else (p as HTMLElement).style.display = 'none'
        })
    })
}

export {
    renderProducts, getProducts, renderProductList, filterProductsBySearch
}