import useDummyjson from "@hooks/useDummyjson"
import ProductsLayout from "../../layout/ProductsLayout"
import './products.css'
import { useEffect, useState } from "react"
import { Product } from "@types/Product"
import ProductCard from "./ProductCard"

const Products = () => {
    const { getProducts, getCategories } = useDummyjson()

    const [products, setProducts] = useState<Product[]>([])

    const fillProducts  = async () => {
        const data = await getProducts()
        setProducts(data.products)
    }

    useEffect(() => {
        fillProducts()
    })

    return (
        <ProductsLayout>
            <main>
                <section id="filters">
                    <div id="category">
                        <div id="input">
                            <p>Filtrar por categoría </p>
                            <img src="./src/assets/icons/down.svg" alt="Arrow down" />
                        </div>

                        <div id="categories"></div>
                    </div>

                    <div id="productsCounter"></div>
                </section>

                <section id="products">
                    {
                        products.map(p => (
                            <ProductCard key={p.id} productName={p.title} price={p.price} imgUrl={p.thumbnail} description={p.description} />
                        ))
                    }
                </section>
            </main>
        </ProductsLayout>
    )
}

export default Products