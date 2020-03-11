import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MyButton from '../../components/MyButton';
import MyH1 from '../react2/MyH1';
import Test from '../react2/test/Test';

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 12
        });
    }

    render() {
        return (
            <div>

                <MyH1>Counter 222222222</MyH1>
                <Test>Tesgfgfgfte</Test>

                <p>This is a simple example of a React component.</p>

                <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

                <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
                <div>Meu componente</div>
                <MyButton />
                <MyButton />
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'));