import { useEffect, useState } from "react"
import './tableSummary.css'
import { useCart } from "@context/CartContext"
import TableItem from "./TableItem"

const TableSummary = (): React.JSX.Element => {
    const { cartItems } = useCart()
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        cartItems.forEach(item => {
            setTotalPrice(prevPrice => prevPrice += (item.price * item.quantity))
        })
    }, [cartItems])

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
                        <TableItem item={item} />
                    ))
                }
            </tbody>

            <tfoot>
                <tr>
                    <th colSpan={5}>Total</th>
                    <th className="price">S/. {String(totalPrice.toFixed(2))}</th>
                </tr>
            </tfoot>
        </table>
    )
}

export default TableSummary