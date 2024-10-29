import { Dispatch, SetStateAction, useState } from 'react'
import './recoverPassword.css'

import { useForm } from 'react-hook-form'
import closeIcon from '@icons/close-outline.svg'
import { toast } from 'sonner'

const RecoverPasswordModal = ({ setModal }: { setModal: Dispatch<SetStateAction<boolean>> }) => {
    const [sendEmail, setSendEmail] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = handleSubmit((data) => {
        console.log(data)

        if(sendEmail === false) {
            toast.success('Se envió un correo para la recuperación de contraseña a ' + data.correo)
            setSendEmail(true)
        } else toast.error('Ya se ha enviado un correo a ' + data.correo)
    })

    return (
        <div id="recoverPasswordModal">
            <div id="close" onClick={ () => setModal(prev => !prev) }>
                <img src={ closeIcon } alt="Close icon" width={30} />
            </div>

            <div id="modal">
                <h3>Recuperar contraseña</h3>

                <form onSubmit={ onSubmit }>
                    <div> { errors.correo && errors.correo.message as string } </div>
                    <input type='email' placeholder='Ingresa tu correo' { ...register('correo', {
                        required: {
                            value: true,
                            message: 'Correo es requerido'
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-z]/,
                            message: 'El correo no es válido'
                        }
                    }) } />

                    <div id="actionButtons">
                        <button type='submit'>Enviar</button>
                        <button type='button' onClick={ () => setModal(prev => !prev) }>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RecoverPasswordModal
