import { MemoryRouter } from 'react-router-dom'
import useDummyjson from '@hooks/useDummyjson'
import { renderHook } from '@testing-library/react'
import { mockFetch } from '../utils/mockFetch'

import { categoriesMock } from '../__mocks__/categories.mock'
import { productMock, productsMock } from '../__mocks__/products.mock'

beforeAll(() => {
    global.fetch = jest.fn()
})

afterEach(() => {
    jest.clearAllMocks()
    global.fetch = fetch
})

describe('Verificar que useDummyjson funciona', () => {
    it('getCategories', async () => {
        mockFetch(categoriesMock)

        const { result } = renderHook(() => useDummyjson(), { wrapper: MemoryRouter })

        const categories = await result.current.getCategories()

        expect(categories).toEqual(categoriesMock)
    })

    it('getProducts', async () => {
        mockFetch(productsMock)

        const { result } = renderHook(() => useDummyjson(), { wrapper: MemoryRouter })

        const { products } = await result.current.getProducts()

        expect(products[0]).toEqual(productMock)
    })
})
