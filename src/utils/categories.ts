import { API_ENDPOINTS } from "../constants/apiEndpoints"
import useFetch from "../helpers/useFetch"
import { getProducts, renderProducts } from "./products"

const { get } = useFetch()

const addToggleCategories = (input: HTMLElement, list: HTMLElement) => {
    input.addEventListener('click', () => {
        list.classList.toggle('cat-open')
    })

    // remove the class if we clicked outside the box
    document.addEventListener('click', (event) => {
        if (!input.contains(event.target as HTMLElement)) {
            list.classList.remove('cat-open')
        }
    })
}

const getCategories = async () => {
    const categories = await get(API_ENDPOINTS.CATEGORIES)
    
    return { categories }
}

const changeCategory = async (input: HTMLElement, category: string, slug: string) => {
    input.querySelector('p').textContent = category

    const { products } = await getProducts(slug)
    
    await renderProducts(products)
}

const renderCategories = async () => {
    const categoriesList = document.getElementById('categories')
    const categoriesInput = document.getElementById('input')

    const { categories } = await getCategories()
    
    categories.forEach(c => {
        const div = document.createElement('div')
        div.classList.add('cat')
        div.textContent = c.name
        div.id = c.slug

        div.addEventListener('click', async () => {
            await changeCategory(categoriesInput, c.name, c.slug)
        })

        categoriesList?.appendChild(div)
    })

    addToggleCategories(categoriesInput, categoriesList)
}

export {
    renderCategories, getCategories
}