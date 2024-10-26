import { lazy, Suspense } from "react"
const ProductCard = lazy(async () => await import('@components/productCard/ProductCard'))

import Loading from "@components/loading/Loading"

import './productsGrid.css'
import { Product } from "@declarations/Product"

const ProductsGrid = ({ products = [] }: { products: Product[] }) => {
    return (
        <section id="products">
            <Suspense fallback={ <Loading height='50vh'/> }>
                {
                    products.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))
                }
            </Suspense>
        </section>
    )
}

export default ProductsGrid