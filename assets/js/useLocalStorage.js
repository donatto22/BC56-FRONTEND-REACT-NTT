export const setItem = (key, value) => {
    localStorage.setItem(key, value)
}

/**
 * @param { string } key 
 */
export const getItem = (key) => {
    return localStorage.getItem(key)
}

/**
 * @param { string } key 
 */
export const removeItem = (key) => {
    localStorage.removeItem(key)
}
