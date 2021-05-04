import React from 'react'
import Modal from '../modal/modal'


const Info = (props) => {
  return (
    <Modal
      isOpened={props.isOpened}
      onModalClose={props.onModalClose}
      title={'Super Memory Game`s Info'}>
      <p><b>What to do with this activity?</b></p>
      <div className='text_left'>
        <p>This game is a great family card game.</p>
        <p>1. The objective is to collect the all pairs of cards.</p>
        <p>2. Restart a game.</p>
        <p>3. On each turn, a player turns over any two cards (one at a time) and keeps them if the cards match.</p>
        <p>4. When a player turns over two cards that do not match, those cards are turned face down again (in the same position).</p>
        <p>5. The trick is to remember which cards are where.</p>
        <p>6. Collect all pairs of cards to win this game.</p>
      </div>
    </Modal>
  )
}

export default Info