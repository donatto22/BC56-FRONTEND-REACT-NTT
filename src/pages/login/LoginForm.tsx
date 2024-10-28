
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

import useDummyjson from "@hooks/useDummyjson"
import { Paths } from "@declarations/Paths"
import useSessionStorage from "@hooks/useSessionStorage"

const LoginForm = (): React.JSX.Element => {
    const formRef = useRef(null)
    const navigator = useNavigate()

    const { login } = useDummyjson()
    const { setItem } = useSessionStorage()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(formRef.current) {
            const form = new FormData(formRef.current)

            const formObject = Object.fromEntries(form.entries())

            const { session } = await login(formObject)
            
            navigator(Paths.products)
            setItem('token', session.accessToken)
        }
    }

    return (
        <form ref={formRef} onSubmit={ handleLogin }>
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