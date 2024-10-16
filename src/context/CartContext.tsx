import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { Product } from '@types/Product'

interface CartContextType {
  cartItems: Product[]
  addToCart: (product: Product) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

// Hook para usar el contexto
export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

// Provider del carrito
export const CartProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
    const [cartItems, setCartItems] = useState<Product[]>([])

    const addToCart = (product: Product) => {
        setCartItems(prevItems => [...prevItems, product])
    }

    const clearCart = () => {
        setCartItems([])
    }

    useEffect(() => {
      console.log('Updated cart items:', cartItems);
  }, [cartItems])

    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
