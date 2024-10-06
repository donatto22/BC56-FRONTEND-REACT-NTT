import { addToCart } from './cart.js'

const productsCounter = document.getElementById('productsCounter')

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
    image.loading = 'lazy'

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

    productsCounter.textContent = `Total de productos: ${products.products.length}`
    
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

export const setLoading = (isLoading) => {
    const divLoading = document.getElementById('loading')
    
    isLoading ? divLoading.style.display = 'block' : divLoading.style.display = 'none'
}

export const filterProductsBySearch = () => {
    const input = document.getElementById('buscador')

    input.addEventListener('input', () => {
        const regex = /^[a-zA-ZñÑ\s]*$/

        if (!regex.test(input.value)) {
            // if doesnt match it will delete the last character we put
            input.value = input.value.slice(0, -1)
            return
        }

        const productos = document.querySelectorAll('.product-card')
        
        productos.forEach(p => {
            const productName = p.querySelector('h3').textContent.toLowerCase()

            if(productName.includes(input.value.toLowerCase())) {
                p.style.display = 'block'
            } else p.style.display = 'none'
        })
    })
}