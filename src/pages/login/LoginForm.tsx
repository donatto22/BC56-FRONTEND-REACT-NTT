
import { useRef } from "react"

import useLocalStorage from "@hooks/useLocalStorage"
import { useNavigate } from "react-router-dom"
import useDummyjson from "@hooks/useDummyjson"

const LoginForm = (): React.JSX.Element => {
    const formRef = useRef(null)
    const navigator = useNavigate()

    const { login } = useDummyjson()
    const { setItem } = useLocalStorage()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(formRef.current) {
            const form = new FormData(formRef.current)

            const formObject = Object.fromEntries(form.entries())

            const { session } = await login(formObject)
            
            setItem('token', session.accessToken)
            navigator('/')
        }
    }

    return (
        <form action="" ref={formRef} onSubmit={ handleLogin }>
            <div className="inputGroup">
                <input required type="text" id="username" name="username" placeholder="Usuario" />
            </div>

            <div className="inputGroup">
                <input required type="password" id="password" name="password" placeholder="Contraseña" />
            </div>

            <input id="submit" type="submit" value="Ingresar" />
        </form>
    )
}

export default LoginForm