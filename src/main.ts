import { render } from "@helpers/render"
import { renderProducts } from "./utils/products"

const app = document.getElementById('app')

if(!app) throw new Error('No existe el div con id app')

render(app)
