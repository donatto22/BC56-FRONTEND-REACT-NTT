import { getItem, setItem } from './useLocalStorage.js'

export const addToCart = () => {
    // is there already something added?
    const cartCounter = Number(getItem('cartCounter'))
    
    if(!cartCounter) setItem('cartCounter', 1)
        else setItem('cartCounter', cartCounter + 1)
}