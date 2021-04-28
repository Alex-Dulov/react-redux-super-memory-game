import actions from '../../store/actions/play-actions'
import Header from './header'
import { connect } from 'react-redux'


let mapStateToProps = (state) => { //TODO <--- props for options
  return {}
}

let mapDispatchToProps = (dispatch) => {
  return {
    restartGame: () => {
      dispatch(actions.restartActionCreator())
    }
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer