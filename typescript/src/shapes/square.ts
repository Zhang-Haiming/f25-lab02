import { Shape } from './shape.js'

class Square implements Shape {
  private readonly sideLen: number
  constructor (sideLen: number) {
    this.sideLen = sideLen
  }

  computeArea (): number {
    return this.sideLen * this.sideLen
  }
}

function newSquare (sideLen: number): Square {
  return new Square(sideLen)
}

export { Square, newSquare }
/*
function square(sideLen: number): Shape {
    return {
        sideLen,
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { square }
*/
