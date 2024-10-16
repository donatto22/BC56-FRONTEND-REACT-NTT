import Footer from "@components/footer/Footer"
import Header from "@components/header/Header"

import './singleProduct.css'
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import useDummyjson from "@hooks/useDummyjson"
import { Product } from "@types/Product"

const SingleProduct = () => {
    const { id } = useParams()
    const { getProductById } = useDummyjson()

    const [product, setProduct] = useState<Product>()

    const getProduct = async () => {
        if(id) {
            const { product } = await getProductById(id)
            setProduct(product)
        }
    }

    
    useEffect(() => {
        getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Header />
            {
                product &&
                <>
                <div id="container">
                    <p><Link to='/products'>Productos</Link> &gt; { product.title }</p>
                    <div id="min-container">
                        <div id="product-image">
                            <img src={product.thumbnail} alt={product.title} />
                        </div>

                        <div id="product-description">
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>

                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
                </>
            }
            <Footer />
        </>
    )
}

export default SingleProduct