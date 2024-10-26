import './gridSummary.css'

import deleteIcon from '@icons/trash-outline.svg'
import starIcon from '@icons/star.png'
import dollarIcon from '@icons/dollar.png'
import QuantityOptions from "@components/QuantityOptions/QuantityOptions"
import { useNavigate } from "react-router-dom"
import useCart from '@hooks/useCart'

const GridSummary = () => {
    const { cartItems, totalPrice, removeFromCart } = useCart()
    const navigate = useNavigate()
    
    return (
        <div id="productsGridContainer">
            <div id="gridView">
                {
                    cartItems.map(item => (
                        <div className="gridItem" key={item.id}>
                            <div className="gridItemProduct">
                                <div className="gridItemImage">
                                    <img src={item.thumbnail} alt={item.title} />
                                </div>

                                <div className="itemDescription">
                                    <h3>{item.title}</h3>
                                    <div className="rating">
                                        <img width={20} src={starIcon} alt="Flaticon Star Icon" />
                                        <p>{item.rating}</p>
                                    </div>

                                    <div className="pricing">
                                        <img width={20} src={dollarIcon} alt="Flaticon Dollar Icon" />
                                        <p>Precio / Unidad: <b>S/. {item.price}</b></p>
                                    </div>

                                    <button className="reviews" onClick={ () => navigate('/products/' + item.id) }>Ver Producto</button>
                                </div>
                            </div>

                            <div className="gridActions">
                                <div className="totalPricePerUnit">
                                    <p> S/. { item.quantity * item.price } </p>
                                    <QuantityOptions item={ item }/>
                                </div>
                                <button className='cartDeleteButton' onClick={() => removeFromCart(item.id)}>
                                    <img width={20} src={deleteIcon} alt="Delete icon" />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div id="receipt">
                <b><p>Precio Total</p></b>
                <h3>S/. { String((totalPrice).toFixed(2)) }</h3>
            </div>
        </div>
    )
}

export default GridSummary