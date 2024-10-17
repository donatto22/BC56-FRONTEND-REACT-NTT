import { useCart } from "@context/CartContext"
import { CartItem } from "@types/CartItem"

import deleteIcon from '@icons/trash-outline.svg'
import QuantityOptions from "@components/quantityOptions/QuantityOptions"

const ItemCard = ({ item }: { item: CartItem }) => {
    const { removeFromCart, addToCart } = useCart()

    return (
        <div className="itemCard">
            <div className="itemContainer">
                <div className="itemImage">
                    <img src={item.thumbnail} alt={item.title} />
                </div>

                <div className="itemDescription">
                    <b>{item.title}</b>
                    <div className="price">S/. {item.price}</div>
                    <QuantityOptions item={ item } />
                </div>
            </div>

            <div className="itemOptions" onClick={ () => { removeFromCart(item.id) }}>
                <img src={ deleteIcon } width={20} alt="Delete Icon" />
            </div>
        </div>
    )
}

export default ItemCard