import React from 'react'
import Modal from '../modal/modal'


const Credits = (props) => {
  return (
    <Modal
      isOpened={props.isOpened}
      onModalClose={props.onModalClose}
      title={'Credits'}>
      <p>Art: Alex Dulov, Unknown autor (9 fruit icons)</p>
      <p>Design: Alex Dulov</p>
      <p>Sounds & Music: Alex Dulov</p>
      <p>Coding: Alex Dulov</p>
    </Modal>
  )
}

export default Credits