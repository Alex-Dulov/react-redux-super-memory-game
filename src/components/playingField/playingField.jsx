import React from 'react'
import style from './playingField.module.css'
import Card from './card/card'
import Start from './start/start'
import Victory from './victory/victory'


const PlayingField = (props) => {
  return (
    <div className={style.field_container}>
      <div className={style.field_body}>
        {props.cardsMap.map((r, i) => <div className={style.row} key={i + 200}>
          {props.cardsMap[i].map((c, j) =>
            <div className={style.card_wrapper} key={props.cardsMap[i][j].cellId + 100}>
              <Card
                fruitId={props.cardsMap[i][j].fruitId}
                opened={props.cardsMap[i][j].opened}
                cellId={props.cardsMap[i][j].cellId}
                done={props.cardsMap[i][j].done}
                cardCover={props.cardCover}
                oneColorCards={props.oneColorCards}
                clickCard={props.clickCard}
              />
            </div>)}
        </div>)}
      </div>
      <Start isVisible={props.isVisibleStart} restartGame={props.restartGame} />
      <Victory isVisible={props.isVisibleVictory} restartGame={props.restartGame} />
    </div>
  )
}

export default PlayingField