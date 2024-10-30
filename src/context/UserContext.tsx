import { createContext,  useState, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import useFetch from '@hooks/useFetch'
import useSessionStorage from '@hooks/useSessionStorage'

import { DummyToken } from '@declarations/DummyToken'
import { ErrorMessages } from '@declarations/ErrorMessages'
import { ApiEndpoints } from '@declarations/ApiEndpoints'
import { Paths } from '@declarations/Paths'

interface UserContextType {
    session?: DummyToken
    login: (data: object) => Promise<void>
    logout: () => void
}

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
    const [session, setSession] = useState<DummyToken>()

    const { post } = useFetch()
    const { setItem, removeItem, getItem } = useSessionStorage()
    const navigator = useNavigate()

    const verifyToken = () => {
        const isSession = getItem('session')
        isSession && setSession(JSON.parse(isSession) as DummyToken)
    }

    useEffect(() => {
        verifyToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const login = async (data: object) => {       
        try {
            const dummySession: DummyToken = await post(ApiEndpoints.LOGIN, data)
            toast.success('Ingreso exitoso')
            setSession(dummySession)
            
            setItem('token', dummySession.accessToken)
            setItem('session', JSON.stringify(dummySession))

            navigator(Paths.products)
        } catch {
            toast.error(ErrorMessages.LOGIN_ERROR)
            throw new Error(ErrorMessages.LOGIN_ERROR)
        }
    }

    const logout = () => {
        removeItem('token')
        removeItem('session')
        toast.success('Has cerrado sesión')
        navigator(Paths.login)
    }
    
    return (
        <UserContext.Provider value={{ logout, login, session }}>
            { children }
        </UserContext.Provider>
    )
}