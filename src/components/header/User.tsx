import { useRef } from "react"
import useDummyjson from "@hooks/useDummyjson"

import userIcon from '@icons/person-outline.svg'

const User = () => {
    const { logout } = useDummyjson()

    const userOptionsRef = useRef(null)

    const toggleUserOptionsVisibility = () => {
        if (userOptionsRef.current) {
            (userOptionsRef.current as HTMLElement).classList.toggle('options-open')
        }
    }
    
    return (
        <div id="user" onClick={toggleUserOptionsVisibility}>
            <img src={ userIcon } alt="User" width='24px' />
            <div id='user-options' ref={userOptionsRef}>
                <div onClick={logout}>Cerrar Sesión</div>
            </div>
        </div>
    )
}

export default User