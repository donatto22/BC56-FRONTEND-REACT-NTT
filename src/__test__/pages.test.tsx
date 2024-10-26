import Login from "@pages/login/Login"
import { render } from "./utils/render"
import Products from "@pages/products/Products"
import SingleProduct from "@pages/singleProduct/SingleProduct"
import CartSummary from "@pages/summary/CartSummary"

describe('Verificar que todas las paginas carguen', () => {
    beforeEach(() => {
        const MOCK_DATA = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "slug": "Bret",
            "email": "Sincere@april.biz"
        }
        
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true, 
                status: 200,
                json: () => Promise.resolve([MOCK_DATA]),
                headers: {
                    get: () => null
                },
            })
        )
    })

    render('Pagina del login', <Login />)
    render('Pagina de productos', <Products />)
    render('Pagina de un solo producto seleccionado', <SingleProduct />)
    render('Pagina del carrito con los productos', <CartSummary />)
})