// Footer.test.tsx
import '@testing-library/jest-dom'

import { render, act } from '@testing-library/react'

import Footer from '@components/footer/Footer'
import Header from '@components/header/Header'
import { MemoryRouter } from 'react-router-dom'
import { CartProvider } from '@context/CartContext'

const renderComponent = (description: string, component: React.JSX.Element) => {
    it(description, async() => {
        await act(async () => {
            const { container } = render(
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


describe('Ver si los componentes pueden ser mostrados en pantalla', () => {
    renderComponent('Debe mostrar el header', <Header />)
    renderComponent('Debe mostrar el footer', <Footer />)
})
