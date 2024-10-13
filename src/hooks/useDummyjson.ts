import useFetch from "./useFetch"
import { Category } from "@types/Category"
import { ProductResponse } from "@types/Product"
import { ApiEndpoints } from "@types/ApiEndpoints"
import { DummyToken } from "@types/DummyToken"
import useLocalStorage from "./useLocalStorage"
import { useNavigate } from "react-router-dom"
import { startTransition } from "react"


const useDummyjson = () => {
    const { get, post } = useFetch()
    const { removeItem } = useLocalStorage()
    const navigator = useNavigate()

    const login = async (data: object) => {
        const session: DummyToken = await post(ApiEndpoints.LOGIN, data)
        return { session }
    }

    const logout = () => {
        removeItem('token')
        startTransition(() => {
            navigator('/login')
        })
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
        login, logout, getProducts, getCategories, getProductsByCategory
    })
}

export default useDummyjson