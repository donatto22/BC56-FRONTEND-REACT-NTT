export interface Product {
    id: number,
    title: string,
    category: string,
    description: string,
    thumbnail: string,
    price: number
}

export interface ProductResponse {
    products: Product[]
}