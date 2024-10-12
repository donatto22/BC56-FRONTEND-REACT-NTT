import useFetch from "./useFetch"
import { Category } from "@types/Category"
import { ProductResponse } from "@types/Product"
import { ApiEndpoints } from "@types/ApiEndpoints"
import { DummyToken } from "@types/DummyToken"


const useDummyjson = () => {
    const { get, post } = useFetch()

    const login = async (data: object) => {
        const session: DummyToken = await post(ApiEndpoints.LOGIN, data)
        return { session }
    }

    const getProducts = async (): Promise<ProductResponse> => {
        const { products } = await get(ApiEndpoints.PRODUCTS)
        return { products }
    }

    const getCategories = async (): Promise<Category[]> => {
        const categories = await get(ApiEndpoints.CATEGORIES)
        return categories
    }

    const getProductsByCategory = async (slug: string): Promise<ProductResponse> => {
        const products = await get(ApiEndpoints.PRODUCTS_BY_CATEGORY + `/${slug}`)
        return products
    }

    return Object.freeze({
        login, getProducts, getCategories, getProductsByCategory
    })
}

export default useDummyjson