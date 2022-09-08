import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentAbout, selectCurrentCoverPicture, selectCurrentProfilePicture, selectCurrentFollowers, selectCurrentFollowing } from "../../../features/Profile/profileSlice"
import { selectCurrentUsername } from "../../../features/auth/authSlice";
import './ProfileCard.css'

function ProfileCard() {
    const navigate = useNavigate()
    const about = useSelector(selectCurrentAbout)
    const coverPicture = useSelector(selectCurrentCoverPicture)
    const profilePicture = useSelector(selectCurrentProfilePicture)
    const username = useSelector(selectCurrentUsername)
    const followers = useSelector(selectCurrentFollowers)
    const following = useSelector(selectCurrentFollowing)
    
    return (
    <div className='Profile-card'>
        <div className="Profile-images">
            <img src={coverPicture} alt="" />
            <img src={profilePicture} alt="" />
        </div>

        <div className="Profile-name">
            <span>@{username}</span>
            <span>{about}</span>
        </div>

        <div className="follow-status">
            <hr />
            <div>
                <div className="follow">
                    <span>{following}</span>
                    <span>Followings</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>{followers}</span>
                    <span>Followers</span>
                </div>
            </div>
            <hr />
        </div>

        <span onClick={() => { navigate('../profile') }}>
            My Profile
        </span>
    </div>
  )
}

export default ProfileCard