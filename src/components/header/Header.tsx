import { ChangeEvent, Dispatch, SetStateAction, useRef } from 'react'
import { useLocation } from 'react-router-dom'

import './header.css'

import CartBar from '@components/cartBar/CartBar'

import User from './User'

import logo from '@images/logo.png'
import searchIcon from '@icons/search-outline.svg'
import cartIcon from '@icons/cart-outline.svg'
import { Product } from '@declarations/Product'
import useCart from '@hooks/useCart'

interface HeaderProps {
    products: Product[],
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}

const Header = ({ products, search, setSearch }: Partial<HeaderProps>): React.JSX.Element => {
    const location = useLocation()
    const cartBarRef = useRef(null)

    const { cartItems } = useCart()

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch && setSearch(e.target.value)
    }

    const toggleCart = () => {
        if(cartBarRef.current) {
            (cartBarRef.current as HTMLDivElement).classList.toggle('cartBar-open')
        }
    }

    return (
        <header>
            <nav>
                <ol>
                    <li>
                        <img id="logo" src={ logo } alt="lockerg store logo" width="30px" height="auto" />
                    </li>

                    {
                        location.pathname == '/' &&
                        <li id="search">
                            <form>
                                <input list="productsList" value={search} onChange={(e) => handleSearch(e)}
                                    type="text" name="buscador" id="buscador" placeholder="Camara, perfume" />

                                <datalist id="productsList">
                                    {
                                        products && products.map(p => (
                                            <option key={p.id} value={p.title}></option>
                                        ))
                                    }
                                </datalist>

                                <button type='button'>
                                    <img width="20px" src={searchIcon} alt="Search icon" />
                                </button>
                            </form>
                        </li>
                    }

                    {/* {
                        location.pathname == '/' &&
                        <li>
                            <button><Link to='/login'>Iniciar Sesión</Link></button>
                        </li>
                    } */}

                    <li>
                        <div id="cart-icon" onClick={ toggleCart }>
                            <img src={cartIcon} alt="Shopping Cart Icon" width="28px" height="auto" />
                            <p> { cartItems.reduce((total, item) => total + item.quantity, 0) } </p>
                        </div>
                        <User />
                    </li>

                    <CartBar reference={ cartBarRef } onClick={ toggleCart }/>
                </ol>
            </nav>
        </header>
    )
}

export default Header