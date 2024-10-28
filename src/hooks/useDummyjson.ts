/* eslint-disable react-hooks/exhaustive-deps */
import { startTransition, useCallback } from "react"
import { useNavigate } from "react-router-dom"

import useLocalStorage from "./useLocalStorage"
import useFetch from "./useFetch"
import { ApiEndpoints } from "@declarations/ApiEndpoints"
import { DummyToken } from "@declarations/DummyToken"
import { Product, ProductResponse } from "@declarations/Product"
import { Category } from "@declarations/Category"
import { toast } from "sonner"
import { ErrorMessages } from "@declarations/ErrorMessages"

const useDummyjson = () => {
    const { get, post } = useFetch()
    const { removeItem } = useLocalStorage()
    const navigator = useNavigate()

    const login = async (data: object) => {
        let session: DummyToken
        
        try {
            session = await post(ApiEndpoints.LOGIN, data)
            toast.success('Ingreso exitoso')
            return { session }
        } catch {
            toast.error('Usuario o contraseña incorrectos')
            throw new Error(ErrorMessages.LOGIN_ERROR)
        }
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
        return product
    }, [])

    const getCategories = useCallback(async (): Promise<Category[]> => {
        const categories: Category[] = await get(ApiEndpoints.CATEGORIES)
        return categories
    }, [])

    const getProductsByCategory = useCallback(async (slug: string): Promise<ProductResponse> => {
        const products = await get(ApiEndpoints.PRODUCTS_BY_CATEGORY + `/${slug}`)
        return products
    }, [])

    return {
        login, logout, getProducts, getCategories, getProductsByCategory, getProductById
    }
}

export default useDummyjson