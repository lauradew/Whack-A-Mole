export const GAMEON = 'GAMEON'
export const HIT = 'HIT'
export const MISSED = 'MISSED'
export const ACTIVATE_MOLE = 'ACTIVATE_MOLE'
export const RESTART = 'RESTART'
export const DEACTIVATE_MOLE = 'DEACTIVATE_MOLE'

const gameControl = () => {
  return {
    type: GAMEON,
  }
}

const moleWhacked = () => {
  return {
    type: HIT,
  }
}

const moleMissed = () => {
  return {
    type: MISSED,
  }
}

const generateRandomMole = () => {
  return {
    type: ACTIVATE_MOLE,
    moleIndex: Math.floor(Math.random() * Math.floor(10)),
    moleIndexArr: [1, 3, 5]//Math.floor(Math.random() * Math.floor(10)),
  }
}

const deactiveMoleInState = (moleId) => {
  return {
    type: DEACTIVATE_MOLE,
    moleIndex: moleId
  }
}

const resetGame = () => {
  return {
    type: RESTART,
  }
}

export { gameControl, moleWhacked, moleMissed, generateRandomMole, deactiveMoleInState, resetGame }