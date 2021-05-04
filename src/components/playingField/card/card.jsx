import React from 'react'
import './card.css'
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
import card_01_y from '../../../assets/images/card-01-y.png'
import card_02_y from '../../../assets/images/card-02-y.png'
import card_03_y from '../../../assets/images/card-03-y.png'
import card_04_y from '../../../assets/images/card-04-y.png'
import card_05_y from '../../../assets/images/card-05-y.png'
import card_06_y from '../../../assets/images/card-06-y.png'
import card_07_y from '../../../assets/images/card-07-y.png'
import card_08_y from '../../../assets/images/card-08-y.png'
import card_09_y from '../../../assets/images/card-09-y.png'
import card_10_y from '../../../assets/images/card-10-y.png'
import card_11_y from '../../../assets/images/card-11-y.png'
import card_12_y from '../../../assets/images/card-12-y.png'
import card_13_y from '../../../assets/images/card-13-y.png'
import card_14_y from '../../../assets/images/card-14-y.png'
import card_15_y from '../../../assets/images/card-15-y.png'
import card_16_y from '../../../assets/images/card-16-y.png'
import card_cover_01 from '../../../assets/images/card-cover-01.png'
import card_cover_02 from '../../../assets/images/card-cover-02.png'
import card_cover_03 from '../../../assets/images/card-cover-03.png'
import card_cover_04 from '../../../assets/images/card-cover-04.png'
import card_cover_05 from '../../../assets/images/card-cover-05.png'
import card_cover_06 from '../../../assets/images/card-cover-06.png'


const cardFruit = (fruitId, oneColorCards) => {
  switch (fruitId) {
    case 1: return oneColorCards ? card_01_y : card_01
    case 2: return oneColorCards ? card_02_y : card_02
    case 3: return oneColorCards ? card_03_y : card_03
    case 4: return oneColorCards ? card_04_y : card_04
    case 5: return oneColorCards ? card_05_y : card_05
    case 6: return oneColorCards ? card_06_y : card_06
    case 7: return oneColorCards ? card_07_y : card_07
    case 8: return oneColorCards ? card_08_y : card_08
    case 9: return oneColorCards ? card_09_y : card_09
    case 10: return oneColorCards ? card_10_y : card_10
    case 11: return oneColorCards ? card_11_y : card_11
    case 12: return oneColorCards ? card_12_y : card_12
    case 13: return oneColorCards ? card_13_y : card_13
    case 14: return oneColorCards ? card_14_y : card_14
    case 15: return oneColorCards ? card_15_y : card_15
    case 16: return oneColorCards ? card_16_y : card_16
    default: break
  }
}

const cardCover = (cover) => {
  switch (cover) {
    case 1: return card_cover_01
    case 2: return card_cover_02
    case 3: return card_cover_03
    case 4: return card_cover_04
    case 5: return card_cover_05
    case 6: return card_cover_06
    default: break
  }
}

const Card = (props) => {
  let className = 'card flip-card';
  if (props.done) {
    className = className + ' done';
  }
  const classNameWithAnimation = className + ' animate';
  return (
    <div className={props.opened ? classNameWithAnimation : className} key={props.cellId}
      onClick={() => {
        if (!props.done && !props.opened) props.clickCard({
          fruitId: props.fruitId, opened: props.opened, cellId: props.cellId, done: props.done
        })
      }}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={`${cardCover(props.cardCover)}`} alt='' />
        </div>
        <div className="flip-card-back">
          <img src={`${cardFruit(props.fruitId, props.oneColorCards)}`} alt='' />
        </div>
      </div>
    </div >
  )
}

export default Card