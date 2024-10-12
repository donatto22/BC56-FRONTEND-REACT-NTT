import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import RouterGuard from './RouterGuard'

const Login = lazy(async () => await import('../pages/login/Login'))
const Products = lazy(async () => await import('../pages/Products'))

const AppRouter = (): React.JSX.Element => {
    return (
        <Routes>
            <Route element={ <RouterGuard /> }>
                <Route index element={ <Products /> } />
            </Route>

            <Route path='/login' element={ <Login /> } />
        </Routes>
    )
}

export default AppRouter
