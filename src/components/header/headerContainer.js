import actions from '../../store/actions/play-actions'
import Header from './header'
import { connect } from 'react-redux'


let mapStateToProps = (state) => { //For other options
  return {
    oneColorCards: state.game.oneColorCards
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    restartGame: () => {
      dispatch(actions.restartActionCreator())
    },
    setDifficulty: (params) => {
      dispatch(actions.setDifficultyActionCreator(params))
    },
    isColorCards: (params) => {
      dispatch(actions.isColorCardsActionCreator(params))
    }
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer