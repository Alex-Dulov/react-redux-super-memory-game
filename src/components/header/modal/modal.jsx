import React from 'react'
import './modal.css'


const Modal = (props) => {
  return (
    <div className={`${'modal_container'} ${props.isOpened ? 'open' : 'close'}`}
      style={{ ...props.style }}>
      <div className='modal_body'>
        <div className='modal_close' onClick={props.onModalClose}>×</div>
        <h2>{props.title}</h2>
        {props.children}
        <button className='modal_btn' onClick={props.onModalClose}>Close</button>
      </div>
    </div>
  )
}

export default Modal