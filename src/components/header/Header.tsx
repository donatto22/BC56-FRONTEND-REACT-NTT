import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { Product } from '@types/Product'

import User from './User'
import './header.css'
import useLocalStorage from '@hooks/useLocalStorage'

interface HeaderProps {
    products: Product[],
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}

const Header = ({ products, search, setSearch }: HeaderProps): React.JSX.Element => {
    const [cartLocalCounter, setCartLocalCounter] = useState()
    const { getItem } = useLocalStorage()

    const cartCounter = useRef(null)

    useEffect(() => {
        const getCartCounter = () => {
            const counter = getItem('cartCounter')
            if(counter) {
                setCartLocalCounter(counter)
            }
        }

        getCartCounter()
    }, [])


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

                            <button type='button'>
                                <img width="20px" src="./src/assets/icons/search-outline.svg" alt="Search icon" />
                            </button>
                        </form>
                    </li>

                    <li>
                        <div id="cart-icon" ref={ cartCounter }>
                            <img src="./src/assets/icons/cart-outline.svg" alt="Shopping Cart Icon" width="30px" height="auto" />
                                <p> { getItem('cartCounter') } </p>
                        </div>

                        <User cartCounter={cartCounter} />
                    </li>
                </ol>
            </nav>
        </header>
    )
}

export default Header