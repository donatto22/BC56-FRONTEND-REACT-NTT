import Footer from "@components/footer/Footer"
import Header from "@components/header/Header"
import { useCart } from "@context/CartContext"
import TableSummary from "./views/table/TableSummary"

const CartSummary = () => {
    const { cartItems, addToCart, clearCart } = useCart()

    return (
        <>
            <Header />

            <TableSummary cartItems={ cartItems } />

            <Footer />
        </>
    )
}

export default CartSummary
