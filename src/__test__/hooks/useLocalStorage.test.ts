import { renderHook } from '@testing-library/react'
import useLocalStorage from '@hooks/useLocalStorage'

describe('Funcionamiento de localStorage', () => {
    const { result } = renderHook(() => useLocalStorage())
    const { clear, getItem, removeItem, setItem } = result.current

    beforeEach(() => {
        localStorage.clear()
    })

    it('debe guardar un item en localStorage', () => {
        setItem('dulce', 'chocolate')
        expect(getItem('dulce')).toBe('chocolate')
    })

    it('debe obtener un item de localStorage', () => {
        setItem('dulce', 'chocolate')

        const value = getItem('dulce')
        expect(value).toBe('chocolate')
    })

    it('debe eliminar un item de localStorage', () => {
        setItem('dulce', 'chocolate')
        removeItem('dulce')

        expect(getItem('dulce')).toBeNull()
    })

    it('debe limpiar el localStorage', () => {
        setItem('dulce1', 'chocolate')
        setItem('dulce2', 'gomitas')

        clear()

        expect(getItem('dulce1')).toBeNull()
        expect(getItem('dulce2')).toBeNull()
    })
})
