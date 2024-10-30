import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import RouterGuard from './RouterGuard'
import Loading from '@components/loading/Loading'

const Login = lazy(async () => await import('../pages/login/Login'))
// const Home = lazy(async () => await import('../pages/home/Home'))
const Products = lazy(async () => await import('../pages/products/Products'))
const SingleProduct = lazy(async () => await import('../pages/singleProduct/SingleProduct'))
const CartSummary = lazy(async () => await import('../pages/summary/CartSummary'))

const GuardProducts = <RouterGuard WrappedComponent={ <Products/> } />
const GuardCartSummary = <RouterGuard WrappedComponent={ <CartSummary/> } />
const GuardSingleProduct = <RouterGuard WrappedComponent={ <SingleProduct/> } />

const AppRouter = (): React.JSX.Element => {
    return (
        <Suspense fallback={ <Loading /> }>
            <Toaster richColors />
            <Routes>
                <Route path='/' element={ GuardProducts } />
                <Route path='/products/:id' element={ GuardSingleProduct } />
                <Route path='/summary' element={ GuardCartSummary } />

                {/* <Route index element={<Home />} /> */}
                <Route path='/login' element={<Login />} />
            </Routes>
        </Suspense>
    )
}

export default AppRouter
