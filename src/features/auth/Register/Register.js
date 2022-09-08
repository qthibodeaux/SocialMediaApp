import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../authSlice'
import { useRegisterMutation } from '../authApiSlice'
import { FaGlobeAmericas } from 'react-icons/fa'
import './Register.css'

function Register() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const [register, { isLoading }] = useRegisterMutation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
            
        try {
            const registerData = await register({ username, email, password }).unwrap()
            console.log('registerdata ', registerData)
            console.log('email ', email, ' username: ', username)
            dispatch(setCredentials({ ...registerData, email}))
            setUsername('')
            setEmail('')
            setPassword('')
            setConfirm('')
            navigate('/welcome')
        } catch (err) {
            if (!err?.response) {
                console.log('No Server Response');
            } else if (err.response?.status === 409) {
                console.log('Username Taken');
            } else {
                console.log('Registration Failed')
            }
        }
    }

    const handleEmailInput = (e) => setEmail(e.target.value)
    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePasswordInput = (e) => setPassword(e.target.value)
    const handleConfirmInput = (e) => setConfirm(e.target.value)

    const content = isLoading ? <h1>Loading...</h1> : (
        <section className='Auth'>
            <div className="a-left">
                <div><FaGlobeAmericas className='a-icon'/></div>
                <div className="Web-name">
                    <h1>Community App</h1>
                    <h6>Communicaton + Unity</h6>
                </div>
            </div>

            <div className="a-right">
                <form className='info-form auth-form' onSubmit={handleSubmit}>
                    <h3>Register for Community</h3>
                    
                    <div>
                        <input
                            type="text" 
                            placeholder='Email'
                            className='info-input'
                            id='email'
                            name='email'
                            value={email}
                            onChange={handleEmailInput}
                            autoComplete='off'
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="text" 
                            placeholder='username'
                            className='info-input'
                            id='username'
                            name='username'
                            value={username}
                            onChange={handleUserInput}
                            autoComplete='off'
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="password" 
                            className='info-input'
                            placeholder='password'
                            id='password'
                            name='password'
                            value={password}
                            onChange={handlePasswordInput}
                            autoComplete='off'
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="password" 
                            className='info-input'
                            placeholder='confirm'
                            id='confirm'
                            name='confirm'
                            value={confirm}
                            onChange={handleConfirmInput}
                            autoComplete='off'
                            required
                        />
                    </div>

                    <button className='btn btn-info' type='submit'>Register</button>
                    
                    <span 
                        style={{ 
                            fontSize: '12px',
                            cursor: "pointer"
                        }}
                        onClick={() => {}}
                    >Do you already have an account?</span>
                    <Link to="/login">Log In</Link>
                </form>

                
            </div>
        </section>
    )

    return content
}

export default Register