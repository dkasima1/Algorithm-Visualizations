const { DropdownHeader } = require("react-bootstrap/Dropdown");

class Node {
    constructor(x, y, context, id) {
        this.x = x;
        this.y = y;
        this.c = context;
        this.id = id;
        this.edge_list = [];
    } 

    draw() {
        this.c.beginPath();
        this.c.arc(this.x, this.y, 30, 0, 2 * Math.PI)
        this.c.strokeStyle = "black";
        this.c.fillStyle = "red";
        this.c.fill();
        this.c.stroke();
        this.c.save();

        // Label Node
        this.c.font = "20px Georgia";
        this.c.fillStyle = "white";
        this.c.textAlign = 'center';
        this.c.translate(this.x, this.y);
        this.c.fillText(this.id, 0, 0);
        this.c.restore();
    }

    addEdge(id) {
        if (!(this.edge_list.includes(id))) {
            this.edge_list.push(id);
        }
    }
}

export default Node;