import Modal from 'react-modal';
import { useState } from 'react';

import Characters from './../characters.json';
const characters = Characters.data;

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

  function openModal(item) {
    setSelectedItem(item)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setSelectedItem(false)
  }

  return (
    <div>
      {
        Object.keys(characters).map((item) => {
          return (
            <>
              <button onClick={() => { openModal(item) }}>{characters[item].name}</button>
              <Modal
                isOpen={item === selectedItem}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{characters[item].name}</h2>
                <div>{characters[item].explanation}</div>
                <button onClick={closeModal}>close</button>
                {/* <form>
                  <input />
                </form> */}
              </Modal>
            </>
          )
        })
      }
    </div>
  )
}

export default SampleModal;
