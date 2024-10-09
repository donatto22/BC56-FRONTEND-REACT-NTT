import { validateElement } from "./validateElement"

export const setLoading = (isLoading: boolean) => {
    const divLoading = validateElement(document.getElementById('loading'))
    
    isLoading ? divLoading.style.display = 'block' : divLoading.style.display = 'none'
}