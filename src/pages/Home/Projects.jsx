import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

const Projects = () => {

   const  [projects, setProjects]= useState([])
    
    useEffect(() => {
        fetch("/projects.json")
        .then(res => res.json())
        .then(data => {
            setProjects(data)
            console.log(projects)
        })
    },[])

    return (
       <Element name='projects'>
         <section className=" py-12">
     
     <h2 className="text-4xl font-bold text-center  mb-8">My Projects</h2>
     <div className='grid grid-cols-1  md:grid-cols-3 gap-4'>
         {
             projects.map(project => <div key={project.id} className="card card-compact bg-base-100 max-w-96 shadow-xl">
               <figure>
                 <img
                   src={project.demo_img}
                   alt="Shoes" />
               </figure>
               <div className="card-body">
                 <h2 className="card-title">{project.project_name}</h2>
                 <p>{project.project_type}</p>
                 <div className="card-actions justify-end">
                   <Link to={`/project/${project.id}`} className="btn btn-primary">Details</Link>
                   
                 </div>
               </div>
             </div>)
         }
     </div>
    
 </section>
       </Element>
    );
};

export default Projects;