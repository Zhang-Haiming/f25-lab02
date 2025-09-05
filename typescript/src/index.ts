import { newRenderer } from './renderer.js'
import { Shape } from './shapes/shape.js'
import { newRectangle } from './shapes/rectangle.js'
import { newCircle } from './shapes/circle.js'
import { newSquare } from './shapes/square.js'

const rectangle: Shape = newRectangle(2, 3)
const circle: Shape = newCircle(1)
const square: Shape = newSquare(3)
const rendererRectangle = newRenderer(rectangle)
const rendererCircle = newRenderer(circle)
const rendererSquare = newRenderer(square)

rendererRectangle.draw()
rendererCircle.draw()
rendererSquare.draw()
