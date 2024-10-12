
import { useRef } from "react"

import useFetch from "@hooks/useFetch"
import useLocalStorage from "@hooks/useLocalStorage"
import { ApiEndpoints } from "@types/ApiEndpoints"
import { DummyToken } from "@types/DummyToken"
import { useNavigate } from "react-router-dom"

const LoginForm = (): React.JSX.Element => {
    const formRef = useRef(null)
    const navigator = useNavigate()

    const { post } = useFetch()
    const { setItem } = useLocalStorage()

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(formRef.current) {
            const form = new FormData(formRef.current)

            const formObject = Object.fromEntries(form.entries())

            const token = await post(ApiEndpoints.LOGIN, formObject) as DummyToken
            
            setItem('token', token.accessToken)
            navigator('/')
        }
    }

    return (
        <form action="" ref={formRef} onSubmit={ login }>
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