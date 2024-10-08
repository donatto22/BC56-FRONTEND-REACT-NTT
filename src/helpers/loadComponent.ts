import { clearCart } from "@utils/cart"

const loadComponent = async (htmlComponentUrl: string, targetDiv: HTMLElement) => {
    const response = await fetch(htmlComponentUrl)
    const htmlContent = await response.text()

    targetDiv.innerHTML += htmlContent

    const button = document.getElementById('cart-option')!

    button.addEventListener('click', () => {
        clearCart()
        alert('Vaciaste el carrito')
    })
}

export default loadComponent
