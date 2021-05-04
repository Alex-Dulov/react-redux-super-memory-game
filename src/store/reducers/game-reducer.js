import { RESTART_GAME, CLICK_CARD, POST_CLICK_CARD, DIFFICULTY, IS_COLOR } from '../constants/constants'


const initialState = {
  visibleStart: true,
  visibleVictory: false,
  fieldRows: 4,
  fieldCols: 4,
  cardsMap: [],
  allDoneCards: 0,
  cardCover: 2,
  openedCards: 0,
  oneColorCards: false
}

const setBackground = () => {
  const setBackgroundColor = (color) => document.getElementsByTagName('body')[0].bgColor = color
  let color = '#' + Math.floor(Math.random() * 6 + 2) +
    Math.floor(Math.random() * 4 + 2) +
    Math.floor(Math.random() * 6 + 1)
  setBackgroundColor(color)
}
setBackground()

const setCardsMap = (state) => {
  state.backgroundColor = setBackground()
  state.cardCover = Math.floor(Math.random() * 6 + 1)
  let result = [],
    test = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    fruitId = 0,
    cellId = ''
  for (let i = 0; i < state.fieldRows; i++) {
    result.push([])
    for (let j = 0; j < state.fieldCols; j++) {
      let k = 0
      while (k < 1) {
        fruitId = Math.floor(Math.random() * state.fieldCols * 2 + 1)
        k++
        (test[fruitId - 1] === 2) ? k = 0 : test[fruitId - 1] += 1
      }
      cellId = Number(String(i) + String(j))
      result[i].push({ cellId, fruitId, opened: false, done: false })
    }
  }
  return result
}

const testCardsMap = (state, card) => {
  for (let i = 0; i < state.cardsMap.length; i++) {
    for (let j = 0; j < state.cardsMap[i].length; j++) {
      if (card.cellId === state.cardsMap[i][j].cellId && state.openedCards < 2) {
        state.cardsMap[i][j].opened = true
        state.openedCards++
      }
    }
  }
  return state
}

const postTestCardsMap = (state, card) => {
  let currentCard = [-1, -1]
  for (let i = 0; i < state.cardsMap.length; i++) {
    for (let j = 0; j < state.cardsMap[i].length; j++) {
      if (card.cellId === state.cardsMap[i][j].cellId && currentCard[0] === -1) {
        currentCard = [i, j]
        i = 0
        j = 0
      }
      if (currentCard[0] !== -1 && state.cardsMap[i][j].opened
        && state.cardsMap[currentCard[0]][currentCard[1]] !== state.cardsMap[i][j]
        && !state.cardsMap[i][j].done) {
        if (state.cardsMap[i][j].fruitId === state.cardsMap[currentCard[0]][currentCard[1]].fruitId
          && state.cardsMap[i][j].opened && state.cardsMap[currentCard[0]][currentCard[1]].opened) {
          if (!state.cardsMap[i][j].done) {
            state.allDoneCards += 2
          }
          state.cardsMap[i][j].done = true
          state.cardsMap[currentCard[0]][currentCard[1]].done = true
          state.openedCards = 0
        } else {
          if (!state.cardsMap[currentCard[0]][currentCard[1]].done) {
            state.cardsMap[i][j].opened = false
            state.cardsMap[currentCard[0]][currentCard[1]].opened = false
            state.openedCards = 0
          }
        }
      }
    }
  }
  if (state.allDoneCards === state.fieldCols * 4) {
    state.visibleVictory = true
    state.allDoneCards = 0
    return state
  } else return state
}

const game = (state = initialState, action) => {
  const getCopyState = (state) => {
    if (state.cardsMap[0] !== undefined) {
      let copyState = { ...state }
      copyState.cardsMap = [...state.cardsMap]
      for (let i = 0; i < state.fieldRows; i++) {
        copyState.cardsMap[i] = [...state.cardsMap[i]]
        for (let j = 0; j < state.fieldCols; j++) {
          copyState.cardsMap[i][j] = { ...state.cardsMap[i][j] }
        }
      }
      return copyState
    } else return state
  }
  let copyState = getCopyState(state)
  switch (action.type) {
    case RESTART_GAME:
      copyState.cardsMap = setCardsMap(copyState)
      copyState.visibleStart = false
      copyState.visibleVictory = false
      return { ...copyState }
    case CLICK_CARD:
      copyState = testCardsMap(copyState, action.card)
      return { ...copyState }
    case POST_CLICK_CARD:
      copyState = postTestCardsMap(copyState, action.card)
      return { ...copyState }
    case DIFFICULTY:
      copyState.fieldCols = action.params
      return { ...copyState }
    case IS_COLOR:
      if (!copyState.oneColorCards) {
        copyState.oneColorCards = true
      } else if (copyState.oneColorCards) {
        copyState.oneColorCards = false
      }
      return { ...copyState }
    default:
      return state
  }
}

export default game

