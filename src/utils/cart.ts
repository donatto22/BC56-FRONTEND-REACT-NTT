import useLocalStorage from '@helpers/useLocalStorage'

const { getItem, setItem, removeItem } = useLocalStorage()

let counter = null

export const addToCart = (cart) => {
    counter = cart.querySelector('p')

    // is there already something added?
    const cartCounter = Number(getItem('cartCounter'))
    
    if(!cartCounter) setItem('cartCounter', 1)
        else setItem('cartCounter', cartCounter + 1)

    counter.textContent = cartCounter + 1
}

export const verifyCounter = (cart) => {
    counter = cart.querySelector('p')
    const cartCounter = getItem('cartCounter')
    
    if(cartCounter) {
        counter.textContent = cartCounter
    }

    document.getElementById('cart-option').addEventListener('click', () => {
        clearCart()
    })
}

const clearCart = () => {
    counter = cart.querySelector('p')
    
    removeItem('cartCounter')
    counter.textContent = '0'
}
