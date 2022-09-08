import './ProfileCenter.css'
import { useSelector } from 'react-redux'
import { selectCurrentCoverPicture, selectCurrentProfilePicture, selectCurrentAbout, selectCurrentFollowers, selectCurrentFollowing } from '../../../features/Profile/profileSlice'
import { selectCurrentUsername } from '../../../features/auth/authSlice'
import { useMyPostQuery } from '../PostShare/postApiSlice'

function ProfileCenter() {
    const profilePicture = useSelector(selectCurrentProfilePicture)
    const coverPicture = useSelector(selectCurrentCoverPicture)
    const username = useSelector(selectCurrentUsername)
    const about = useSelector(selectCurrentAbout)
    const followers = useSelector(selectCurrentFollowers)
    const following = useSelector(selectCurrentFollowing)

    const {data, isLoading, isSuccess, isError, error} = useMyPostQuery(username)

    let content
    if (isLoading) {
        content = <p>Loading my post...</p>
    } else if (isSuccess) {
        content = data.length
    } else if (isError) {
        console.error(error)
    }

  return (
    <div className='Profile-card'>
        <div className="Profile-images">
            <img src={coverPicture} alt="" />
            <img src={profilePicture} alt="" />
        </div>

        <div className="Profile-name">
            <span>{username}</span>
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

                <div className='vl'></div>
                <div className="follow">
                    <span>{content}</span>
                    <span>Posts</span>
                </div>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default ProfileCenter