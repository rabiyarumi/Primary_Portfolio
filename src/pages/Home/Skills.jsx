import React from 'react';
import Marquee from 'react-fast-marquee';

const Skills = () => {

    const skills = [
        { name: 'HTML', logo: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
        { name: 'CSS', logo: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
        { name: 'JavaScript', logo: 'https://cdn.worldvectorlogo.com/logos/javascript.svg' },
        { name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
        { name: 'Firebase', logo: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg' },
        { name: 'Node.js', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
        { name: 'Express.js', logo: 'https://cdn.worldvectorlogo.com/logos/express-109.svg' },
        { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
      ]; 

    return (
        <section className=" py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold  mb-8">My Skills</h2>

        <Marquee pauseOnClick={true} speed={40}>
        
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 w-32 shadow-md rounded-lg  ml-10"
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className=" h-16 mb-4"
              />
              <h3 className="text-lg font-medium ">{skill.name}</h3>
            </div>
          ))}
         
        </Marquee>

       
      </div>
    </section>
    );
};

export default Skills;