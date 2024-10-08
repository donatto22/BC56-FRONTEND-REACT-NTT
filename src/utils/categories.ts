import { API_ENDPOINTS } from "../constants/apiEndpoints"
import useFetch from "../helpers/useFetch"

const { get } = useFetch()

const addToggleCategories = (input: HTMLElement, list: HTMLElement) => {

    input.addEventListener('click', () => {
        list.classList.toggle('cat-open')
    })

    // remove the class if we clicked outside the box
    document.addEventListener('click', (event) => {
        if (!input.contains(event.target)) {
            list.classList.remove('cat-open')
        }
    })
}

const getCategories = async () => {
    const categories = await get(API_ENDPOINTS.CATEGORIES)
    
    return { categories }
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

        // div.addEventListener('click', () => {
        //     changeCategory(c.name, c.slug)
        // })

        categoriesList?.appendChild(div)
    })

    addToggleCategories(categoriesInput, categoriesList)
}

export {
    renderCategories, getCategories
}