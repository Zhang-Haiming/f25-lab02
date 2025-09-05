package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.Circle;
import edu.cmu.cs.cs214.lab02.shapes.Rectangle;
import edu.cmu.cs.cs214.lab02.shapes.Shape;
import edu.cmu.cs.cs214.lab02.shapes.Square;

public class Main {
    public static void main(String[] args) {
        Shape rectangle = new Rectangle(2, 3);
        
        Renderer renderer = new Renderer(rectangle);
        renderer.draw();    

        Shape circle = new Circle(5);
        Renderer rendererCircle = new Renderer(circle);
        rendererCircle.draw();

        Shape square = new Square(4);
        Renderer rendererSquare = new Renderer(square);
        rendererSquare.draw();
    }
}
