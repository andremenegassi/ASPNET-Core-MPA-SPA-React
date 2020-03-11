import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MyH1 extends Component {

    constructor(props) {

        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.children}</h1>
              
            </div>
        );
    }
}