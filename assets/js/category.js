import { getProductByCategory } from "./api.js"
import { renderProducts } from "./functions.js"

const categoriesInput = document.getElementById('input') 
const categoriesList = document.getElementById('categories')

// it changes the category when click
/**
 * @param { string } category 
 */
const changeCategory = async (category, slug) => {
    categoriesInput.querySelector('p').textContent = category

    const { products } = await getProductByCategory(slug)
    
    renderProducts(products, 'products')
}

export const renderCategories = (categories) => {

    categories.forEach(c => {
        const div = document.createElement('div')
        div.classList.add('cat')
        div.textContent = c.name
        div.id = c.slug

        div.addEventListener('click', () => {
            changeCategory(c.name, c.slug)
        })

        categoriesList.appendChild(div)
    })
}

export const addToggleCategories = () => {
    categoriesInput.addEventListener('click', () => {
        categoriesList.classList.toggle('cat-open')
    })

    // remove the class if we clicked outside the box
    document.addEventListener('click', (event) => {
        if (!categoriesInput.contains(event.target)) {
            categoriesList.classList.remove('cat-open')
        }
    })
}
