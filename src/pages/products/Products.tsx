import { useEffect, useRef, useState } from "react"
import './products.css'

import useDummyjson from "@hooks/useDummyjson"

import ProductsGrid from "./productsGrid/ProductsGrid"
import Header from "@components/header/Header"
import Footer from "@components/footer/Footer"
import { Category } from "@declarations/Category"
import { Product } from "@declarations/Product"

const Products = () => {
    const { getProducts, getCategories, getProductsByCategory } = useDummyjson()

    const [categoryFilteredProducts, setCategoryFilteredProducts] = useState<Product[]>([])
    const [searchFilteredProducts, setSearchFilteredProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [search, setSearch] = useState<string>('')

    const categoriesRef = useRef(null)
    const categoryInputRef = useRef(null)

    const fillProducts = async () => {
        const data = await getProducts()
        setCategoryFilteredProducts(data.products)
        setSearchFilteredProducts(data.products)
    }

    const fillCategories = async () => {
        const data = await getCategories()
        setCategories(data)
    }

    const changeCategory = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (categoryInputRef.current) {
            (categoryInputRef.current as Node).textContent = (e.target as Node).textContent
        }

        const data = await getProductsByCategory((e.target as HTMLElement).id)
        setCategoryFilteredProducts(data.products)
        setSearchFilteredProducts(data.products)
        toggleCategoriesVisibility()
    }

    const toggleCategoriesVisibility = () => {
        if (categoriesRef.current) {
            (categoriesRef.current as HTMLElement).classList.toggle('cat-open')
        }
    }

    useEffect(() => {
        fillProducts()
        fillCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    const filterProducts = () => {
        if (!Array.isArray(categoryFilteredProducts)) {
            setSearchFilteredProducts([])
            return
        }
    
        const filtered = categoryFilteredProducts.filter(p =>
            p.title.toLowerCase().includes(search.toLowerCase())
        )
    
        setSearchFilteredProducts(filtered)
    }

    useEffect(() => {
        filterProducts()
    }, [search, categoryFilteredProducts])

    return (
        <>
            <Header products={searchFilteredProducts} search={search} setSearch={setSearch} />

            <main>
                <section id="filters">
                    <div id="category">
                        <div id="input" onClick={ toggleCategoriesVisibility }>
                            <p ref={categoryInputRef}>Filtrar por categoría </p>
                            <img src="./src/assets/icons/down.svg" alt="Arrow down" />
                        </div>

                        <div id="categories" ref={categoriesRef}>
                            {
                                categories.map(c => (
                                    <div id={c.slug} className="cat" key={c.slug} onClick={(e) => changeCategory(e)}>
                                        {c.name}
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div id="productsCounter"></div>
                </section>

                {/* Muestra los productos filtrados por búsqueda */}
                <ProductsGrid products={searchFilteredProducts} />
            </main>

            <Footer />
        </>
    )
}

export default Products
