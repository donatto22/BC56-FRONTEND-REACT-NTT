const useSessionStorage = () => {
    const getItem = (key: string) => {
        return sessionStorage.getItem(key)
    }

    const setItem = (key: string, value: string): void => {
        sessionStorage.setItem(key, value)
    }

    const removeItem = (key: string): void => {
        sessionStorage.removeItem(key)
    }

    const clear = (): void => {
        sessionStorage.clear()
    }

    return {
        getItem, setItem, removeItem, clear
    }
}

export default useSessionStorage