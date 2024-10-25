export interface Review {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
}

export interface ReviewsResponse {
    reviews: Review[]
}