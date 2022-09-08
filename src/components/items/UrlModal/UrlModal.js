import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from 'react'

function UrlModal({ modalOpened, setModalOpened, setTemp }) {
    const theme = useMantineTheme();
    const [url, setUrl] = useState('')

    const handleUrlInput = (e) => setUrl(e.target.value)

    const handleSubmit = () => {
        setTemp(url)
        setModalOpened(false)
    }

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
            <div
                style={{ padding: '1rem', gap: '10px', display: 'flex', flexDirection: 'column' }}
            >
                <input 
                    className="info-input"
                    type="text" 
                    placeholder="URL"
                    id='url'
                    value={url}
                    onChange={handleUrlInput}
                    autoComplete="off"
                    required
                />
                <button className="btn btn-info" onClick={handleSubmit}>Submit</button>
            </div>
    </Modal>
  )
}

export default UrlModal