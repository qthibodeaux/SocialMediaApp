import './LogoSearch.css'
import { useNavigate } from 'react-router-dom'
import { UilSearch } from '@iconscout/react-unicons'
import { FaGlobeAmericas } from 'react-icons/fa'

function LogoSearch() {
  const navigate = useNavigate()

  const handleHome = () => {
    navigate('/home')
  }
  return (
    <div className='LogoSearch'>
        <FaGlobeAmericas style={{ cursor: 'pointer' }} onClick={handleHome} className='globe' />
        <div className="Search">
            <input type="text" placeholder='#Explore'/>
            <div className="s-icon">
                <UilSearch />
            </div>
        </div>
    </div>
  )
}

export default LogoSearch