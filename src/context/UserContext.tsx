import { createContext,  useState, ReactNode } from 'react'
import { toast } from 'sonner'
import useSessionStorage from '@hooks/useSessionStorage'
import useFetch from '@hooks/useFetch'

import { DummyToken } from '@declarations/DummyToken'
import { ErrorMessages } from '@declarations/ErrorMessages'
import { ApiEndpoints } from '@declarations/ApiEndpoints'
import { Paths } from '@declarations/Paths'
import { useNavigate } from 'react-router-dom'

interface UserContextType {
    session?: DummyToken
    login: (data: object) => Promise<void>
    logout: () => void
}

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
    const [session, setSession] = useState<DummyToken>()

    const { post } = useFetch()
    const { setItem, removeItem } = useSessionStorage()
    const navigator = useNavigate()
    
    const login = async (data: object) => {       
        try {
            const dummySession: DummyToken = await post(ApiEndpoints.LOGIN, data)
            toast.success('Ingreso exitoso')
            setSession(dummySession)
            
            setItem('token', dummySession.accessToken)
            navigator(Paths.products)
        } catch {
            toast.error(ErrorMessages.LOGIN_ERROR)
            throw new Error(ErrorMessages.LOGIN_ERROR)
        }
    }

    const logout = () => {
        removeItem('token')
        toast.success('Has cerrado sesión')
        navigator(Paths.login)
    }
    
    return (
        <UserContext.Provider value={{ logout, login, session }}>
            { children }
        </UserContext.Provider>
    )
}