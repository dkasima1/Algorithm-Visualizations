import React from 'react';
import Canvas from './Canvas';
import { Button, Col, Container, Row } from 'react-bootstrap';

class Kruskal extends React.Component {

    constructor(props) {
        super(props);

        // Initialize canvas and create a reference to it.
        this.canvasRef = React.createRef();
        this.canvas = new Canvas(this.canvasRef);

        // Extra functions that trigger when an event occurs.
        this.handleEnter = this.handleEnter.bind(this);
        this.handleReset = this.handleReset.bind(this);

        // The state of the graph.
        this.state = { num: [], rect: [] };
        this.initialState = [];
    }
    
    componentDidMount() {
        // Creates a graph and initializes starting state.
        // this.canvas.generate(20);
        this.canvas.createNodes();
        this.canvas.createEdges();
        this.canvas.draw();
        //this.initialState = this.canvas.getNumArr();
        //this.setState({num: this.canvas.getNumArr()}, () => console.log(this.state.num));
    }

    draw(arr) {
        // Draws or updates current graph.
        this.setState({rect: this.canvas.draw()});
    }

    render() {
        return (
            <Container>
                <canvas ref={this.canvasRef} height="720px" width="1080px" />
                <Row>
                    <Col md={{span: 1, offset: 3}}>
                        <Button onClick={this.handleEnter.bind(this)} variant="primary" style={{fontWeight: "bold", position: 'absolute', width: '100px', top: '79px'}}>Sort</Button>
                    </Col>
                    <Col md={{span: 1, offset: 4}}>
                        <Button onClick={this.handleReset.bind(this)} variant="primary" style={{fontWeight: "bold", position: 'absolute', width: '100px', top: '79px'}}>Reset</Button>
                    </Col>
                </Row>
            </Container>  
        )
    }

    handleEnter(e) {
        this.sort();
    }

    handleReset(e) {
        console.log(this.initialState);
        this.setState({num: this.initialState}, () => {
            console.log(this.state.num);
            this.draw(this.state.num);
        });
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}

export default Kruskal;