/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react'

import useFetch from './useFetch'
import { Product, ProductResponse } from '@declarations/Product'
import { ApiEndpoints } from '@declarations/ApiEndpoints'
import { Category } from '@declarations/Category'

const useDummyjson = () => {
    const { get } = useFetch()

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
        getProducts, getCategories, getProductsByCategory, getProductById
    }
}

export default useDummyjson