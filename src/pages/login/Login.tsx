import './login.css'

import loginBg from '@images/loginbg.jpg'
import logo from '@images/logo.png'

import LoginForm from './LoginForm'
import useLocalStorage from '@hooks/useLocalStorage'
import { Navigate } from 'react-router-dom'
import { Suspense } from 'react'
import Loading from '@components/loading/Loading'

const Login = (): React.JSX.Element => {
    const { getItem } = useLocalStorage()
    const token = getItem('token')

    return (
        token ? <Navigate to='/' /> : 
            <Suspense fallback={ <Loading /> }>
                <section id='loginBackground'>
                    <div id='image' data-image={loginBg}></div>

                    <div id='loginForm'>
                        <img src={logo} alt="Market logo" width={50} />
                        <LoginForm />
                    </div>
                </section>
            </Suspense>
    )
}

export default Login
