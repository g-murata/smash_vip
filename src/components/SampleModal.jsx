import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.60)"
  },
  content: {
    height: '70%',
    width: '60%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function SampleModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello Modal</h2>
        <button onClick={closeModal}>close</button>
        <div>モーダル</div>
        <form>
          <input />
        </form>
      </Modal>
    </div>
  );
}

export default SampleModal;
