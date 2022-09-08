import { Modal, useMantineTheme } from "@mantine/core";
import './PicModal.css'

function PicModal({ modalOpened, setModalOpened, url }) {
    const theme = useMantineTheme();

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
        <img src={url} alt="" className="picModal"/>
    </Modal>
  )
}

export default PicModal