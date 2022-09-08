import { PostSide, ProfileCenter, ProfileLeft, RightSide } from '../../components/items/index'
import './Profile.css'

function Profile() {
  return (
    <div className='bigdiv'>
        <div className='Profile'>
            <ProfileLeft />
            <div className="Profile-center">
              <ProfileCenter />
              <PostSide />
            </div>
            <RightSide />
        </div>
    </div>
    
  )
}

export default Profile