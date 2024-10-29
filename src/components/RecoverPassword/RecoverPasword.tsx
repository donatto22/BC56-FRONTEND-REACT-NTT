import { Dispatch, SetStateAction } from 'react'
import './recoverPassword.css'

import { useForm } from 'react-hook-form'
import closeIcon from '@icons/close-outline.svg'

const RecoverPasswordModal = ({ setModal }: { setModal: Dispatch<SetStateAction<boolean>> }) => {
    const { register, handleSubmit } = useForm()

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <div id="recoverPasswordModal">
            <div id="close" onClick={ () => setModal(prev => !prev) }>
                <img src={ closeIcon } alt="Close icon" width={30} />
            </div>

            <div id="modal">
                <h3>Recuperar contraseña</h3>

                <form onSubmit={ onSubmit }>
                    <input type='email' placeholder='Ingresa tu correo' { ...register('correo') } />

                    <div id="actionButtons">
                        <button type='submit'>Enviar</button>
                        <button onClick={ () => setModal(prev => !prev) }>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RecoverPasswordModal
