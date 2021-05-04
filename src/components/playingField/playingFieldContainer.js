import actions from '../../store/actions/play-actions'
import playingField from './playingField'
import { connect } from 'react-redux'


let timeOut = null

let mapStateToProps = (state) => {
  return {
    cardsMap: state.game.cardsMap,
    cardCover: state.game.cardCover,
    oneColorCards: state.game.oneColorCards,
    isVisibleStart: state.game.visibleStart,
    isVisibleVictory: state.game.visibleVictory
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    restartGame: () => {
      dispatch(actions.restartActionCreator())
    },
    clickCard: (card) => {
      clearInterval(timeOut)
      dispatch(actions.clickCardActionCreator(card))
      timeOut = setTimeout(() => {
        dispatch(actions.postClickCardActionCreator(card))
      }, 700)
    }
  }
}

const playingFieldContainer = connect(mapStateToProps, mapDispatchToProps)(playingField)

export default playingFieldContainer