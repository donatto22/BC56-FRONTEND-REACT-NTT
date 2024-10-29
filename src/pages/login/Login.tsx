import { Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import './login.css'

import loginBg from '@images/loginbg.jpg'
import logo from '@images/logo.png'
import useSessionStorage from '@hooks/useSessionStorage'

const Login = (): React.JSX.Element => {
    const { getItem } = useSessionStorage()
    const token = getItem('token')

    return (
        token ? <Navigate to='/' /> :
            <section id='loginBackground'>
                <div id='image' data-image={loginBg}></div>

                <div id='loginForm'>
                    <img src={logo} alt="Market logo" width={50} />
                    <LoginForm />
                </div>
            </section>
    )
}

export default Login
