import { useEffect, useState } from 'react'
import { Product } from '@declarations/Product'

const usePagination = (items: Product[], itemsPerPage: number) => {
    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

    const totalPages = Math.ceil(items.length / itemsPerPage)

    useEffect(() => {
        setCurrentPage(1)
    }, [items])

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
        }
    }

    return {
        currentItems, 
        totalPages,   
        currentPage,  
        goToPage      
    }
}

export default usePagination
