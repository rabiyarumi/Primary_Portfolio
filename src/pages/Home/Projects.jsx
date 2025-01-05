import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {

   const  [projects, setProjects]= useState([])
    
    useEffect(() => {
        fetch("../../../public/projects.json")
        .then(res => res.json())
        .then(data => {
            setProjects(data)
            console.log(projects)
        })
    },[])

    return (
        <section className=" py-12">
     
        <h2 className="text-4xl font-bold text-center  mb-8">My Projects</h2>
        <div className='grid grid-cols-1  md:grid-cols-3 gap-4'>
            {
                projects.map(project => <div key={project.id} className="card text-white  image-full  shadow-xl">
                    <figure>
                      <img
                        src={project.demo_img}
                        alt="img" />
                    </figure>
                    <div className="card-body ">
                      <h2 className="card-title font-bold text-primary">{project.project_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-start">
                        <Link to={`/project/${project.id}`} className="btn btn-primary">View Details</Link>
                      </div>
                    </div>
                  </div>)
            }
        </div>
       
    </section>
    );
};

export default Projects;