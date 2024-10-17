import { useCart } from "@context/CartContext"
import { CartItem } from "@types/CartItem"

import deleteIcon from '@icons/trash-outline.svg'
import minusIcon from '@icons/remove-outline.svg'
import addIcon from '@icons/add-outline.svg'

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
                    <div>S/. {item.price}</div>
                    <div className="quantity">
                        <button>
                            <img src={ minusIcon } width={14} alt="Minus icon" />
                        </button>

                        <p>{ item.quantity }</p>

                        <button onClick={ () => addToCart(item) }>
                            <img src={ addIcon } width={14} alt="Add icon" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="itemOptions" onClick={ () => { removeFromCart(item.id) }}>
                <img src={ deleteIcon } width={20} alt="Delete Icon" />
            </div>
        </div>
    )
}

export default ItemCard