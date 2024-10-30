import '@testing-library/jest-dom'

import { render } from '../utils/render'
import Footer from '@components/footer/Footer'
import Header from '@components/header/Header'
import Dropdown from '@components/dropdown/Dropdown'
import Loading from '@components/loading/Loading'
import BuyForm from '@components/buyForm/BuyForm'
import CartBar from '@components/cartBar/CartBar'
import Modal from '@components/modal/Modal'
import ProductCard from '@components/productCard/ProductCard'
import QuantityOptions from '@components/QuantityOptions/QuantityOptions'
import RecoverPasswordModal from '@components/RecoverPassword/RecoverPasword'

describe('Ver si los componentes pueden ser mostrados en pantalla con las importaciones correctas y bien tipados', () => {
    render('Debe mostrar el header', <Header />)
    render('Debe mostrar el footer', <Footer />)
    render('Debe mostrar los dropdown', <Dropdown />)
    render('Debe mostrar el loading', <Loading />)
    render('Debe mostrar el Formulario de compra', <BuyForm />)
    render('Debe mostrar el SideBar del carrito', <CartBar />)
    render('Debe mostrar el Modal', <Modal />)
    render('Debe mostrar el Card del Producto', <ProductCard />)
    render('Debe mostrar el Card del Producto', <QuantityOptions />)
    render('Debe mostrar el modal para recuperar contraseña', <RecoverPasswordModal />)
})
