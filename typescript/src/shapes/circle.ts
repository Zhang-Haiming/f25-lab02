import { Shape } from './shape.js'

class Circle implements Shape {
  private readonly radius: number
  constructor (radius: number) {
    this.radius = radius
  }

  computeArea (): number {
    return Math.PI * this.radius * this.radius
  }
}

function newCircle (radius: number): Circle {
  return new Circle(radius)
}

export { Circle, newCircle }

/*
function circle(radius: number): Shape {
    return {
        radius,
        computeArea: function (): number {
            return Math.PI * radius * radius
        }
    }
}

export { circle }
*/
