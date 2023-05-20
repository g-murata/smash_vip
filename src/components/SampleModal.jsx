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

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const radioChange = (event) => {
    setSelectedOption(event.target.value)
  };


  const filteredCharacters = Object.values(characters).filter((character) => {
    const nameFilter = character.name.includes(searchTerm)

    if (selectedOption === '') {
      return nameFilter
    } else {
      const vipFilter = character.vip == JSON.parse(selectedOption)
      return nameFilter && vipFilter
    }
  })


  return (
    < div >
      <label>
        <input
          type="radio"
          value=""
          checked={selectedOption === ''}
          onChange={radioChange}
        />
        all
      </label>
      <label>
        <input
          type="radio"
          value="true"
          checked={selectedOption === 'true'}
          onChange={radioChange}
        />
        VIP入り
      </label>
      <label>
        <input
          type="radio"
          value="false"
          checked={selectedOption === 'false'}
          onChange={radioChange}
        />
        VIPじゃない
      </label>
      <input
        className=""
        type="text" autoFocus
        placeholder="ファイター名検索"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={() => {
        setSelectedOption('');
        setSearchTerm('');
      }}>
        リセット
      </button>

      <table>
        <thead>
          <tr>
            <th>ファイター番号</th>
            <th>ファイター名</th>
            <th>VIP入り</th>
          </tr>
        </thead>
        {
          Object.keys(filteredCharacters).map((item) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>{filteredCharacters[item].no}</td>
                    <td>{filteredCharacters[item].name}</td>
                    <td>{filteredCharacters[item].vip === true ? "○" : "✖️"}</td>
                    <td onClick={() => { openModal(item) }}>詳細</td>
                  </tr>
                </tbody>

                <Modal
                  isOpen={item === selectedItem}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{filteredCharacters[item].name}</h2>
                  <div>{filteredCharacters[item].explanation}</div>
                  <div>{filteredCharacters[item].vip === true ? "VIP" : "まだVIPじゃない"}</div>
                  <button onClick={closeModal}>close</button>
                  {/* <form>
                  <input />
                </form> */}
                </Modal>
              </>
            )
          })
        }
      </table>

    </div >
  )
}

export default SampleModal;
