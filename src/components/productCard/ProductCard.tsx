import useLocalStorage from "@hooks/useLocalStorage"
import { useNavigate } from "react-router-dom"

interface ProductCard {
    id: number
    imgUrl: string
    productName: string
    description: string
    price: number
}

const ProductCard = ({ id, imgUrl, productName, price, description }: Required<ProductCard>): React.JSX.Element => {
    const { setItem, getItem } = useLocalStorage()
    const navigate = useNavigate()

    const addToCart = () => {
        const cartCounter = getItem('cartCounter')

        if(!cartCounter) setItem('cartCounter', '1')
            else setItem('cartCounter', String(Number(cartCounter) + 1))

        const cartIcon = document.getElementById('cart-icon')
        if(cartIcon) {
            const p = cartIcon.getElementsByTagName('p')[0]
            p.textContent = String(Number(cartCounter) + 1)
        }
    }

    return (
        <article className="product-card">
            <header onClick={ () => navigate(`/products/${id}`) }>
                <img src={ imgUrl } alt={ productName } loading="lazy" />
            </header>

            <main>
                <h3>{ productName }</h3>
                <p>{ description }</p>
                <div>{ price }</div>
                <button className="buy-button" onClick={ addToCart }>Comprar</button>
            </main>
        </article>
    )
}

export default ProductCard