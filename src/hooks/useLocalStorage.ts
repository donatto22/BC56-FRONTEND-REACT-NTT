const useLocalStorage = () => {
    const getItem = (key: string) => {
        return localStorage.getItem(key)
    }

    const setItem = (key: string, value: string): void => {
        localStorage.setItem(key, value)
    }

    const removeItem = (key: string): void => {
        localStorage.removeItem(key)
    }

    const clear = (): void => {
        localStorage.clear()
    }

    return {
        getItem, setItem, removeItem, clear
    }
}

export default useLocalStorage