import React from 'react'
import './start.css'
import start_img from '../../../assets/images/start.png'


const Start = (props) => {
  return (
    <div className={`${'start_container'} ${props.isVisible ? 'open' : 'close'}`}
      style={{ ...props.style }}>
      <img src={start_img} alt="" className='start_img' onClick={props.restartGame} />
    </div>
  )
}

export default Start
