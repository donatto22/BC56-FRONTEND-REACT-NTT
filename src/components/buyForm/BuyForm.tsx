import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './buyForm.css'

import Dropdown from '@components/dropdown/Dropdown'

import useCart from '@hooks/useCart'
import Modal from '@components/modal/Modal'
import { onlyLetters, validateAddress, peruvianPhone } from '@utils/validateRegex'

import warningIcon from '@icons/warning-icon.webp'
import successIcon from '@icons/success-icon.png'

const BuyForm = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const errorModalRef = useRef<HTMLDivElement>(null)
    const successModalRef = useRef<HTMLDivElement>(null)

    const { clearCart } = useCart()
    const navigate = useNavigate()

    const buyForm = (e: React.FormEvent) => {
        e.preventDefault()

        if(formRef.current) {
            const formData = new FormData(formRef.current)

            const data = Object.fromEntries(formData.entries())

            if(data.address == '' || data.name == '' || data.lastname == '' 
                || data.phone == '' || data.reference == '') {
                toggleModal(errorModalRef)
            } else {
                toggleModal(successModalRef)
            }
        }
    }

    const toggleModal = (ref: React.RefObject<HTMLElement>) => {
        if(ref.current) {
            ref.current.classList.toggle('showModal')
        }
    }

    const successProcess = () => {
        clearCart()
        navigate('/')
    }

    return (
        <div id="buyForm">
            <Modal reference={ errorModalRef } imageSrc={ warningIcon } title='Por favor complete los campos' onClick={ () => toggleModal(errorModalRef) }/>
            <Modal reference={ successModalRef } imageSrc={ successIcon } title='Compra exitosa' onClick={ () => {
                toggleModal(successModalRef)
                successProcess()
            } }/>

            <form onSubmit={ buyForm } ref={ formRef }>
                <div className="formGroup">
                    <div className="buyFormGroup">
                        <label>Nombres</label>
                        <input required onChange={ (e) => onlyLetters(e) } maxLength={40} type="text" name='name' placeholder='Ingresa tus nombres' />
                    </div>

                    <div className="buyFormGroup">
                        <label>Apellidos</label>
                        <input required onChange={ (e) => onlyLetters(e) } maxLength={40} type="text" name='lastname' placeholder='Ingresa tus Apellidos' />
                    </div>
                </div>

                <div className="buyFormGroup">
                    <label>Distrito</label>
                    <Dropdown/>
                </div>

                <div className="buyFormGroup">
                    <label>Dirección</label>
                    <input required onChange={ (e) => validateAddress(e) } maxLength={50} type="text" name='address' placeholder='Ingresa tus nombres' />
                </div>

                <div className="buyFormGroup">
                    <label>Refencia</label>
                    <input required onChange={ (e) => validateAddress(e) } type="text" name='reference' placeholder='Ingresa una referencia' />
                </div>

                <div className="buyFormGroup">
                    <label>Celular <i>Solo numeros y Comienza por 9</i></label>
                    <input required onChange={ (e) => peruvianPhone(e) } type="text" name='phone' placeholder='Ingresa tus nombres' />
                </div>

                <div className="buyFormGroup">
                    <button id='buyFormButton'>Comprar</button>
                </div>
            </form>
        </div>
    )
}

export default BuyForm