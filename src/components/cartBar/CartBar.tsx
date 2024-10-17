import { useCart } from '@context/CartContext'
import './cartBar.css'

import closeIcon from '@icons/close-outline.svg'
import ItemCard from './ItemCard'

const CartBar = ({ reference, onClick }: { reference: React.RefObject<HTMLDivElement>, onClick: () => void }) => {
    const { cartItems } = useCart()

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
        </div>
    )
}

export default CartBar