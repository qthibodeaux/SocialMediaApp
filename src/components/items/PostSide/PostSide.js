import { Posts, PostShare } from '../index'
import './PostSide.css'

function PostSide() {
  return (
    <div className='Postside'>
        <PostShare />
        <Posts />
    </div>
  )
}

export default PostSide