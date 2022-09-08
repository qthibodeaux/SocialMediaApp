import { useState } from 'react'
import Comment from '../../../assets/comment.png'
import Share from '../../../assets/share.png'
import Heart from '../../../assets/like.png'
import NotLike from '../../../assets/notlike.png'
import { PicModal } from '../index'
import { useLikedPostMutation } from '../PostShare/postApiSlice'
import { selectCurrentid } from '../../../features/auth/authSlice'
import { useSelector } from 'react-redux'
import './Post.css'

function Post({info}) {
  const id = useSelector(selectCurrentid)
  const [like, setLike] = useState(info.likes.includes(id))
  const [likes, setLikes] = useState(info.likes.length)
  const [modalOpened, setModalOpened] = useState(false);
  const [liked] = useLikedPostMutation()
  const showModal = () => {
    setModalOpened(true)
  }

  let likethis = {
    userId: info._id,
    infoId: id
  }

  const handleLike = () => {
    console.log(likethis)
    liked(likethis)
    setLike((prev) => !prev)
    like ? setLikes((prev) => prev-1) : setLikes((prev) => prev+1)
  }

  return (
    <div className='Post'>
      <img src={info.userAvatar} alt="" className='avatar'/>
      <div className='postContent'>
        <span className='detail'>
          <div>
            <span><b>@{info.username} </b></span>
            <span> {info.desc}</span>
          </div>
        </span>
          <div className='imageDiv'>
            <img src={info.image} alt="" className='postImage' onClick={showModal}/>
            <PicModal modalOpened={modalOpened} setModalOpened={setModalOpened} url={info.img}/>
          </div>

          <div className="postReact">
              <div className='likeDiv'>
                <img
                  src={like ? Heart : NotLike}
                  alt="" 
                  style={{ cursor: 'pointer'}}
                  onClick={handleLike}
                />
                <span style={{ color: 'var(--gray', fontSize: '12px'}}>{likes} likes</span>
              </div>
              <img src={Comment} alt="" />
              <img src={Share} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Post