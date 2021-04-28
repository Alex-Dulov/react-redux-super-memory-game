import { RESTART_GAME, CLICK_CARD, POST_CLICK_CARD } from '../constants/constants'


const initialState = {
  visibleStart: true,
  visibleVictory: false,
  fieldRows: 4,
  fieldCols: 4, //TODO --> optional (easy - 4, normal - 6, hard - 8)
  maxCards: 8, //TODO --> optional (easy - 8, normal - 12, hard - 16)
  cardsMap: [],
  maxDoneCards: 16, //TODO --> this.fieldRows * this.fieldCols
  allDoneCards: 0
}

const setCardsMap = (state) => {
  let result = [],
    test = [0, 0, 0, 0, 0, 0, 0, 0],
    fruitId = 0,
    cellId = ''
  for (let i = 0; i < state.fieldRows; i++) {
    result.push([])
    for (let j = 0; j < state.fieldCols; j++) {
      let k = 0
      while (k < 1) {
        fruitId = Math.floor(Math.random() * 8 + 1)
        k++
        (test[fruitId - 1] === 2) ? k = 0 : test[fruitId - 1] += 1
      }
      cellId = Number(String(i) + String(j))
      result[i].push({ cellId, fruitId, opened: false, done: false, animate: 'start' })
    }
  }
  return result
}

const testCardsMap = (state, card) => {
  let currentCard = [-1, -1]

  for (let i = 0; i < state.cardsMap.length; i++) {
    for (let j = 0; j < state.cardsMap[i].length; j++) {
      if (card.cellId === state.cardsMap[i][j].cellId && currentCard[0] === -1) {
        state.cardsMap[i][j].opened = true
        //state.cardsMap[i][j].animate = 'open'
        currentCard = [i, j]
        i = 0
        j = 0
      }
      if (currentCard[0] !== -1 && state.cardsMap[i][j].opened === true
        && state.cardsMap[currentCard[0]][currentCard[1]] !== state.cardsMap[i][j]
        && state.cardsMap[i][j].done !== true) {
        if (state.cardsMap[i][j].fruitId === state.cardsMap[currentCard[0]][currentCard[1]].fruitId) {
          if (state.cardsMap[i][j].done === false) {
            state.allDoneCards += 2
            //state.cardsMap[i][j].animate = 'none'
            //state.cardsMap[currentCard[0]][currentCard[1]].animate = 'none'
          }
          state.cardsMap[i][j].done = true
          state.cardsMap[currentCard[0]][currentCard[1]].done = true
        }
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
        state.cardsMap[i][j].opened = true
        //state.cardsMap[i][j].animate = 'open'
        currentCard = [i, j]
        i = 0
        j = 0
      }
      if (currentCard[0] !== -1 && state.cardsMap[i][j].opened === true
        && state.cardsMap[currentCard[0]][currentCard[1]] !== state.cardsMap[i][j]
        && state.cardsMap[i][j].done !== true) {
        if (state.cardsMap[i][j].fruitId === state.cardsMap[currentCard[0]][currentCard[1]].fruitId) {
          if (state.cardsMap[i][j].done === false) {
            state.allDoneCards += 2
            //state.cardsMap[i][j].animate = 'none'
            //state.cardsMap[currentCard[0]][currentCard[1]].animate = 'none'
          }
          state.cardsMap[i][j].done = true
          state.cardsMap[currentCard[0]][currentCard[1]].done = true
        } else {
          if (state.cardsMap[currentCard[0]][currentCard[1]].done === false) {
            state.cardsMap[i][j].opened = false
            state.cardsMap[currentCard[0]][currentCard[1]].opened = false
            //state.cardsMap[i][j].animate = 'close'
            //state.cardsMap[currentCard[0]][currentCard[1]].animate = 'close'
          }
        }
      }
    }
  }

  if (state.allDoneCards === state.maxDoneCards) {
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
    default:
      return state
  }
}

export default game

