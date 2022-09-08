import { useSelector } from "react-redux";
import { selectCurrentEmail, selectCurrentUsername } from "./authSlice";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Welcome() {
    const email = useSelector(selectCurrentEmail)
    const username = useSelector(selectCurrentUsername)

    const welcome = email ? `Welcome ${email}!` : 'Welcome!'

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => navigate('/home'), 100)
    }, [navigate])

    const content = (
        <section className="welcome">
            <h1>{welcome}</h1>
            <p>Username: {username}</p>
        </section>
    )

    return content
}

export default Welcome