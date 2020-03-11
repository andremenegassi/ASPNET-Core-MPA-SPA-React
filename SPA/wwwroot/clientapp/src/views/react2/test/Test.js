import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Test extends Component {

    constructor(props) {

        super(props);
    }

    render() {
        return (
            <div>
                <h2>{this.props.children}</h2>

            </div>
        );
    }
}