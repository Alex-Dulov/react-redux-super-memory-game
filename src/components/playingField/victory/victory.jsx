import React from 'react'
import './victory.css'
import victory_img from '../../../assets/images/you-win.png'


const Victory = (props) => {
  return (
    <div className={`${'victory_container'} ${props.isVisible ? 'open' : 'close'}`}
      style={{ ...props.style }}>
      <img src={victory_img} alt="" className='victory_img' onClick={props.restartGame} />
    </div>
  )
}

export default Victory