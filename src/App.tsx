import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router/AppRouter"
import { CartProvider } from "./context/CartContext"
import { UserProvider } from "@context/UserContext"

const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <UserProvider>
                    <AppRouter />
                </UserProvider>
            </BrowserRouter>
        </CartProvider>
    )
}

export default App
