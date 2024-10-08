const useFetch = () => {
    const get = async (endpoint: string) => {
        const response = await fetch(endpoint)
        if(!response.ok) throw new Error('Error al cargar los datos desde ' + endpoint)

        const data = await response.json()
        return data
    }

    return Object.freeze({
        get
    })
}

export default useFetch
