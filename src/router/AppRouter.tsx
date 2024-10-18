import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import RouterGuard from './RouterGuard'

const Login = lazy(async () => await import('../pages/login/Login'))
const Products = lazy(async () => await import('../pages/products/Products'))
const SingleProduct = lazy(async () => await import('../pages/singleProduct/SingleProduct'))
const CartSummary = lazy(async () => await import('../pages/summary/CartSummary'))

const AppRouter = (): React.JSX.Element => {
    return (
        <Routes>
            <Route element={ <RouterGuard /> }>
                <Route path='/products' element={ <Products /> } />
                <Route path='/products/:id' element={ <SingleProduct /> } />
                <Route path='/summary' element={ <CartSummary/> } />
            </Route>

            <Route path='/login' element={ <Login /> } />
        </Routes>
    )
}

export default AppRouter
