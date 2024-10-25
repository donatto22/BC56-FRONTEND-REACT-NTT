import { CartContext } from "@context/CartContext"
import { CartItem } from "@declarations/CartItem"
import { Product } from "@declarations/Product"
import { useContext } from "react"

interface CartContextType {
    cartItems: CartItem[]
    totalPrice: number
    addToCart: (product: Product) => void
    removeFromCart: (productId: number) => void
    decreaseQuantity: (productId: number) => void
    clearCart: () => void
  }

export const useCart = (): CartContextType => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export default useCart