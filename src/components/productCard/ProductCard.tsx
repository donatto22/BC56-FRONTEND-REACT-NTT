import useLocalStorage from "@hooks/useLocalStorage"

interface ProductCard {
  imgUrl: string
  productName: string
  description: string
  price: number
}

const ProductCard = ({ imgUrl, productName, price, description }: Required<ProductCard>): React.JSX.Element => {
    const { setItem, getItem } = useLocalStorage()

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
            <header>
                <img src={imgUrl} alt={productName} loading="lazy" />
            </header>

            <main>
                <h3>{productName}</h3>
                <p> {description} </p>
                <div> {price} </div>
                <button className="buy-button" onClick={ addToCart }>Comprar</button>
            </main>
        </article>
    )
}

export default ProductCard