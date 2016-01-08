import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Content extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
};
