import { Suspense } from 'react'
import { Navigate } from 'react-router-dom'

import Loading from '@components/loading/Loading'
import useSessionStorage from '@hooks/useSessionStorage'

const RouterGuard = ({ WrappedComponent }: { WrappedComponent: React.JSX.Element }) => {
    const { getItem } = useSessionStorage()
    const token = getItem('token')

    return (
        token ? 
        <Suspense fallback={<Loading />}>
            { WrappedComponent }
        </Suspense> : 
        <Navigate to='/login' replace />
    )
}

export default RouterGuard