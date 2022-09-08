import { useState } from 'react'
import { UilScenery } from '@iconscout/react-unicons'
import { UrlModal } from '../index'
import { useSelector } from 'react-redux'
import { selectCurrentid } from '../../../features/auth/authSlice'
import { usePostMutation } from './postApiSlice'
import { selectCurrentUsername } from '../../../features/auth/authSlice'
import { selectCurrentProfilePicture } from '../../../features/Profile/profileSlice'
import './PostShare.css'

function PostShare() {
  const _id = useSelector(selectCurrentid)
  const username = useSelector(selectCurrentUsername)
  const profilePicture = useSelector(selectCurrentProfilePicture)
  const [postSend] = usePostMutation()

  const [content, setContent] = useState('')
  const [image, setTemp] = useState('')
  const [modalOpened, setModalOpened] = useState(false);
  const showModal = () => {
    setModalOpened(true)
  }
  
  const share = async (e) => {
    e.preventDefault()

    const newPost = {
      _id,
      content,
      image,
      username
    }

    try {
      await postSend(newPost).unwrap()
      setContent('')
      setTemp('')
    } catch (error) {
      console.log(error)
    }
  }

  const handleInput = (e) => setContent(e.target.value)

  return (
    <div className='PostShare'>
        <img src={profilePicture} alt="" />
        
        <div>
            <input 
              type="text"
              placeholder='Whats good?'
              onChange={handleInput}
              value={content}
              required
            />

            <div className='post-options'>
                <div className="option" style={{ color: 'var(--photo)'}}
                    onClick={showModal}
                >
                    <UilScenery />
                    Photo
                </div>
                <button className='btn ps-btn' onClick={share}>Share</button>
            </div>
        </div>
        <UrlModal modalOpened={modalOpened} setModalOpened={setModalOpened} setTemp={setTemp}/>
    </div>
  )
}

export default PostShare