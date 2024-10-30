import { MemoryRouter } from "react-router-dom"
import { act, render as reactRender } from "@testing-library/react"
import { CartProvider } from "@context/CartContext"
import { UserProvider } from "@context/UserContext"

export const render = (description: string, component: React.JSX.Element) => {
    it(description, async () => {
        await act(async () => {
            const { container } = reactRender(
                <MemoryRouter>
                    <CartProvider>
                        <UserProvider>
                            {component}
                        </UserProvider>
                    </CartProvider>
                </MemoryRouter>
            )
            expect(container).toBeInTheDocument()
        })
    })
}