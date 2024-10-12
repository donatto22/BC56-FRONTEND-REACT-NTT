import ProductCard from "../ProductCard"
import { Product } from "@types/Product"

const ProductsGrid = ({ products }: { products: Product[] }) => {
    return (
        <section id="products">
            {
                products.map(p => (
                    <ProductCard key={p.id} productName={p.title} price={p.price} imgUrl={p.thumbnail} description={p.description} />
                ))
            }
        </section>
    )
}

export default ProductsGrid