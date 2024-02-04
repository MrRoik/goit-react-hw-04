import Modal from 'react-modal';

const customStyles = {
  content: {
    height: '70%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    backgroundSize: 'cover',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    background: 'rgba(22, 22, 22, 0.8)',
  },
};

export const ImageModal = ({ isOpen, onClose, pic }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles} ariaHideApp={false}>
      <img src={pic} />
    </Modal>
  );
};
