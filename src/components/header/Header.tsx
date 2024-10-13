import { Product } from '@types/Product'
import './header.css'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface Header {
    products: Product[],
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}

const Header = ({ products, search, setSearch }: Header): React.JSX.Element => {
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    return (
        <header>
            <nav>
                <ol>
                    <li>
                        <img id="logo" src="./src/assets/images/logo.png" alt="lockerg store logo" width="30px" height="auto" />
                    </li>

                    <li id="search">
                        <form>
                            <input list="productsList" value={search} onChange={(e) => handleSearch(e)}
                            type="text" name="buscador" id="buscador" placeholder="Camara, perfume" />

                                <datalist id="productsList">
                                    {
                                        products.map(p => (
                                            <option key={p.id} value={p.title}></option>
                                        ))
                                    }
                                </datalist>

                                <button type="submit">
                                    <img width="20px" src="./src/assets/icons/search-outline.svg" alt="Search icon"/>
                                </button>
                        </form>
                    </li>

                    <li id="cart">
                        <div id="cart-icon" >
                            <img src="./src/assets/icons/cart-outline.svg" alt="Shopping Cart Icon" width="30px" height="auto" />
                                <p>0</p>
                        </div>

                        <button id="cart-option">
                            <img src="./src/assets/icons/trash-outline.svg" alt="Delete icon" />
                                Vaciar Carrito
                        </button>
                    </li>
                </ol>
            </nav>
        </header>
    )
}

export default Header