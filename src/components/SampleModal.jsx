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

  const ModalList = ['モーダル１', 'モーダル２', 'モーダル３']
  const [selectedItem, setSelectedItem] = useState('')

  function openModal(name) {
    setSelectedItem(name)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setSelectedItem(false)
  }

  return (
    <div style={{ display: 'flex' }}>
      {
        ModalList.map((item) => {
          return (
            <>
              <button onClick={() => { openModal(item) }}>{item}</button>
              <Modal
                isOpen={item === selectedItem}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello Modal{item}</h2>
                <button onClick={closeModal}>close</button>
                <div>{selectedItem}</div>
                <form>
                  <input />
                </form>
              </Modal>
            </>
          )
        })
      }
    </div>
  )
}

export default SampleModal;
