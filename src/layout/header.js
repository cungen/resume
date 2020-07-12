import styles from './header.css';
import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Header extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.left}>
                    <div className={styles.avatar}>
                        <img src='./public/images/avatar.jpg' alt='avatar'/>
                    </div>
                    <div className={styles.name}>姜存根</div>
                    <div className={styles.position}>Frontend Engineer</div>
                </div>
                <div className={styles.right}>
                    <div className='phone'>
                        <i className='icon-phone' />
                        132-4006-2495
                    </div>
                    <div className='phone'>
                        <i className='icon-envelop' />
                        <a href='mailto:1360571582@qq.com'>1360571582@qq.com</a>
                    </div>
                    <div className='phone'>
                        <i className='icon-chef' />
                        <a href='http://iamroot.cn' target='_blank'>iamroot.cn</a>
                    </div>
                    <div className={styles.aboutMe}>
                        {/* <a href='http://weibo.com/2107571300' target='_blank' title='weibo'>
                            <i className='icon-sina-weibo'/>
                        </a> */}
                        <a href='https://github.com/cungen' target='_blank' title='github'>
                            <i className='icon-github2'/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
};
