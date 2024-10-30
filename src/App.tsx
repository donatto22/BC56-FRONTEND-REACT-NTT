import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router/AppRouter"
import { CartProvider } from "./context/CartContext"
import { UserProvider } from "@context/UserContext"

const App = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <UserProvider>
                    <AppRouter />
                </UserProvider>
            </CartProvider>
        </BrowserRouter>
    )
}

export default App
