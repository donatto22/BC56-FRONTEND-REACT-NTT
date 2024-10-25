
import './button.css'

import minusIcon from '@icons/remove-outline.svg'
import addIcon from '@icons/add-outline.svg'
import { CartItem } from 'src/declarations/CartItem'
import useCart from '@hooks/useCart'

interface ProductActions {
    type: 'Minus' | 'Add',
    item: CartItem
}

const ProductQuantityButton = ({ type, item }: ProductActions) => {
    const { addToCart, decreaseQuantity } = useCart()
    return (
        <>
            {
                type == 'Add' ?
                <button className="productQuantityButton" onClick={() => addToCart(item)} >
                    <img src={ addIcon } alt="Add Icon" />
                </button> :
                <button className="productQuantityButton" onClick={() => decreaseQuantity(item.id)} >
                    <img src={ minusIcon } alt="Minus Icon" />
                </button>
            }
        </>
    )
}

export default ProductQuantityButton