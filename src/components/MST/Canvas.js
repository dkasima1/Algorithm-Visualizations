import './Canvas.css';
import Node from './Node';
import Edge from './Edge';

// https://philna.sh/blog/2018/09/27/techniques-for-animating-on-the-canvas-in-react/#:~:text=To%20get%20a%20ref%20to,to%20the%20ref%20you%20created.&text=Now%20you%20have%20the%20context,and%20animate%20all%20you%20like.
export default class Canvas {
    constructor(canvasRef) {
        this.canvasRef = canvasRef;
        this.nodes = {0: null, 1: null, 2: null, 3: null, 4: null, 5: null,
                      6: null, 7: null, 8: null, 9: null};
        this.pos = [[500, 100], [350, 100], [500, 350], [800, 400], [400, 600],
                    [600, 630], [200, 500], [150, 200], [900, 200], [950, 600]];
        this.edges = [];
        this.edge_weights = [];
    }

    pairwise(list) {
        if (list.length < 2) { return []; }
        let first = list[0],
            rest  = list.slice(1),
            pairs = rest.map(function (x) { return [first, x]; });
        return pairs.concat(this.pairwise(rest));
    }

    createEdges() {
        let permutations = this.pairwise([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        const shuffled = permutations.sort(() => 0.5 - Math.random());
        // Get sub-array of first n elements after shuffled
        let selected = shuffled.slice(0, 15);
        while (this.edge_weights.length < 15) {
            let num = Math.floor(Math.random() * 20 + 1);
            if (this.edge_weights.indexOf(num) === -1) {
                this.edge_weights.push(num)
            }
        }

        let edges = selected;
        const canvas = this.canvasRef.current;
        let ctx = canvas.getContext("2d");

        for (let i = 0; i < edges.length; i++) {
            let temp = new Edge(this.pos[edges[i][0]], this.pos[edges[i][1]], ctx, this.edge_weights[i]);
            this.edges.push(temp);
            this.nodes[edges[i][0]].addEdge(temp);
            this.nodes[edges[i][1]].addEdge(temp);
        }
        console.log(this.nodes);
    }

    createNodes() {
        const canvas = this.canvasRef.current;
        let ctx = canvas.getContext("2d");
        for (let i = 0; i < this.pos.length; i++) {
            this.nodes[i] = new Node(this.pos[i][0], this.pos[i][1], ctx, i);
        }
    }

    getNodes() {
        return this.nodes;
    }

    getEdges() {
        return this.edges;
    }

    draw() {
        // Generate bars of bargraph
        
        const canvas = this.canvasRef.current;
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, 1080, 720);

        ctx.fillStyle = "red";
        ctx.strokeStyle ="black"
        for (let i = 0; i < this.edges.length; i++) {
            this.edges[i].draw();
        }
        for (const [id, node] of Object.entries(this.nodes)) {
            node.draw();
        }
    }
}