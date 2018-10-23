export const GAMEON = 'GAMEON'
export const HIT = 'HIT'
export const ACTIVATE_MOLE = 'ACTIVATE_MOLE'
export const RESTART = 'RESTART'

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

const generateRandomMole = () => {
  return {
    type: ACTIVATE_MOLE,
    moleIndex: Math.floor(Math.random() * Math.floor(10)),
  }
}

const resetGame = () => {
  return {
    type: RESTART,
  }
}

export { gameControl, moleWhacked, generateRandomMole, resetGame }