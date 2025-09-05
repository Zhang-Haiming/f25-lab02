import { Shape } from './shape.js'

class Rectangle implements Shape {
  private readonly width: number
  private readonly height: number
  constructor (width: number, height: number) {
    this.width = width
    this.height = height
  }

  computeArea (): number {
    return this.width * this.height
  }
}

function newRectangle (width: number, height: number): Rectangle {
  return new Rectangle(width, height)
}

export { Rectangle, newRectangle }

/*
interface Rectangle {
    width: number,
    height: number,
    computeArea: () => number
}

function newRectangle(width: number, height: number): Rectangle {
    return {
        width,
        height,

        computeArea: function (): number {
            return width * height
        }
    }
}

export { Rectangle, newRectangle }
*/
