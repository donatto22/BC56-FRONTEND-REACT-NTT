import { useNavigate } from 'react-router-dom'
import { useCart } from '@context/CartContext'
import './cartBar.css'

import closeIcon from '@icons/close-outline.svg'
import ItemCard from './ItemCard'
import NoCartProducts from '@components/noCartProducts/NoCartProducts'

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
                    cartItems.length != 0 ?
                    cartItems.map(item => (
                        <ItemCard key={ item.id } item={ item }/>
                    )) :
                    <NoCartProducts />
                }
            </div>

            {
                cartItems.length != 0 &&
                <div id="cart-footer">
                    <p>Total:</p>
                    <div id="cart-actions">
                        <button id='buyButton' onClick={() => navigate('/summary')}>Comprar</button>
                        <button id='clearCart' onClick={() => clearCart()}>Vaciar Carrito</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default CartBar