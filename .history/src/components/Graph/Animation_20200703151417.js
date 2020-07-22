import React from 'react';

class Animation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: props.x, finalX: props.finalX, speed: props.speed};
        this.dx = (this.state.finalX - this.state.x)/this.state.speed;
        this.updateAnimationState = this.updateAnimationState.bind(this);
    }

    componentDidMount() {
        this.rAF = requestAnimationFrame(this.updateAnimationState);
    }

    updateAnimationState() {
        this.setState(prevState => ({ x: prevState.x + this.dx }));
        if (this.state.x == this.state.finalX) {
            this.componentWillUnmount();
        }
        this.this.rAF = requestAnimationFrame(this.updateAnimationState);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.rAF);
    }

    render() {
        return <Canvas x={ this.state.x } />;
    }
}