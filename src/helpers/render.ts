import { getProducts, renderProducts } from "@utils/products"
import loadComponent from "./loadComponent"
import { renderCategories } from "@utils/categories"

export const render = (targetDiv: HTMLElement) => {
    setTimeout(() => {
        loadComponent('./src/components/header.html', targetDiv)
    }, 50)
    
    setTimeout(async () => {
        loadComponent('./src/components/main.html', targetDiv)
        
        const { products } = await getProducts()
        await renderProducts(products)

        await renderCategories()
    }, 100)

    setTimeout(() => {
        loadComponent('./src/components/footer.html', targetDiv)
    }, 150)
}
