import Fade from "@mui/material/Fade";
import Modal, { ModalOwnProps } from "@mui/material/Modal";

interface ModalProps extends ModalOwnProps {
  handleClose: () => void;
}
export const BasicModal = ({ open, handleClose, children }: ModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
    >
      <Fade in={open}>
        <div className="absolute left-[50%] top-[50%] w-[75%] max-w-xs translate-x-[-50%] translate-y-[-50%] rounded-xl bg-[#F7F9FB] p-6 text-[#304985] shadow-2xl">
          {children}
        </div>
      </Fade>
    </Modal>
  );
};
