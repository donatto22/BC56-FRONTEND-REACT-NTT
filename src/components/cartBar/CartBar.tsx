import { useCart } from '@context/CartContext'
import './cartBar.css'

import closeIcon from '@icons/close-outline.svg'
import ItemCard from './ItemCard'
import { useNavigate } from 'react-router-dom'

const CartBar = ({ reference, onClick }: { reference: React.RefObject<HTMLDivElement>, onClick: () => void }) => {
    const { cartItems, clearCart } = useCart()
    const navigate = useNavigate()

    return (
        <div id="cartBar" ref={reference}>
            <div id="cart-header">
                <h1>Carrito</h1>

                <div id='cart-close-icon' onClick={onClick}>
                    <img src={ closeIcon } alt="Close icon" width={30} />
                </div>
            </div>

            <div id="cart-main">
                {
                    cartItems.map(item => (
                        <ItemCard key={ item.id } item={ item }/>
                    ))
                }
            </div>

            <div id="cart-footer">
                <p>Total:</p>
                <div id="cart-actions">
                    <button id='buyButton' onClick={ () => navigate('/summary') }>Comprar</button>
                    <button id='clearCart' onClick={ () => clearCart() }>Vaciar Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default CartBar