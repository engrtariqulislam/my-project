import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
          I am Tariqul Islam Web Designer,Web Developer,Public Speaker,Business analyst,founder and CEO at Matjel ltd.

          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like React.js, Redux, Redux Tool
            Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.
          </p>

          <p>I talk about Education, Skills & Happiness!</p>

          <p>
          I provide Business Idea, Business plan,Business Startup Help,Business Motivation, I love to create documentary video, Business Finance & How to Grow your Business with Low investment,Business tips & help for starting and growing your business.
          </p>
          <p>Our Mission: To help people learning business education and technology .</p>
          <p>Our Vision: To inspire people to become self dependent and self employed by improving and using their own skill set.</p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;