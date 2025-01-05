import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  console.log(id);

  const [project, setProject] = useState(data);
  console.log(project);
  const {project_name, demo_img, description,main_technologies,live_link,github_link,details} = project

  useEffect(() => {
    const singleData = data.find((p) => p.id == id);
    setProject(singleData);
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col md:flex-row">
        <img
          src={demo_img}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{project_name}</h1>
          <p className="py-6">
           {description}
          </p>
          <a href={live_link} target="_blank" className="block">Live Site</a>
          <a href={github_link} target="_blank" className="block">Github Repo</a>
        
        </div>
      </div>
    </div>
  );
};

export default Details;
