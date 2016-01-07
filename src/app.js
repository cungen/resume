import React, { Component } from 'react';
import { render } from 'react-dom';

import BaseInfo from './base-info';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header>
                    <BaseInfo />
                </Header>
                <Content>
                    <Description></Description>
                    <Education></Education>
                    <Experience></Experience>
                    <Skills></Skills>
                </Content>
            </div>
        );
    }
};