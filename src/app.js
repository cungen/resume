import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './layout/header';
import Content from './layout/content';
import Profile from './components/0-profile/profile';
import Education from './components/1-education/education';
import Experiences from './components/2-experiences/experiences';
import Certificate from './components/3-certificate/certificate';
import Skills from './components/4-skills/skill';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content>
                    <Profile />
                    <Education />
                    <Experiences />
                    <Certificate />
                    <Skills />
                </Content>
            </div>
        );
    }
};