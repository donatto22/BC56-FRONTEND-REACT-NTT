import { startTransition, useCallback } from "react"
import { useNavigate } from "react-router-dom"

import useLocalStorage from "./useLocalStorage"
import useFetch from "./useFetch"
import { Category } from "@types/Category"
import { Product, ProductResponse } from "@types/Product"
import { ApiEndpoints } from "@types/ApiEndpoints"
import { DummyToken } from "@types/DummyToken"


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

    const getProducts = useCallback(async (): Promise<ProductResponse> => {
        const { products } = await get(ApiEndpoints.PRODUCTS)
        return { products }
    }, [])

    const getProductById = useCallback(async (id: string): Promise<Product> => {
        const product = await get(ApiEndpoints.PRODUCTS + `/${id}`)
        return { product }
    }, [])

    const getCategories = useCallback(async (): Promise<Category[]> => {
        const categories = await get(ApiEndpoints.CATEGORIES)
        return categories
    }, [])

    const getProductsByCategory = useCallback(async (slug: string): Promise<ProductResponse> => {
        const products = await get(ApiEndpoints.PRODUCTS_BY_CATEGORY + `/${slug}`)
        return products
    }, [])

    return Object.freeze({
        login, logout, getProducts, getCategories, getProductsByCategory, getProductById
    })
}

export default useDummyjson