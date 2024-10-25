import { CartItem } from "src/declarations/CartItem"
import ProductQuantityButton from "./ProductQuantityButton"

const QuantityOptions = ({ item }: { item: CartItem }) => {
  return (
      <div className="quantity">
          <ProductQuantityButton item={item} type="Minus" />

          <p>{ item.quantity }</p>

          <ProductQuantityButton item={item} type="Add" />
      </div>
  )
}

export default QuantityOptions