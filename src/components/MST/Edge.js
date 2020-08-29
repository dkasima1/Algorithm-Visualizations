import context from "react-bootstrap/esm/AccordionContext";

const { DropdownHeader } = require("react-bootstrap/Dropdown");

class Edge {
    constructor(start, end, context, label) {
        this.start_x = start[0];
        this.start_y = start[1];
        this.end_x = end[0];
        this.end_y = end[1];
        this.weight = label;
        this.c = context;
    } 

    draw() {
        this.c.beginPath();
        this.c.moveTo(this.start_x, this.start_y);
        this.c.lineTo(this.end_x, this.end_y);
        this.c.strokeStyle = "blue";
        this.c.stroke();
        let dx = this.end_x - this.start_x;
        let dy = this.end_y - this.start_y;
        let p = [this.start_x, this.start_y];
        let pad = 0.6;
        this.c.save();
        this.c.textAlign = 'center';
        this.c.translate(p[0] + dx * pad, p[1] + dy * pad);
        this.c.font = "20px Georgia";
        this.c.fillText(this.weight, 0, 0);
        this.c.restore();
    }
}

export default Edge;