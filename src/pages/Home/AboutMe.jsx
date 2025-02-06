import image from "../../assets/portfolio_pic_bg_removed.png"

const AboutMe = () => {
  return (
    <section className="py-12 px-6 sm:px-12 lg:px-24 ">
      <h2 className="text-4xl font-bold  mb-10 text-center">About Me</h2>
      <div className="md:flex gap-10">
      <div className="md:w-1/2">
        <img
              src={image}
              className=" h-full" />
      </div>
      <div className=" flex flex-col  justify-center md:w-1/2">
        <p className="mb-3  ">
          Hi, I’m Rabiya Rumi, a passionate learner and a budding software
          developer with an unquenchable curiosity for technology. I thrive on transforming complex problems into intuitive user interfaces using React
        </p>
        <p className="mb-3">
          My journey into programming is simple yet exciting—I developed an
          interest in coding and decided to pursue it wholeheartedly. I enjoy
          implementing new and creative ideas in my projects, constantly
          exploring the latest technologies to expand my skills.
        </p>
        <p className="mb-3">
          Beyond programming, I have a passion for solving puzzles like Rubik's
          cubes and indulging in fashion design, where I get to express my
          creativity in unique ways. These hobbies help me stay inspired and
          bring a fresh perspective to my coding journey.
        </p>
      </div>
      </div>
    </section>
  );
};

export default AboutMe;
