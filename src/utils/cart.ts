import useLocalStorage from '@helpers/useLocalStorage'
import { validateElement } from '@helpers/validateElement'

const { getItem, setItem, removeItem } = useLocalStorage()

let counter: HTMLElement | null = null

export const addToCart = (cart: HTMLElement) => {
    counter = validateElement(cart.querySelector('p'))

    // is there already something added?
    const cartCounter = Number(getItem('cartCounter'))
    
    if(!cartCounter) setItem('cartCounter', '1')
        else setItem('cartCounter', String(cartCounter + 1))

    counter.textContent = String(cartCounter + 1)
}

export const verifyCounter = (cart: HTMLElement) => {
    counter = validateElement(cart.querySelector('p'))
    const cartCounter = getItem('cartCounter')
    
    if(cartCounter) {
        counter.textContent = cartCounter
    }
}

export const clearCart = () => {    
    removeItem('cartCounter')
    validateElement(counter).textContent = '0'
}
