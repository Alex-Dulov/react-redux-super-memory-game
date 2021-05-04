import { RESTART_GAME, CLICK_CARD, POST_CLICK_CARD, DIFFICULTY, IS_COLOR } from '../constants/constants'


const actions = {
  restartActionCreator: () => ({
    type: RESTART_GAME
  }),
  clickCardActionCreator: (card) => ({
    type: CLICK_CARD,
    card
  }),
  setDifficultyActionCreator: (params) => ({
    type: DIFFICULTY,
    params
  }),
  isColorCardsActionCreator: (params) => ({
    type: IS_COLOR,
    params
  }),
  postClickCardActionCreator: (card) => ({
    type: POST_CLICK_CARD,
    card
  })
}

export default actions