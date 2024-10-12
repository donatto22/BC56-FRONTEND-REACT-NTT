import { Category } from "@types/Category"
import { ProductResponse } from "@types/Product"
import useFetch from "./useFetch"
import { ApiEndpoints } from "@types/ApiEndpoints"

const useDummyjson = () => {
    const { get, post } = useFetch()

    const login = async () => {

    }

    const getProducts = async (): Promise<ProductResponse> => {
        const { products } = await get(ApiEndpoints.PRODUCTS)
        return { products }
    }

    const getCategories = async (): Promise<Category[]> => {
        const categories = await get(ApiEndpoints.CATEGORIES)
        return categories
    }

    const getProductsByCategory = async (slug: string): ProductResponse => {

    }

    return Object.freeze({
        login, getProducts, getCategories
    })
}

export default useDummyjson