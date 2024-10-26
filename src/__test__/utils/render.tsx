import { CartProvider } from "@context/CartContext"
import { act, render as reactRender } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

export const render = (description: string, component: React.JSX.Element) => {
    it(description, async () => {
        await act(async () => {
            const { container } = reactRender(
                <CartProvider>
                    <MemoryRouter>
                        {component}
                    </MemoryRouter>
                </CartProvider>
            )
            expect(container).toBeInTheDocument()
        })
    })
}