import { lazy, Suspense } from "react"
const ProductCard = lazy(async () => await import('../ProductCard'))

import { Product } from "@types/Product"
import Loading from "@components/loading/Loading"

import './productsGrid.css'

const ProductsGrid = ({ products }: { products: Product[] }) => {
    return (
        <section id="products">
            <Suspense fallback={ <Loading height='50vh'/> }>
                {
                    products.map(p => (
                        <ProductCard key={p.id} productName={p.title} price={p.price} imgUrl={p.thumbnail} description={p.description} />
                    ))
                }
            </Suspense>
        </section>
    )
}

export default ProductsGrid