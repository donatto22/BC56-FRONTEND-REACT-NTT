import { CartItem } from "@types/CartItem"

import './tableSummary.css'
import { useEffect, useState } from "react"

const TableSummary = ({ cartItems }: { cartItems: CartItem[] }): React.JSX.Element => {
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
                        <tr className="tableItem">
                            <td>
                                <img width={50} src={ item.thumbnail } alt={ item.title } />
                            </td>
                            <td> { item.title } </td>
                            <td className="price"> S/. { item.price } </td> 
                            <td> { item.quantity } </td>
                            <td></td>
                            <td className="price"> S/. { item.price * item.quantity } </td>
                        </tr>
                    ))
                }
            </tbody>

            <tfoot>
                <th>Total</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <td className="price">S/. { String(totalPrice.toFixed(2)) }</td>
            </tfoot>
        </table>
    )
}

export default TableSummary