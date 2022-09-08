import { FollowersCard, LogoSearch, ProfileCard } from '../index'
import './ProfileSide.css'

function ProfileSide() {
  return (
    <div className='Profile-side'>
        <LogoSearch />
        <ProfileCard />
        <FollowersCard />
    </div>
  )
}

export default ProfileSide