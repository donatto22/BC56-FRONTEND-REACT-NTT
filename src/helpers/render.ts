import { filterProductsBySearch, getProducts, renderProductList, renderProducts } from "@utils/products"
import loadComponent from "./loadComponent"
import { renderCategories } from "@utils/categories"
import { verifyCounter } from "@utils/cart"

export const render = (targetDiv: HTMLElement) => {
    setTimeout(() => {
        loadComponent('./src/components/header.html', targetDiv)
    }, 30)
    
    setTimeout(async () => {
        verifyCounter(document.getElementById('cart')) // loading the counter
        loadComponent('./src/components/main.html', targetDiv) // the products grid
        
        const { products } = await getProducts() 
        renderProducts(products) // fill with products
        renderProductList(products) // fill with products
        filterProductsBySearch() // add to the input the filter functionality
        
        await renderCategories() // fill the categories
    }, 60)
    
    setTimeout(() => {
        loadComponent('./src/components/footer.html', targetDiv)
    }, 90)
}
