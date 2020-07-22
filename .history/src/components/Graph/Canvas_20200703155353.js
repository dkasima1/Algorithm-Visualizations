import React from "react";
import './Canvas.css';
import Rectangle from './Rectangle';
import Bubble_sort from '../Sorting/Bubble_Sort'

// https://philna.sh/blog/2018/09/27/techniques-for-animating-on-the-canvas-in-react/#:~:text=To%20get%20a%20ref%20to,to%20the%20ref%20you%20created.&text=Now%20you%20have%20the%20context,and%20animate%20all%20you%20like.

class Canvas extends React.Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.rect = []
    }

    // componentDidUpdate() {
        
    // }

    componentDidMount() {

        

        // Generate bars of bargraph
        const canvas = this.canvasRef.current;
        let ctx = canvas.getContext("2d");

        let width = 54;
        let posX = 0;

        ctx.fillStyle = "red";
        ctx.strokeStyle ="black"

        this.rect = []
        for (let i = 0; i < arr.length; i++) {
            let height = arr[i] * (canvas.height/100);
            rect.push(new Rectangle(height, width, canvas.height, posX, ctx))
            // ctx.fillRect(posX, canvas.height - height, width, height);
            // ctx.strokeRect(posX, canvas.height - height, width, height);
            this.rect[i].draw();
            posX += 54;
        }
    }
    
    render() {
        return (
            <div>
                {/* <Bubble_sort arr={this.rect}/> */}
                <canvas ref={this.canvasRef} height="720" width="1080" /> 
            </div>
        )
    }

    // draw() {
        
    // }
}

export default Canvas;