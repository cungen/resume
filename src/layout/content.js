import styles from './content.css';
import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Content extends Component {
    render() {
        return (
            <div className={styles.root}>
                {this.props.children}
            </div>
        );
    }
};
