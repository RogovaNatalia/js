'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() { //метод
        return this.height * this.width;
    }
}

class ColoredRechtangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width); // вызывает что было у родителя
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);   
    }
}


const div = new ColoredRechtangleWithText(25, 10, 'Hello World', 'red');
div.showMyProps();
console.log(div.calcArea());   
    


// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());