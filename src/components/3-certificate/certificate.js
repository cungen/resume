import styles from './certificate.css';
import React, { Component } from 'react';

export default class Certificate extends Component {
    render() {
        return (
            <div>
                <div className='title'>
                    <span>Certificate</span>
                </div>
                <div style={{clear: 'both', overflow: 'hidden'}}>
                    <div className='ctx-left'>
                        证书
                    </div>
                    <div className='ctx-right'>
                        <ul>
                            <li className={styles['cer-item']}>
                                1. CET-4
                            </li>
                            <li className={styles['cer-item']}>
                                2. Coursera-Stanford online Machine Learning
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};
