import { useContext, useRef } from "react"
import { UserContext } from "@context/UserContext"
import { toast } from "sonner"

import { ErrorMessages } from "@declarations/ErrorMessages"
import userIcon from '@icons/person-outline.svg'
import { Paths } from "@declarations/Paths"
import { useNavigate } from "react-router-dom"

const User = () => {
    const userContext = useContext(UserContext)
    const userOptionsRef = useRef(null)
    const navigate = useNavigate()

    const toggleUserOptionsVisibility = () => {
        if (userOptionsRef.current) {
            (userOptionsRef.current as HTMLElement).classList.toggle('options-open')
        }
    }

    if (!userContext) {
        toast.error(ErrorMessages.CONTEXT_ERROR)
        throw new Error(ErrorMessages.CONTEXT_ERROR)
    }

    const handleLogout = () => {
        userContext.logout()
        navigate(Paths.login)
    }
    
    return (
        <div id="user" onClick={ toggleUserOptionsVisibility }>
            <img src={ userIcon } alt="User" width='24px' />
            <div id='user-options' ref={userOptionsRef}>
                <div onClick={ handleLogout }>Cerrar Sesión</div>
            </div>
        </div>
    )
}

export default User