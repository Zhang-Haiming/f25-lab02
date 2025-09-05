// import { Rectangle } from './shapes/rectangle.js'
import { Shape } from './shapes/shape.js'

interface Renderer {
  draw: () => void
}
function newRenderer (rectangle: Shape): Renderer {
  return {
    draw () {
      const area: number = rectangle.computeArea()
      console.log(`Shape drawn\nIts area is ${area}`)
    }
  }
}

export { newRenderer }
