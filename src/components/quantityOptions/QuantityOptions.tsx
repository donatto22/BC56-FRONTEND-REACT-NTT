import { CartItem } from "src/declarations/CartItem"
import ProductQuantityButton from "./ProductQuantityButton"

const QuantityOptions = ({ item }: Partial<{ item: CartItem }>) => {
    return (
        <div className="quantity">
            {
                item &&
                <>
                    <ProductQuantityButton item={item} type="Minus" />

                    <p>{item.quantity}</p>

                    <ProductQuantityButton item={item} type="Add" />
                </>
            }
        </div>
    )
}

export default QuantityOptions