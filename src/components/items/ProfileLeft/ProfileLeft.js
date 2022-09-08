import LogoSearch from "../LogoSearch/LogoSearch";
import InfoCard from '../InfoCard/InfoCard';
import FollowersCard from "../FollowersCard/FollowersCard";
import '../PostSide/PostSide.css';

function ProfileLeft() {
  return (
    <div className='Profile-side'>
        <LogoSearch />
        <FollowersCard />
        <InfoCard />
    </div>
  )
}

export default ProfileLeft