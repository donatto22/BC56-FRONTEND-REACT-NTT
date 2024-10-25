import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router/AppRouter"
import { CartProvider } from "./context/CartContext"

const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </CartProvider>
    )
}

export default App
