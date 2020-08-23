import React from 'react';
import Canvas from '../Graph/Canvas';
import { Button, Col, Container, Row } from 'react-bootstrap';

class Quick_Sort extends React.Component {

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
        this.canvas.generate(20);
        this.canvas.draw(this.canvas.getNumArr());
        this.initialState = this.canvas.getNumArr();
        this.setState({num: this.canvas.getNumArr()}, () => console.log(this.state.num));
    }

    draw(arr) {
        // Draws or updates current graph.
        this.setState({rect: this.canvas.draw(arr)});
    }

    async swap(leftIndex, rightIndex) {
        let arr = this.state.num.map((x) => x);
        let right = arr[leftIndex];
        let left = arr[rightIndex];
        arr[leftIndex] = left;
        arr[rightIndex] = right;
        this.canvas.updateNumArr(arr);
        this.draw(arr);
        this.setState({num: arr});
        await this.sleep(20);
        
    }

    async partition(left, right) {
        var pivot = this.state.num[Math.floor((right + left) / 2)]; //middle element
        var i = left; //left pointer
        var j = right; //right pointer
        while (i <= j) {
            while (this.state.num[i] < pivot) {
                i++;
            }
            while (this.state.num[j] > pivot) {
                j--;
            }
            if (i <= j) {
                await this.swap(i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }

    async quickSort(left, right) {
        console.log(left, right);
        var index;
        if (this.state.num.length > 1) {
            index = await this.partition(left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                await this.quickSort(left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                await this.quickSort(index, right);
            }
        }
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
        this.quickSort(0, this.state.num.length - 1);
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

export default Quick_Sort;