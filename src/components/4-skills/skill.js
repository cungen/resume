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
        return (
            <div>
                <div className='title'>
                    <span>Skills</span>
                </div>
                <div style={{clear: 'both', overflow: 'hidden'}}>
                    <div className='ctx-left'>
                        能力
                    </div>
                    <div className='ctx-right'>
                        <ul>
                            <li>
                                1. 项目经验丰富，能根据项目要求，做出合理且有效的实现方案
                            </li>
                            <li>
                                2. 前端开发经验丰富，能熟练使用原生JS及CSS，有较多的优化经验
                            </li>
                            <li>
                                3. 可视化开发经验丰富，可以熟练使用d3做出丰富的可视化效果
                            </li>
                            <li>
                                4. 熟练使用Vue框架，能规划合理的项目结构、组件实现方式，有一定的Vue的编译及性能优化能力
                            </li>
                            <li>
                                5. 有过NodeJS的开发经验，对后端有一定的了解
                            </li>
                            <li>
                                6. 软件工程专业，linux、数据库、网络、算法等专业课程有相关基础
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};
