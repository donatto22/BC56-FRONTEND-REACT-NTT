import { createContext, useContext, useState, ReactNode } from 'react'
import { Product } from '@types/Product'
import { CartItem } from '@types/CartItem'

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

// Hook para usar el contexto
export const useCart = (): CartContextType => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

// Provider del carrito
export const CartProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const addToCart = (product: Product) => {
        setCartItems(prevItems => {
            const existingProduct = prevItems.find(item => item.id === product.id)

            if (existingProduct) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            } else {
                return [...prevItems, { ...product, quantity: 1 }]
            }
        })
    }

    const clearCart = () => {
        setCartItems([])
    }

    const removeFromCart = (productId: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}
