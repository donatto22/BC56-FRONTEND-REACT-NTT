import { Product } from "@types/Product"

import deleteIcon from '@icons/trash-outline.svg'

const ItemCard = ({ item }: { item: Product }) => {
    return (
        <div className="itemCard">
            <div className="itemContainer">
                <div className="itemImage">
                    <img src={item.thumbnail} alt={item.title} />
                </div>

                <div className="itemDescription">
                    <b>{item.title}</b>
                    <div>S/. {item.price}</div>
                </div>
            </div>

            <div className="itemOptions">
                <img src={ deleteIcon } width={20} alt="Delete Icon" />
            </div>
        </div>
    )
}

export default ItemCard