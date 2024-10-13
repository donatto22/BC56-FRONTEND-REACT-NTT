import { Product } from '@types/Product'
import './header.css'
import { ChangeEvent, Dispatch, SetStateAction, useRef } from 'react'
import useDummyjson from '@hooks/useDummyjson'

interface Header {
    products: Product[],
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}

const Header = ({ products, search, setSearch }: Header): React.JSX.Element => {
    const userOptionsRef = useRef(null)
    const { logout } = useDummyjson()

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const toggleUserOptionsVisibility = () => {
        if (userOptionsRef.current) {
            (userOptionsRef.current as HTMLElement).classList.toggle('options-open')
        }
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
                                <img width="20px" src="./src/assets/icons/search-outline.svg" alt="Search icon" />
                            </button>
                        </form>
                    </li>

                    <li>
                        <div id="cart-icon" >
                            <img src="./src/assets/icons/cart-outline.svg" alt="Shopping Cart Icon" width="30px" height="auto" />
                                <p>0</p>
                        </div>

                        <div id="user" onClick={ toggleUserOptionsVisibility }>
                            <img src="./src/assets/icons/person-outline.svg" alt="User" width='24px' />
                            <div id='user-options' ref={userOptionsRef}>
                                <div>Vaciar Carrito</div>
                                <div onClick={ logout }>Cerrar Sesión</div>
                            </div>
                        </div>
                    </li>
                </ol>
            </nav>
        </header>
    )
}

export default Header