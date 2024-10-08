import { addToCart } from "@utils/cart"

export const createProductCard = (product: Product) => {
    const card = document.createElement('article') // the entire card
    card.classList.add('product-card')
    card.id = String(product.id)

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
        addToCart(document.getElementById('cart'))
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
