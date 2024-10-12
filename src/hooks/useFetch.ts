import { ErrorMessages } from "@types/ErrorMessages"

const useFetch = () => {
    const get = async (endpoint: string): Promise<object[]> => {
        const result = await fetch(endpoint)
        if(!result.ok) throw new Error('No se pudo obtener los datos')

        const data = await result.json()

        return data
    }

    const post = async (endpoint: string, body: object) => {
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
    
        if(!res.ok) throw new Error(ErrorMessages.FETCH_ERROR)

        const data = await res.json()
        return data
    }

    return Object.freeze({
        get, post
    })
}

export default useFetch
