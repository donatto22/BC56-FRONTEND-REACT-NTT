/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

import useFetch from "./useFetch"
import { Product, ProductResponse } from "@declarations/Product"
import { ErrorMessages } from "@declarations/ErrorMessages"
import { ApiEndpoints } from "@declarations/ApiEndpoints"
import { DummyToken } from "@declarations/DummyToken"
import { Category } from "@declarations/Category"
import useSessionStorage from "./useSessionStorage"
import { Paths } from "@declarations/Paths"

const useDummyjson = () => {
    const { get, post } = useFetch()
    const { removeItem } = useSessionStorage()
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
        navigator(Paths.login)
        toast.success('Has cerrado sesión')
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