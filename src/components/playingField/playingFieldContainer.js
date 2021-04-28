import actions from '../../store/actions/play-actions'
import playingField from './playingField'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
  return {
    cardsMap: state.game.cardsMap,
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
      dispatch(actions.clickCardActionCreator(card))
      setTimeout(() => {
        dispatch(actions.postClickCardActionCreator(card))
      }, 600)

    }
  }
}

const playingFieldContainer = connect(mapStateToProps, mapDispatchToProps)(playingField)

export default playingFieldContainer