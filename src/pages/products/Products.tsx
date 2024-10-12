import ProductsLayout from "../../layout/ProductsLayout"
import './products.css'

const Products = () => {
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

                <section id="products"></section>
            </main>
        </ProductsLayout>
    )
}

export default Products