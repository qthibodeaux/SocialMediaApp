import { useState } from 'react'
import { Modal, useMantineTheme } from "@mantine/core";
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentAbout, selectCurrentCoverPicture, selectCurrentProfilePicture,  } from '../../../features/Profile/profileSlice'
import { useUpdateMutation } from '../../../features/Profile/profileApiSlice';
import { selectCurrentid } from '../../../features/auth/authSlice.js'
import { setProfile } from "../../../features/Profile/profileSlice";
import './ProfileModal.css'

function ProfileModal({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();
    const profilePicture = useSelector(selectCurrentProfilePicture)
    const coverPicture = useSelector(selectCurrentCoverPicture)
    const about = useSelector(selectCurrentAbout)
    const id = useSelector(selectCurrentid)

    const [newPP, setNewPP] = useState(profilePicture)
    const [newCoverPic, setNewCoverPic] = useState(coverPicture)
    const [newAbout, setNewAbout] = useState(about)

    const dispatch = useDispatch()
    const [update] = useUpdateMutation()

    let profileUpdates = {
      id: id,
      profilePicture: newPP,
      coverPicture: newCoverPic,
      about: newAbout
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      update(profileUpdates)
      dispatch(setProfile(profileUpdates))
      setModalOpened(false)
    }

    const handlePP = (e) => setNewPP(e.target.value)
    const handleCP = (e) => setNewCoverPic(e.target.value)
    const handleNA = (e) => setNewAbout(e.target.value)
  
    return (
      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        size="55%"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        <div className='profileModalForm'>
          <form className="info-form pmf" onSubmit={handleSubmit}>
            <h3>Your info</h3>

            <div>
              <input
                type="text"
                className="info-input"
                name="Profile Picture"
                placeholder={profilePicture}
                value={newPP}
                onChange={handlePP}
              />
            </div>
    
            <div>
              <input
                type="text"
                className="info-input"
                name="Cover Picture"
                placeholder={coverPicture}
                value={newCoverPic}
                onChange={handleCP}
              />
            </div>

            <div>
              <input
                type="text"
                className="info-input"
                name="About"
                placeholder={about}
                value={newAbout}
                onChange={handleNA}
              />
            </div>
    
            <button className="btn btn-info pfm-btn">Update</button>
          </form>
        </div>
      </Modal>
    );
  }
  
  export default ProfileModal;