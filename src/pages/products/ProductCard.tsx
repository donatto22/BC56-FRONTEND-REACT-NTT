interface ProductCard {
    imgUrl: string
    productName: string
    description: string
    price: number
}

const ProductCard = ({ imgUrl, productName, price, description }: Required<ProductCard>): React.JSX.Element => {
  return (
    <article className="product-card">
      <header>
        <img src={imgUrl} alt={productName} />
      </header>

      <main>
        <h3>{ productName }</h3>
        <p> { description } </p>
        <div> { price } </div>
        <button className="buy-button">Comprar</button>
      </main>
    </article>
  )
}

export default ProductCard