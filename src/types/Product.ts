interface Product {
    id: Number,
    title: string,
    category: string,
    description: string,
    thumbnail: string,
    price: Number
}

interface ProductResponse {
    products: Product[]
}