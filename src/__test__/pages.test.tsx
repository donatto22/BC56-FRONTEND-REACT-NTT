import Products from "@pages/products/Products"
import { render } from "./utils/render"

describe('Verificar que todas las paginas carguen', () => {
    beforeEach(() => {
        const MOCK_DATA = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "slug": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        };
        
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
    

    render('Pagina de productos', <Products />)
})