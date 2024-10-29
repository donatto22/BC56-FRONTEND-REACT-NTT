import { lazy, Suspense } from "react"
const ProductCard = lazy(async () => await import('@components/productCard/ProductCard'))

import Loading from "@components/loading/Loading"
import './productsGrid.css'

import usePagination from "@hooks/usePagination"
import { Product } from "@declarations/Product"

import lefTIcon from '@icons/left-icon.svg'
import rightIcon from '@icons/right-icon.svg'

const ProductsGrid = ({ products = [] }: { products: Product[] }) => {
    const { currentItems, totalPages, currentPage, goToPage } = usePagination(products, 7);

    return (
        <>
            <div id="pagination">
                <span>Total: { totalPages }</span>
                <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                    <img width={20} src={ lefTIcon } alt="Left icon" />
                </button>
                <span>{ currentPage }</span>
                <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
                    <img width={20} src={ rightIcon } alt="Right icon" />
                </button>
            </div>
            
            <section id="products">
                <Suspense fallback={<Loading height="50vh" />}>
                    {currentItems.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </Suspense>
            </section>
        </>
    )
}

export default ProductsGrid