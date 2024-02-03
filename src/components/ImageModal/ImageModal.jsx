import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const ImageModal = ({ isOpen, onClose, pic }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles} ariaHideApp={false}>
      <img src={pic} />
    </Modal>
  );
};
