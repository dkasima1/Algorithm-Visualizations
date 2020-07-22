import React from "react";

class BarGraph extends React.Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
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

export default BarGraph;