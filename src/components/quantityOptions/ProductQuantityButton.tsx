import { useCart } from "@context/CartContext"
import { CartItem } from "@types/CartItem"

import './button.css'

import deleteIcon from '@icons/trash-outline.svg'
import minusIcon from '@icons/remove-outline.svg'
import addIcon from '@icons/add-outline.svg'

interface ProductActions {
    type: 'Minus' | 'Add',
    item: CartItem
}


const ProductQuantityButton = ({ type, item }: ProductActions) => {
    const { addToCart } = useCart()
    return (
        <>
            {
                type == 'Add' ?
                <button className="productQuantityButton" onClick={() => addToCart(item)} >
                    <img src={addIcon} alt="Add Icon" />
                </button> :
                <button className="productQuantityButton" onClick={() => addToCart(item)} >
                    <img src={minusIcon} alt="Add Icon" />
                </button>
            }
        </>
    )
}

export default ProductQuantityButton