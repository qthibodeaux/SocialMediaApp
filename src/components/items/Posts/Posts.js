import { Post } from '../index'
import { useSelector } from 'react-redux'
import { selectCurrentid } from '../../../features/auth/authSlice'
import { useProfileQuery } from '../../../features/Profile/profileApiSlice'
import { FaGlobeAmericas } from 'react-icons/fa'
import './Posts.css'


function Posts() {
  const username = useSelector(selectCurrentid)
  const { data, isLoading, isSuccess, isError, error } = useProfileQuery(username)
  let content

  if (isLoading) {
      content = <p>Loading Post...</p>
  } else if (isSuccess) {
    data.length === 0 
      ? content = (
        <div className='Post'>
          <FaGlobeAmericas className='defaultavi'/>
          <div className='postContent'>
            <span className='detail'>
              <div>
                <span><b>@CommunityApp</b></span>
                <span>Try following others to see more post!</span>
              </div>
            </span>
          </div>
        </div>
      )
      :
        content = (
          <div>
            <div className='Posts'>
                  {
                    data.map((post, id) => {
                      return <Post info={post} key={id}/>
                    })
                  }
              </div>
          </div>
        ) 
  } else if (isError) {
    content = <p>{error}</p>
}
  return content
}

export default Posts