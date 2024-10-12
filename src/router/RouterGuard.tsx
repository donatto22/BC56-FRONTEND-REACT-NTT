import { Navigate, Outlet } from "react-router-dom"

import useLocalStorage from "../hooks/useLocalStorage"

const RouterGuard = (): React.JSX.Element => {
    const { getItem } = useLocalStorage()
    const token = getItem('token')

    return (
        token ? <Outlet /> : <Navigate to='/login'/>
    )
}

export default RouterGuard