import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import SendEmail from '../contact/SendEmail';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <SendEmail/>
        </div>
    );
};

export default Home;