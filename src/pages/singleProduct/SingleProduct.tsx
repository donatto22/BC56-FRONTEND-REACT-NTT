import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import Footer from "@components/footer/Footer"
import Header from "@components/header/Header"

import './singleProduct.css'

import useDummyjson from "@hooks/useDummyjson"
import { useCart } from "@context/CartContext"

import bagIcon from '@icons/bag-outline.svg'
import bicycleIcon from '@icons/bicycle-outline.svg'
import { Product } from "@declarations/Product"

const SingleProduct = () => {
    const { id } = useParams()
    const { getProductById } = useDummyjson()
    const { addToCart } = useCart()

    const [product, setProduct] = useState<Product>()

    const getProduct = async () => {
        if(id) {
            const product = await getProductById(id)
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
                    <p><Link to='/'>Productos</Link> &gt; { product.title }</p>
                    <div id="min-container">
                        <div id="product-image">
                            <img src={product.thumbnail} alt={product.title} loading="lazy" />
                        </div>

                        <div id="product-description">
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>

                            <button onClick={ () => addToCart(product) }>Comprar</button>

                            <div id="tags">
                                <div className="information-tag">
                                    <img src={bagIcon} alt="Warranty icon" width={30} />
                                    <p> { product.warrantyInformation } </p>
                                </div>

                                <div className="information-tag">
                                    <img src={bicycleIcon} alt="Shipping icon" width={30} />
                                    <p> { product.shippingInformation } </p>
                                </div>
                            </div>
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
