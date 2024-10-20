import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import RouterGuard from './RouterGuard'
import Loading from '@components/loading/Loading'

const Login = lazy(async () => await import('../pages/login/Login'))
// const Home = lazy(async () => await import('../pages/home/Home'))
const Products = lazy(async () => await import('../pages/products/Products'))
const SingleProduct = lazy(async () => await import('../pages/singleProduct/SingleProduct'))
const CartSummary = lazy(async () => await import('../pages/summary/CartSummary'))

const AppRouter = (): React.JSX.Element => {
    return (
        <Suspense fallback={ <Loading /> }>
            <Routes>
                <Route element={<RouterGuard />}>
                    <Route index element={<Products />} />
                    <Route path='/products/:id' element={<SingleProduct />} />
                    <Route path='/summary' element={<CartSummary />} />
                </Route>

                {/* <Route index element={<Home />} /> */}
                <Route path='/login' element={<Login />} />
            </Routes>
        </Suspense>
    )
}

export default AppRouter
