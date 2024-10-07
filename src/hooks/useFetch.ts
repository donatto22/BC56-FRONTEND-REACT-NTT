const useFetch = () => {
    const get = async (endpoint: string): Promise<object[]> => {
        const result = await fetch(endpoint)
        if(!result.ok) throw new Error('No se pudo obtener los datos')

        const data = await result.json()

        return data
    }

    return {
        get
    }
}

export default useFetch
