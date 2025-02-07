import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  console.log(id);

  const [project, setProject] = useState(data);
  // const {project_name, demo_img, description,main_technologies,live_link,github_link,details} = project

  useEffect(() => {
    const singleData = data.find((p) => p.id == id);
    setProject(singleData);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold  mb-4">
        {project.project_name}
      </h1>
      <p className="text-lg ">{project.project_type}</p>
      <img
        src={project.demo_img}
        alt="Project Demo"
        className="w-full rounded-lg mt-4"
      />
      <p className="mt-4 ">{project.description}</p>
      <h2 className="text-2xl font-semibold mt-6">Technologies Used</h2>
      <ul className="list-disc list-inside mt-2">
      {project.main_technologies ? (
        <ul className="list-disc list-inside mt-2">
          {project.main_technologies.map((tech, index) => (
            <li key={index} className="">
              {tech}
            </li>
          ))}
        </ul>
      ) : (
        <p className="">No technologies listed.</p>
      )}
      </ul>
      <h2 className="text-2xl font-semibold mt-6">Challenges</h2>
      <p className="">{project?.details?.challenges}</p>
      <h2 className="text-2xl font-semibold mt-6">Future Improvements</h2>
      <p className="">{project?.details?.improvements}</p>
      <div className="mt-6 flex space-x-4">
        <a
          href={project.live_link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-primary"
        >
          Live Site
        </a>
        <a
          href={project.github_link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-primary btn-outline"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default Details;
