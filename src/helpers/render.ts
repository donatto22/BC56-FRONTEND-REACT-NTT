import { getProducts, renderProducts } from "@utils/products"
import loadComponent from "./loadComponent"
import { renderCategories } from "@utils/categories"
import { verifyCounter } from "@utils/cart"

export const render = (targetDiv: HTMLElement) => {
    setTimeout(() => {
        loadComponent('./src/components/header.html', targetDiv)
    }, 50)
    
    setTimeout(async () => {
        verifyCounter(document.getElementById('cart')) // loading the counter
        loadComponent('./src/components/main.html', targetDiv) // the products grid
        
        const { products } = await getProducts() 
        await renderProducts(products) // fill with products
        
        await renderCategories() // fill the categories
    }, 100)
    
    setTimeout(() => {
        loadComponent('./src/components/footer.html', targetDiv)
    }, 150)
}
