import styles from './profile.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Colors from 'material-ui/lib/styles/colors';

export default class Profile extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className='title'>
                    <span>Profile</span>
                </div>
                <div style={{clear: 'both', overflow: 'hidden'}}>
                    <div className='ctx-left'>
                        简介
                    </div>
                    <div className='ctx-right'>
                        <div className={styles.profile}>
                            <div>6年前端开发经验，热爱技术，熟悉前端各种开发语言，工具和框架，可以解决浏览器兼容性问题，可以用前端框架（Ionic等）开发跨平台应用，爱好鼓捣技术、看漫画、摄影等</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
