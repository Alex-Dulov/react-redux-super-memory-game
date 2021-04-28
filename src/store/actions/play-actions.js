import { RESTART_GAME, CLICK_CARD, POST_CLICK_CARD } from '../constants/constants'

const actions = {
  restartActionCreator: () => ({
    type: RESTART_GAME
  }),
  clickCardActionCreator: (card) => ({
    type: CLICK_CARD,
    card
  }),
  postClickCardActionCreator: (card) => ({
    type: POST_CLICK_CARD,
    card
  })
}

export default actions