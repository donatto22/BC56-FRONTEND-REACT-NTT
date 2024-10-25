import { CartItem } from '@declarations/CartItem'
import { Product } from '@declarations/Product'
import { createContext,  useState, ReactNode, useEffect } from 'react'

interface CartContextType {
  cartItems: CartItem[]
  totalPrice: number
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  decreaseQuantity: (productId: number) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [totalPrice, setTotalPrice] =useState(0)

    useEffect(() => {
        setTotalPrice(0)

        cartItems.forEach(item => {
            setTotalPrice(prevPrice => prevPrice += (item.price * item.quantity))
        })
    }, [cartItems])

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

    const decreaseQuantity = (productId: number) => {
        setCartItems(prevItems => {
            const existingProduct = prevItems.find(item => item.id === productId)

            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    return prevItems.map(item =>
                        item.id === productId
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                } else {
                    return prevItems.filter(item => item.id !== productId)
                }
            }
            return prevItems
        })
    }

    const clearCart = () => {
        setCartItems([])
    }

    const removeFromCart = (productId: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    }

    return (
        <CartContext.Provider value={{ cartItems, totalPrice, addToCart, clearCart, removeFromCart, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    )
}
