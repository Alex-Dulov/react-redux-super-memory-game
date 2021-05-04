import React from 'react'
import Modal from '../modal/modal'


const Options = (props) => {
  const setDifficulty = (event) => {
    props.setDifficulty(event.target.defaultValue)
    props.restartGame()
  }
  const isColorCards = (event) => {
    props.isColorCards()
  }
  return (
    <Modal
      isOpened={props.isOpened}
      onModalClose={props.onModalClose}
      title={'Options'}>
      <div className='text_left'>
        <form>
          <p>Difficulty</p>
          <input type='radio' id='easy' name='difficulty' value='4'
            onClick={setDifficulty} defaultChecked />
          <label htmlFor='easy'>Easy (Field 4x4, 16 cards)</label><br />
          <input type='radio' id='normal' name='difficulty' value='6'
            onClick={setDifficulty} />
          <label htmlFor='normal'>Normal (Field 6x4, 24 cards)</label><br />
          <input type='radio' id='hard' name='difficulty' value='8'
            onClick={setDifficulty} />
          <label htmlFor='hard'>Hard (Field 8x4, 32 cards)</label>
          <br /><br />
          <p>Card's style</p>
          <input type='checkbox' id='oneColorOption' name='oneColorOption'
            value={props.oneColorCards} onClick={isColorCards} />
          <label htmlFor='oneColorOption'>One color card's background</label>
          <br /><br />
        </form>
      </div>
    </Modal>
  )
}

export default Options