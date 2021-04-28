import React from 'react'
import style from './card.module.css'
import './cardAnimate.css'
import card_01 from '../../../assets/images/card-01.png'
import card_02 from '../../../assets/images/card-02.png'
import card_03 from '../../../assets/images/card-03.png'
import card_04 from '../../../assets/images/card-04.png'
import card_05 from '../../../assets/images/card-05.png'
import card_06 from '../../../assets/images/card-06.png'
import card_07 from '../../../assets/images/card-07.png'
import card_08 from '../../../assets/images/card-08.png'
import card_09 from '../../../assets/images/card-09.png'
import card_10 from '../../../assets/images/card-10.png'
import card_11 from '../../../assets/images/card-11.png'
import card_12 from '../../../assets/images/card-12.png'
import card_13 from '../../../assets/images/card-13.png'
import card_14 from '../../../assets/images/card-14.png'
import card_15 from '../../../assets/images/card-15.png'
import card_16 from '../../../assets/images/card-16.png'
//import card_cover_01 from '../../../assets/images/card-cover-01.png'
import card_cover_02 from '../../../assets/images/card-cover-02.png'
//import card_cover_03 from '../../../assets/images/card-cover-03.png'
//import card_cover_04 from '../../../assets/images/card-cover-04.png'
//import card_cover_05 from '../../../assets/images/card-cover-05.png'
//import card_cover_06 from '../../../assets/images/card-cover-06.png'


const cardFruit = (fruitId) => {
  switch (fruitId) {
    case 1: return card_01
    case 2: return card_02
    case 3: return card_03
    case 4: return card_04
    case 5: return card_05
    case 6: return card_06
    case 7: return card_07
    case 8: return card_08
    case 9: return card_09
    case 10: return card_10
    case 11: return card_11
    case 12: return card_12
    case 13: return card_13
    case 14: return card_14
    case 15: return card_15
    case 16: return card_16
    default: break
  }
}

const Card = (props) => {

  const clickCard = () => {
    props.clickCard({
      fruitId: props.fruitId, opened: props.opened, cellId: props.cellId, done: props.done
    })
  }

  const getClassAnimate = (animate) => {
    switch (animate) {
      case 'start': return 'card_start'
      case 'open': return 'card_open'
      case 'close': return 'card_close'
      case 'victory': return 'card_victory'
      case 'none': return ''
      default: break
    }
  }

  let img_source = () => { return props.opened ? cardFruit(props.fruitId) : card_cover_02 }
  return (
    <div className={style.card_wrapper}>
      <img src={img_source()} alt="" onClick={clickCard} key={props.cellId}
        className={`${getClassAnimate(props.animate)}`} />
    </div>
  )
}

export default Card