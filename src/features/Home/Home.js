import './Home.css'
import { PostSide, ProfileSide, RightSide } from  '../../components/items/index'

function Home () {
    return (
        <div className='bigdiv'>
            <div className='Home'>
                <div className="profileSide">
                    <ProfileSide />
                </div>
                <div className="postSide">
                    <PostSide />
                </div>
                <div className="rightSide">
                    <RightSide />
                </div>
            </div>
        </div>
    )
}

export default Home