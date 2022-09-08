import Home from '../../../assets/home.png'
import Noti from '../../../assets/noti.png'
import Comment from '../../../assets/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import './NavIcons.css'

function NavIcons() {
  return (
    <div className='Nav-icons'>
        <div>
            <img src={Home} alt="" className='nav-icon'/>
        </div>
        <div>
            <UilSetting className='nav-icon'/>
        </div>
        <div>
            <img src={Noti} alt="" className='nav-icon'/>
        </div>
        <div>
            <img src={Comment} alt="" className='nav-icon'/>
        </div>
    </div>
  )
}

export default NavIcons