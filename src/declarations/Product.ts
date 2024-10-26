import { Review } from "./Reviews"

export type Product = {
    id: number
    title: string
    category: string
    description: string
    thumbnail: string
    price: number
    sku: string
    weight: number
    discountPercentage: number
    availabilityStatus: string
    rating: number
    stock: number
    tags: string[]
    brand: string
    reviews: Review[]
    dimensions: ProductDimensions
    warrantyInformation: string
    shippingInformation: string
    returnPolicy: string
    minimumOrderQuantity: number
}

interface ProductDimensions {
    width: number
    height: number
    depth: number
}

export interface ProductResponse {
    products: Product[]
}