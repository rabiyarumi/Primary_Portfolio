import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import { Element } from "react-scroll";

const Banner = () => {
  return (
   <Element name="home">
     <div className=" my-10 px-2 w-[90%] lg:w-full mx-auto">
      
      <div className="flex flex-col   gap-2">
        <p className="pl-1">Hey! I am</p>
        <h1 className="text-5xl font-bold"> Rabiya Rumi </h1>
        <h3 className="mt-2 text-2xl">
          I'm a
          <Typewriter
            words={[
              " Web Developer",
              " MERN Stack Developer",
              " JavaScript and React Enthusiast",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </h3>

        <div className="flex gap-4 pb-4">
          <Link
            to={"https://www.facebook.com/rabeya.rumi.285936/"}
            target="_blank"
          >
            <FaFacebookSquare size={"30"} />
          </Link>
          <Link to={"https://github.com/rabiyarumi"} target="_blank">
            <FaSquareGithub size={"30"} />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/rabiya-rumi/"}
            target="_blank"
          >
            <FaLinkedin size={"30"} />
          </Link>
        </div>
        <a
          href="https://drive.google.com/file/d/1Wa4HXbjJj_ko4W-GALeNEbuJre3OFGSp/view?usp=sharing"
          target="_blank"
          className="btn btn-primary w-fit"
        >
          Download Resume
        </a>
      </div>
   
  </div>
   </Element>
  );
};

export default Banner;
