import { useRef } from 'react'
import './buyForm.css'

const BuyForm = () => {
    const formRef = useRef<HTMLFormElement>(null)

    const buyForm = (e: React.FormEvent) => {
        e.preventDefault()

        if(formRef.current) {
            const formData = new FormData(formRef.current)

            const data = Object.fromEntries(formData.entries())
            console.log(data)
        }
    }

    return (
        <div id="buyForm">
            <form onSubmit={ buyForm } ref={ formRef }>
                <div className="buyFormGroup">
                    <label>Nombres</label>
                    <input type="text" name='name' placeholder='Ingresa tus nombres' />
                </div>

                <div className="buyFormGroup">
                    <label>Apellidos</label>
                    <input type="text" name='lastname' placeholder='Ingresa tus Apellidos' />
                </div>

                <div className="buyFormGroup">
                    <label>Distrito</label>
                    <input type="text" placeholder='Ingresa tus nombres' />
                </div>

                <div className="buyFormGroup">
                    <label>Dirección</label>
                    <input type="text" name='address' placeholder='Ingresa tus nombres' />
                </div>

                <div className="buyFormGroup">
                    <button id='buyFormButton' >Comprar</button>
                </div>
            </form>
        </div>
    )
}

export default BuyForm