import './modal.css'

interface ModalProps {
    reference: React.RefObject<HTMLDivElement>
    imageSrc: string
    onClick: () => void
    title: string
}

const Modal = ({ reference, imageSrc, onClick, title }: Partial<ModalProps>) => {
    return (
        <div id="modal" ref={ reference }>
            <div id="modalContainer">
                <img width={80} src={imageSrc} alt="warning icon" />
                <div>{ title }</div>
                <button id='modalButton' onClick={onClick}>Aceptar</button>
            </div>
        </div>
    )
}

export default Modal