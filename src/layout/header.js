import styles from './header.css';
import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Header extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.left}>
                    <div className={styles.avatar}>
                        <img src='./public/images/avatar.png' alt='avatar'/>
                    </div>
                    <div className={styles.name}>姜存根</div>
                    <div className={styles.position}>Frontend Engineer</div>
                </div>
                <div className={styles.right}>
                    <div className="phone">
                        <i className="icon-phone"></i>
                        132-4006-2495
                    </div>
                    <div className="phone">
                        <i className="icon-envelop"></i>
                        <a href="mailto:1360571582@qq.com">1360571582@qq.com</a>
                    </div>
                </div>
            </div>
        );
    }
};
