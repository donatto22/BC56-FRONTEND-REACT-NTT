import { useRef } from "react"
import useDummyjson from "@hooks/useDummyjson"
import useLocalStorage from "@hooks/useLocalStorage"

import userIcon from '@icons/person-outline.svg'

const User = ({ cartCounter }: { cartCounter: React.RefObject<HTMLDivElement> }) => {
    const { logout } = useDummyjson()
    const { removeItem } = useLocalStorage()

    const userOptionsRef = useRef(null)

    const clearCart = () => {
        removeItem('cartCounter')

        let counter = null

        if (cartCounter.current) {
            counter = (cartCounter.current as HTMLElement).getElementsByTagName('p')[0]
            console.log(counter)
        }

        if (counter) {
            counter.textContent = ''
        }
    }

    const toggleUserOptionsVisibility = () => {
        if (userOptionsRef.current) {
            (userOptionsRef.current as HTMLElement).classList.toggle('options-open')
        }
    }
    
    return (
        <div id="user" onClick={toggleUserOptionsVisibility}>
            <img src={ userIcon } alt="User" width='24px' />
            <div id='user-options' ref={userOptionsRef}>
                <div onClick={clearCart}>Vaciar Carrito</div>
                <div onClick={logout}>Cerrar Sesión</div>
            </div>
        </div>
    )
}

export default User