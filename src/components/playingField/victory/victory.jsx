import React from 'react'
import './victory.css'
import victory_img from '../../../assets/images/you-win.png'
import fruit_01 from '../../../assets/images/fruit-01.png'
import fruit_02 from '../../../assets/images/fruit-02.png'
import fruit_03 from '../../../assets/images/fruit-03.png'
import fruit_04 from '../../../assets/images/fruit-04.png'
import fruit_05 from '../../../assets/images/fruit-05.png'
import fruit_06 from '../../../assets/images/fruit-06.png'
import fruit_07 from '../../../assets/images/fruit-07.png'
import fruit_08 from '../../../assets/images/fruit-08.png'
import fruit_09 from '../../../assets/images/fruit-09.png'
import fruit_10 from '../../../assets/images/fruit-10.png'
import fruit_11 from '../../../assets/images/fruit-11.png'
import fruit_12 from '../../../assets/images/fruit-12.png'
import fruit_13 from '../../../assets/images/fruit-13.png'
import fruit_14 from '../../../assets/images/fruit-14.png'
import fruit_15 from '../../../assets/images/fruit-15.png'
import fruit_16 from '../../../assets/images/fruit-16.png'


const Victory = (props) => {
  const fruitArr = [fruit_01, fruit_02, fruit_03, fruit_04, fruit_05, fruit_06, fruit_07, fruit_08,
    fruit_09, fruit_10, fruit_11, fruit_12, fruit_13, fruit_14, fruit_15, fruit_16,]
  return (
    <div className={`${'victory_container'} ${props.isVisible ? 'open' : 'close'}`}
      style={{ ...props.style }}>
      <img src={victory_img} alt='' className='victory_img' onClick={props.restartGame} />
      {fruitArr.map((e, i) => <img src={e} alt='' className='fruit_animation' key={i + 500}
        style={{
          left: Math.floor(Math.random() * 65 + 20) + 'vw',
          animationDelay: (i + 0.2) / 1.5 + 's',
          animationDuration: Math.floor(Math.random() * 4 + 10) + 's'
        }} />
      )}
    </div>
  )
}

export default Victory