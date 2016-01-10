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
                    <div className='ctx-right'>
                        <div className={styles.profile}>
                            两年前端开发经验，热爱技术，熟悉前端各种开发语言，工具和框架，可以解决浏览器兼容性问题，可以用前端框架（Ionic等）开发跨平台应用，爱好小球类，看书、漫画，各种游戏等
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
