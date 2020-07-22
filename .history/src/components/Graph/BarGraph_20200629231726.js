import React from "react";

// https://philna.sh/blog/2018/09/27/techniques-for-animating-on-the-canvas-in-react/#:~:text=To%20get%20a%20ref%20to,to%20the%20ref%20you%20created.&text=Now%20you%20have%20the%20context,and%20animate%20all%20you%20like.

class Canvas extends React.Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        let arr = []
        while (arr.length < 20) {
            var num = Math.floor(Math.random() * 100 + 1);
            if (arr.indexOf(num) === -1) {
                arr.push(num)
            }
        }
        console.log(arr);
        const canvas = this.canvasRef.current;
        let ctx = canvas.getContext("2d");
        ctx.fillRect(0,0,100,100);
        ctx.fillStyle = "red";
 
    }
    render() {
        return (
            <div>
                <canvas ref={this.canvasRef} height="720" width="1080" /> 
            </div>
        )
    }

    // draw() {
        
    // }
}

export default Canvas;