import { useContext, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import { Paths } from "@declarations/Paths"
import useSessionStorage from "@hooks/useSessionStorage"
import RecoverPasswordModal from "@components/RecoverPassword/RecoverPasword"
import { UserContext } from "@context/UserContext"
import { toast } from "sonner"
import { ErrorMessages } from "@declarations/ErrorMessages"

const LoginForm = (): React.JSX.Element => {
    const [recoverPasswordModal, setRecoverPasswordModal] = useState<boolean>(false)
    const userContext = useContext(UserContext)
    const formRef = useRef(null)
    const navigator = useNavigate()
    const { setItem } = useSessionStorage()

    if (!userContext) {
        toast.error(ErrorMessages.CONTEXT_ERROR)
        throw new Error(ErrorMessages.CONTEXT_ERROR)
    }

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(formRef.current) {
            const form = new FormData(formRef.current)

            const formObject = Object.fromEntries(form.entries())

            await userContext.login(formObject)
            
            userContext.session && setItem('token', userContext.session.accessToken as string)

            navigator(Paths.products)
        }
    }

    return (
        <>
        { recoverPasswordModal && <RecoverPasswordModal setModal={ setRecoverPasswordModal } /> }
        <form ref={formRef} onSubmit={ handleLogin }>
            <div className="inputGroup">
                <input required type="text" id="username" name="username" placeholder="Usuario" />
            </div>

            <div className="inputGroup">
                <input required type="password" id="password" name="password" placeholder="Contraseña" />
            </div>
            
            <span id="forgotPassword" onClick={ () => setRecoverPasswordModal(prev => !prev)}>Olvidé mi contraseña</span>

            <input id="submit" type="submit" value="Ingresar" />
        </form>
        </>
    )
}

export default LoginForm