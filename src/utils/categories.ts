import { API_ENDPOINTS } from "../constants/apiEndpoints"
import useFetch from "../helpers/useFetch"

const { get } = useFetch()

const getCategories = async () => {
    const categories = await get(API_ENDPOINTS.CATEGORIES)
    return { categories }
}

const renderCategories = () => {

}

export {
    renderCategories
}