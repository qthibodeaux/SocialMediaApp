import './InfoCard.css'
import { logOut } from '../../../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { UilPen } from "@iconscout/react-unicons";
import { useState } from 'react'
import { ProfileModal } from '../index'

function InfoCard() {
  const dispatch = useDispatch()
  const [modalOpened, setModalOpened] = useState(false);

  const handleLogout = () => {
    dispatch(logOut())
  }

  return (
    <div className='Info-card'>
      <div className='infoHead'>
        <h4>Edit Info</h4>
        <div>
            <UilPen
              className='uipen'
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
            />
          </div>
      </div>
        <button className="btn logout-btn" onClick={handleLogout}>Logout</button>  
    </div>
  )
}

export default InfoCard