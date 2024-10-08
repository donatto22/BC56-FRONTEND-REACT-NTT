import { API_ENDPOINTS } from "../constants/apiEndpoints"
import useFetch from "@helpers/useFetch"

const { get } = useFetch()

const getProducts = async () => {
    const products = await get(API_ENDPOINTS.PRODUCTS)
    return { products }
}

const renderProducts = () => {

}

export {
    renderProducts
}