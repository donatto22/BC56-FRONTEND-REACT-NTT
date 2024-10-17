import QuantityOptions from '@components/quantityOptions/QuantityOptions'
import { CartItem } from '@types/CartItem'

const TableItem = ({ item }: { item: CartItem }) => {
    return (
        <tr className="tableItem">
            <td>
                <img width={50} src={item.thumbnail} alt={item.title} />
            </td>
            <td> {item.title} </td>
            <td className="price"> S/. {item.price} </td>
            <td className='tableOptions'>
                <QuantityOptions item={ item } />
            </td>
            <td></td>
            <td className="price"> S/. {item.price * item.quantity} </td>
        </tr>
    )
}

export default TableItem