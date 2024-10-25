import { useNavigate } from "react-router-dom"
import { Product } from "@declarations/Product"
import useCart from "@hooks/useCart"

const ProductCard = ({ product }: Partial<{ product: Product }>): React.JSX.Element => {
    const navigate = useNavigate()

    const { addToCart } = useCart()

    const handleAddToCart = (productSelected: Product) => {
        // const cartCounter = getItem('cartCounter')

        // if(!cartCounter) setItem('cartCounter', '1')
        //     else setItem('cartCounter', String(Number(cartCounter) + 1))

        // const cartIcon = document.getElementById('cart-icon')
        // if(cartIcon) {
        //     const p = cartIcon.getElementsByTagName('p')[0]
        //     p.textContent = String(Number(cartCounter) + 1)
        // }

        addToCart(productSelected)
    }

    return (
        <article className="product-card">
            {
                product && 
                <>
                    <header onClick={() => navigate(`/products/${product.id}`)}>
                        <img src={product.thumbnail} alt={product.title} loading="lazy" />
                    </header>
                    <main>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <div>{product.price}</div>
                        <button className="buy-button" onClick={() => handleAddToCart(product)}>Comprar</button>
                    </main>
                </>
            }
        </article>
    )
}

export default ProductCard