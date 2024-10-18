import { useCart } from "@context/CartContext"

import './tableSummary.css'
import TableItem from "./TableItem"

const TableSummary = (): React.JSX.Element => {
    const { cartItems, totalPrice } = useCart()

    return (
        <table id="tableSummary">
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Producto</th>
                    <th>Precio / Unidad</th>
                    <th>Cantidad</th>
                    <th></th>
                    <th>Total</th>
                </tr>
            </thead>

            <tbody>
                {
                    cartItems.map(item => (
                        <TableItem key={item.id} item={item} />
                    ))
                }
            </tbody>

            <tfoot>
                <tr>
                    <th colSpan={5}>Total</th>
                    <th className="price">S/. { String(totalPrice.toFixed(2)) }</th>
                </tr>
            </tfoot>
        </table>
    )
}

export default TableSummary