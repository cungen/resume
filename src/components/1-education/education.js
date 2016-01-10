import styles from './education.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Colors from 'material-ui/lib/styles/colors';

export default class Education extends Component {
    render() {
        return (
            <div>
                <div className='title'>
                    <span>Education</span>
                </div>
                <div style={{clear: 'both', overflow: 'hidden'}}>
                    <div className='ctx-left'>
                        ~ 2014
                    </div>
                    <div className='ctx-right'>
                        <div className={styles.school}>
                            <div className={styles.name}>石家庄铁道大学</div>
                            <div className={styles.type}>本科 · 软件工程专业</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
