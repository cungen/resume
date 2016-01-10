import styles from './experiences.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Colors from 'material-ui/lib/styles/colors';

export default class Experiences extends Component {
    render() {
        return (
            <div>
                <div className='title'>
                    <span>Experiences</span>
                </div>
                <div style={{clear: 'both', overflow: 'hidden'}}>
                    <div className='ctx-left'>
                        <div className={styles.timeline} style={{height: 110}}>
                            至今
                        </div>
                    </div>
                    <div className='ctx-right'>
                        <div className={styles.experiences}>
                            <div className={styles.company}>医渡云技术有限公司</div>
                            <div className={styles.project}>科研平台</div>
                            <div className={styles.content}>医生科研项目的管理, 可以让医生通过设置一些逻辑条件来筛选出想要的病人数据,
                                同时也可以选择要观测的指标和进行在线分析导出操作, 同样采用angular开发, d3和highchart做数据可视化,
                                使用我们自己的组件库来进行页面组织
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{clear: 'both', overflow: 'hidden'}}>
                    <div className='ctx-left'>
                        <div className={styles.timeline} style={{height: 140}}>
                            2015-08
                        </div>
                    </div>
                    <div className='ctx-right'>
                        <div className={styles.experiences}>
                            <div className={styles.company}>医渡云技术有限公司</div>
                            <div className={styles.project}>医渡搜索</div>
                            <div className={styles.content}>病历搜索和患者的facebook，早期采用node的express+angular，后因前后端分离，
                                前端页面重构只采用了angular后端由python开发, 其中样式框架的组织，专家搜索，
                                用户反馈及搜索历史的记录与还原等均由本人开发完成；我们开发了自己的组件和样式库，项目中也同时用到了highchart,d3等数据可视化的内容</div>
                        </div>
                    </div>
                </div>
                <div style={{clear: 'both', overflow: 'hidden'}}>
                    <div className='ctx-left'>
                        <div className={styles.timeline} style={{height: 110}}>
                            2014-06
                        </div>
                    </div>
                    <div className='ctx-right'>
                        <div className={styles.experiences}>
                            <div className={styles.company}>医渡云技术有限公司</div>
                            <div className={styles.project}>医渡app</div>
                            <div className={styles.content}>app采用了前端框架ionic开发，ionic以angular为基础，app中登录，以及健康问卷内容，套餐等内容均由本人开发
                                开发过程还使用了sass,jade等前端的预处理工具，bower前端的包管理工具，gulp前端的自动化构建工具</div>
                        </div>
                    </div>
                </div>
                <div style={{clear: 'both', overflow: 'hidden'}}>
                    <div className='ctx-left'>
                        <div className={styles.timeline} style={{height: 50}}>
                            2014-02
                        </div>
                    </div>
                    <div className='ctx-right'>
                        <div className={styles.experiences}>
                            <div className={styles.company}>翼燊恒通科贸有限公司</div>
                            <div className={styles.content}>PHP和页面开发, 主要工作根据设计稿精准还原页面</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
