const { DropdownHeader } = require("react-bootstrap/Dropdown");
class Rectangle {
    constructor(height, width, canvasHeight, posX, context) {
        this.x = posX;
        this.h = height;
        this.w = width;
        this.ch = canvasHeight;
        this.c = context;
    } 

    draw() {
        this.c.fillRect(this.x, this.ch - this.h, this.w, this.h);
        this.c.strokeRect(this.x, this.ch - this.h, this.w, this.h);
        this.c.strokeStyle = "black";
        this.c.stroke();
    }

    // animateHelper(finalX, speed) {
    //     dx = (finalX - this.x)/speed;
    //     animate(dx);
    // }
    
    // animate(dx) {
    //     requestAnimationFrame(animate);
    //     this.c.clearRect()
    // }
}

export default Rectangle;