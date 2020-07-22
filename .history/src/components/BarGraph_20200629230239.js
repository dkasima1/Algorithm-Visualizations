import React from "react";

class BarGraph extends React.Component {

    render() {

        let canvas = document.createElement("CANVAS");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "red"
        ctx.fillRect(0,0,100,100);
        return (
            <canvas id={canvas} height="720" width="1080" /> 
        )
    }

    // draw() {
        
    // }
}

export default BarGraph;