import { addToCart } from './cart.js'

/**
 * @typedef { Object } Product 
 * @property { Number } id
 * @property { string } title
 * @property { string } description
 * @property { Number } price
 * @property { string } thumbnail
*/

/**
 * @param { Product } product 
 */
const createProductCard = (product) => {
    const card = document.createElement('article') // the entire card
    card.classList.add('product-card')
    card.id = product.id

    const image = document.createElement('img') // product image
    image.src = product.thumbnail

    const title = document.createElement('h3') // product name
    title.textContent = product.title

    const description = document.createElement('p')
    description.textContent = product.description

    const price = document.createElement('div')
    price.textContent =`$/. ${product.price}`

    const actionButton = document.createElement('button')
    actionButton.textContent = 'Comprar'
    actionButton.classList.add('buy-button')
    actionButton.addEventListener('click', () => {
        addToCart()
    })

    // header and main
    const headerCard = document.createElement('header')
    headerCard.appendChild(image)

    const mainCard = document.createElement('main')
    mainCard.appendChild(title)
    mainCard.appendChild(description)
    mainCard.appendChild(price)
    mainCard.appendChild(actionButton)

    // adding all to the card
    card.appendChild(headerCard)
    card.appendChild(mainCard)

    return card
}

/**
 * @param { Array } products 
 * @param { string } elementId
 */
export const renderProducts = (products, elementId) => {
    const div = document.getElementById(elementId)
    
    // each time we change category, it will remove the content before
    // add more products
    while(div.firstChild) {
        div.removeChild(div.firstChild)
    }

    products.products.forEach((p) => {
        const card = createProductCard(p)
        div.appendChild(card)
    })
}

/**
 * @param { Array } products 
 * This function add the product list to the Datalist on the input to find some product
 */
export const renderProductList = (products) => {
    const datalist = document.getElementById('productsList')

    products.products.forEach(p => {
        const option = document.createElement('option')
        option.value = p.title

        datalist.appendChild(option)
    })
}
