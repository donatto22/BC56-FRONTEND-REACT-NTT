// Footer.test.tsx
import '@testing-library/jest-dom'

import { MemoryRouter } from 'react-router-dom'
import { render, act } from '@testing-library/react'
import { CartProvider } from '@context/CartContext'

import Footer from '@components/footer/Footer'
import Header from '@components/header/Header'
import Dropdown from '@components/dropdown/Dropdown'
import Loading from '@components/loading/Loading'
import BuyForm from '@components/buyForm/BuyForm'
import CartBar from '@components/cartBar/CartBar'
import Modal from '@components/modal/Modal'
import ProductCard from '@components/productCard/ProductCard'
import QuantityOptions from '@components/QuantityOptions/QuantityOptions'

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


describe('Ver si los componentes pueden ser mostrados en pantalla con las importaciones correctas y bien tipados', () => {
    renderComponent('Debe mostrar el header', <Header />)
    renderComponent('Debe mostrar el footer', <Footer />)
    renderComponent('Debe mostrar los dropdown', <Dropdown />)
    renderComponent('Debe mostrar el loading', <Loading />)
    renderComponent('Debe mostrar el Formulario de compra', <BuyForm />)
    renderComponent('Debe mostrar el SideBar del carrito', <CartBar />)
    renderComponent('Debe mostrar el Modal', <Modal />)
    renderComponent('Debe mostrar el Card del Producto', <ProductCard />)
    renderComponent('Debe mostrar el Card del Producto', <QuantityOptions />)
})
