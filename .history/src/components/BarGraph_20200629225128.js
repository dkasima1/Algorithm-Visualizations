import React from "react";

class BarGraph extends React.Component {

    render() {
        this.draw();
        return (
            <canvas id="myGraph" height="720" width="1080" /> 
        )
    }

    draw() {
        let canvas = document.getElementById("myGraph");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle("red");
        ctx.fillRect(0,0,100,100);
    }
}

export default BarGraph;