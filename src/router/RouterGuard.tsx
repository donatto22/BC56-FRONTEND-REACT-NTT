import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import Loading from '@components/loading/Loading'
import useLocalStorage from '../hooks/useLocalStorage'

const RouterGuard = (): React.JSX.Element => {
    const { getItem } = useLocalStorage()
    const token = getItem('token')

    return (
        token ? 
        <Suspense fallback={ <Loading/> }>
            <Outlet />
        </Suspense> : 
        <Navigate to='/login'/>
    )
}

export default RouterGuard