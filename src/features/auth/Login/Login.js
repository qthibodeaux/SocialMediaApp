import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../authSlice'
import { setProfile } from '../../Profile/profileSlice'
import { useLoginMutation } from '../authApiSlice'
import { FaGlobeAmericas } from 'react-icons/fa'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const emailData = await login({ email, password: pwd }).unwrap()
            dispatch(setCredentials({ ...emailData, email }))
            dispatch(setProfile(emailData.profile))
            setEmail('')
            setPwd('')
            navigate('/welcome')
        } catch (err) {
            console.log(err)
        }
    }

    const handleUserInput = (e) => setEmail(e.target.value)

    const handlePwdInput = (e) => setPwd(e.target.value)

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
                    <h6>Log In</h6>
                    <div>
                        <input
                            type="text" 
                            placeholder='Email'
                            className='info-input'
                            id='email'
                            name='email'
                            value={email}
                            onChange={handleUserInput}
                            autoComplete='off'
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder='password'
                            className='info-input'
                            id="password"
                            onChange={handlePwdInput}
                            value={pwd}
                            required
                        />
                    </div>

                    <button className='btn btn-info' type='submit'>Login In</button>

                    <div>
                    <span 
                        style={{ 
                            fontSize: '12px',
                            cursor: "pointer"
                        }}
                        onClick={() => {}}
                    >Don't have an account? Sign up?</span>
                    <Link to="/register">Sign Up</Link>
                </div>
                </form>

                
            </div>
        </section>
    )

    return content
}
export default Login