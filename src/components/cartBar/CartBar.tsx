import './cartBar.css'

import closeIcon from '@icons/close-outline.svg'

const CartBar = ({ reference, onClick }: { reference: React.RefObject<HTMLDivElement>, onClick: () => void }) => {
    return (
        <div id="cartBar" ref={reference}>
            <div id="cart-header">
                <h1>Carrito</h1>

                <div id='cart-close-icon' onClick={onClick}>
                    <img src={ closeIcon } alt="Close icon" width={30} />
                </div>
            </div>
        </div>
    )
}

export default CartBar