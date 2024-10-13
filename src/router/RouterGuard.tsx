import { Navigate, Outlet } from 'react-router-dom'

import useLocalStorage from '../hooks/useLocalStorage'
import { Suspense } from 'react'
import Loading from '@components/loading/Loading'

const RouterGuard = (): React.JSX.Element => {
    const { getItem } = useLocalStorage()
    const token = getItem('token')

    return (
        token ? <Suspense fallback={ <Loading/> }><Outlet /></Suspense> : <Navigate to='/login'/>
    )
}

export default RouterGuard