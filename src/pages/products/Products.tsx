import useDummyjson from "@hooks/useDummyjson"
import ProductsLayout from "../../layout/ProductsLayout"
import './products.css'
import { ReactEventHandler, useEffect, useRef, useState } from "react"
import { Product } from "@types/Product"
import ProductCard from "./ProductCard"
import { Category } from "@types/Category"

const Products = () => {
    const { getProducts, getCategories, getProductsByCategory } = useDummyjson()

    const [products, setProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<Category[]>([])

    const categoriesRef = useRef(null)
    const categoryInputRef = useRef(null)

    const fillProducts  = async () => {
        const data = await getProducts()
        setProducts(data.products)
    }

    const fillCategories = async () => {
        const data = await getCategories()
        setCategories(data)
    }

    const changeCategory = async (e) => {
        if(categoryInputRef.current) {
            (categoryInputRef.current as Node).textContent = (e.target as Node).textContent
        }

        const data = await getProductsByCategory(e.target.id)
        setProducts(data.products)

        toggleCategoriesVisibility()
    }

    const toggleCategoriesVisibility = () => {
        if(categoriesRef.current) {
            (categoriesRef.current as HTMLElement).classList.toggle('cat-open')
        }
    }

    useEffect(() => {
        fillProducts()
        fillCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ProductsLayout>
            <main>
                <section id="filters">
                    <div id="category">
                        <div id="input" onClick={ toggleCategoriesVisibility }>
                            <p ref={ categoryInputRef }>Filtrar por categoría </p>
                            <img src="./src/assets/icons/down.svg" alt="Arrow down" />
                        </div>

                        <div id="categories" ref={categoriesRef}>
                            {
                                categories.map(c => (
                                    <div id={c.slug} className="cat" key={c.slug} onClick={ (e) => changeCategory(e) }>
                                        { c.name }
                                    </div>
                                ))
                            }
                        </div>
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