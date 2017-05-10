import styles from './skills.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import d3 from 'd3';
import Colors from 'material-ui/lib/styles/colors';

export default class Skills extends Component {
    componentDidMount() {
        var color = d3.scale.linear()
            .domain([0.5, 1])
            .range(['lightcoral', 'lightgreen']);

        var chart = d3.selectAll('.data-icon').append('svg')
            .attr('width', function(d) {
                return this.parentElement.clientWidth;
            })
            .attr('height', function(d) {
                return this.parentElement.clientHeight;
            }).append('g')
            .attr('transform', function() {
                var ele = this.parentElement.parentElement;
                return 'translate(' + ele.clientWidth / 2 + ', ' + ele.clientHeight / 2 + ')';
            })
            .append('path')
            .style('fill', function(d, i) {
                var ele = this.parentElement.parentElement.parentElement;
                return color(ele.dataset.percent);
            }).attr('d', function() {
                var ele = this.parentElement.parentElement.parentElement;
                var r = Math.min(ele.clientHeight, ele.clientHeight);
                return d3.svg.arc()
                    .innerRadius(r / 2 * 0.85)
                    .outerRadius(r / 2)
                    .startAngle(0)
                    .endAngle(function(d, i) { return ele.dataset.percent * 2 * Math.PI; })();
            });
    }
    render() {
        const skills = [{
            type: '语言',
            list: [
                [
                    { name: 'html', percent: 0.80, icon: 'html5' },
                    { name: 'js', percent: 0.80, icon: 'js' },
                    { name: 'css', percent: 0.80, icon: 'css3' },
                    { name: 'coffeescript', percent: 0.70, icon: 'coffeescript' },
                    { name: 'sass', percent: 0.90, icon: 'sass' }
                ],
                [
                    { name: 'python', percent: 0.70, icon: 'python' },
                    { name: 'php', percent: 0.65, icon: 'php' }
                ]
            ]
        }, {
            type: '框架',
            list: [
                [
                    { name: 'vue', percent: 0.80, src: 'https://vuejs.org/images/logo.png' },
                    { name: 'angular', percent: 0.85, icon: 'angular' },
                    { name: 'react', percent: 0.80, icon: 'react' }
                ]
            ]
        }, {
            type: '工具',
            list: [
                [
                    { name: 'webpack', percent: 0.85, src: 'https://webpack.js.org/6bc5d8cf78d442a984e70195db059b69.svg' },
                    { name: 'gulp', percent: 0.70, icon: 'gulp' },
                    { name: 'grunt', percent: 0.65, icon: 'grunt' }
                ]
            ]
        }];
        return (
            <div>
                <div className='title'>
                    <span>Skills</span>
                </div>
                <div style={{clear: 'both', overflow: 'hidden'}}>
                    <div className='ctx-right'>
                        {
                            skills.map((s, sIndex) => {
                                return (
                                    <dl key={sIndex} className='skill-list'>
                                        <dt>{s.type}</dt>
                                        {
                                            s.list.map((itemList) => {
                                                return itemList.map((item, index) => {
                                                    return (
                                                        <dd className={styles['skill-item']} title={item.percent * 100 + '%'}>
                                                            <div className="data-icon" data-percent={item.percent}>
                                                                {item.icon ? <i className={'icon-' + item.icon} /> :
                                                                    <img src={item.src} />
                                                                }
                                                            </div>
                                                            <div className='desc'>
                                                                <span>{item.name}</span>
                                                                <br/>
                                                                <span>{item.percent * 100 + '%'}</span>
                                                            </div>
                                                        </dd>
                                                    );
                                                })
                                            })
                                        }
                                    </dl>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
};
