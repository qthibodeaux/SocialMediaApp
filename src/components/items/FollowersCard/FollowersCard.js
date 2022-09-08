import './FollowersCard.css'
import { useSelector } from 'react-redux'
import { selectCurrentid } from '../../../features/auth/authSlice'
import { useUsersQuery, useFollowMutation } from '../../../features/Profile/profileApiSlice'

function FollowersCard() {
    const [follow] = useFollowMutation()
    const id = useSelector(selectCurrentid)

    const pushFollow = async (pushed) => {
        try {
            await follow({ _id: pushed, id }).unwrap()
        } catch (error) {
            console.log(error)
        }
    }

    const { data, isLoading, isSuccess } = useUsersQuery()
    let content

    if (isLoading) {
        content = <div className='Follower-card'>Loading</div>
    } else if (isSuccess) {
        content = (
            <div className='Follower-card'>
                <h3>Who to follow</h3>
        
                <div>
                    <div className="follower">
                        <div>
                            <img src={data[0].profilePicture} alt="" className='follower-image' />
                            <div className="name">
                                <span>@{data[0].username}</span>
                            </div>
                        </div>
                        <button type='button' className='btn fc-button' onClick={() => pushFollow(data[0]._id)}>
                            Follow
                        </button>
                    </div>
                    <div className="follower">
                        <div>
                            <img src={data[1].profilePicture} alt="" className='follower-image' />
                            <div className="name">
                                <span>@{data[1].username}</span>
                            </div>
                        </div>
                        <button type='button' className='btn fc-button' onClick={() => pushFollow(data[1]._id)}>
                            Follow
                        </button>
                    </div>
                    <div className="follower">
                        <div>
                            <img src={data[2].profilePicture} alt="" className='follower-image' />
                            <div className="name">
                                <span>@{data[2].username}</span>
                            </div>
                        </div>
                        <button type='button' className='btn fc-button' onClick={() => pushFollow(data[2]._id)}>
                            Follow
                        </button>
                    </div>
                    <div className="follower">
                        <div>
                            <img src={data[3].profilePicture} alt="" className='follower-image' />
                            <div className="name">
                                <span>@{data[3].username}</span>
                            </div>
                        </div>
                        <button type='button' className='btn fc-button' onClick={() => pushFollow(data[3]._id)}>
                            Follow
                        </button>
                    </div>
                </div>
            </div>
          )
    }
    
  return content
}

export default FollowersCard