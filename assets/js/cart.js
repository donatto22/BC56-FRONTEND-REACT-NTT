import { getItem, removeItem, setItem } from './useLocalStorage.js'

const cart = document.getElementById('cart')
const counter = cart.querySelector('p')

export const addToCart = () => {
    // is there already something added?
    const cartCounter = Number(getItem('cartCounter'))
    
    if(!cartCounter) setItem('cartCounter', 1)
        else setItem('cartCounter', cartCounter + 1)

    counter.textContent = cartCounter + 1
}

export const verifyCounter = () => {
    const cartCounter = getItem('cartCounter')
    
    if(cartCounter) {
        counter.textContent = cartCounter
    }

    document.getElementById('cart-option').addEventListener('click', () => {
        clearCart()
    })
}

const clearCart = () => {
    removeItem('cartCounter')
    counter.textContent = '0'
}
