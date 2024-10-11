import { Navigate, Outlet } from "react-router-dom"

import useLocalStorage from "../hooks/useLocalStorage"
import { ErrorMessages } from "../types/ErrorMessages"

const RouterGuard = () => {
    const { getItem } = useLocalStorage()
    const token = getItem('token')

    if(!token) throw new Error(ErrorMessages.NO_TOKEN)

    return (
        getItem(token) ? <Outlet /> : <Navigate to='/login'/>
    )
}

export default RouterGuard