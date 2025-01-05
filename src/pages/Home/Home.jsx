import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutMe/>
            <Skills/>
            <Projects/>
        </div>
    );
};

export default Home;