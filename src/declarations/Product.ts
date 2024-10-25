export type Product = {
    id: number
    title: string
    category: string
    description: string
    thumbnail: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: string[]
    brand: string
    dimensions: ProductDimensions
    warrantyInformation: string
    shippingInformation: string
    returnPolicy: string
}

interface ProductDimensions {
    width: number
    height: number
    depth: number
}

export interface ProductResponse {
    products: Product[]
}