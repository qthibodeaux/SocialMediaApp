import { FaGlobeAmericas } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"
import "./Public.css"

const Public = () => {
    const navigate = useNavigate()

    const handleNavigate = (section) => {
        navigate(section)
    }

    const content = (
        <section className="publicCenter">
            <div className="communityCenter">
                <div><FaGlobeAmericas className='bicon'/></div>
                <div className="heroOne">
                    <h1>Community App</h1>
                    <h6>Communicaton + Unity</h6>
                </div>
            </div>
            <div className="logreg">
                <button className="btn btn-info" onClick={() => {handleNavigate("/login")}}>Login</button>
                <button className="btn btn-info" onClick={() => {handleNavigate("register")}}>Register</button>
            </div>
        </section>

    )
    return content
}
export default Public