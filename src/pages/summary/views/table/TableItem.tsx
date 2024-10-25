
import QuantityOptions from '@components/QuantityOptions/QuantityOptions'
import deleteIcon from '@icons/trash-outline.svg'
import { CartItem } from '@declarations/CartItem'
import useCart from '@hooks/useCart'

const TableItem = ({ item }: { item: CartItem }) => {
    const  { removeFromCart } = useCart()

    return (
        <tr className="tableItem">
            <td>
                <img width={50} src={ item.thumbnail } alt={ item.title } />
            </td>
            <td> { item.title } </td>
            <td className="price"> S/. { item.price } </td>
            <td>
                <QuantityOptions item={ item } />
            </td>
            <td>
                <button className='cartDeleteButton' onClick={ () => removeFromCart(item.id) }>
                    <img width={20} src={ deleteIcon } alt="Delete icon" />
                </button>
            </td>
            <td className="price"> S/. { String((item.price * item.quantity).toFixed(2)) } </td>
        </tr>
    )
}

export default TableItem
