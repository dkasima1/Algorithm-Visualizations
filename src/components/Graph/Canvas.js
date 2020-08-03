import './Canvas.css';
import Rectangle from './Rectangle';

// https://philna.sh/blog/2018/09/27/techniques-for-animating-on-the-canvas-in-react/#:~:text=To%20get%20a%20ref%20to,to%20the%20ref%20you%20created.&text=Now%20you%20have%20the%20context,and%20animate%20all%20you%20like.
export default class Canvas {
    constructor(canvasRef) {
        this.canvasRef = canvasRef;
        this.rect = [];
        this.arr = [];
    }

    generate(size) {

        // Generate an array of random numbers.
        while (this.arr.length < size) {
            var num = Math.floor(Math.random() * 100 + 1);
            if (this.arr.indexOf(num) === -1) {
                this.arr.push(num)
            }
        }
    }


    getNumArr() {
        return this.arr
    }

    updateNumArr(ra) {
        this.arr = ra;
    }

    draw(arr) {
        // Generate bars of bargraph
        
        const canvas = this.canvasRef.current;
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, 1080, 720);

        let width = 54;
        let posX = 0;

        ctx.fillStyle = "red";
        ctx.strokeStyle ="black"

        let rect = [];
        for (let i = 0; i < arr.length; i++) {
            let height = arr[i] * (canvas.height/100);
            rect.push(new Rectangle(height, width, canvas.height, posX, ctx))
            rect[i].draw();
            posX += 54;
        }

        return rect;
        
    }
}

// export default Canvas;