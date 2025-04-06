import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const AnimatedHeading = () => {
  const roles = ['DEVELOPER', 'FREELANCER', 'STUDENT'];
  const [index, setIndex] = useState(0);
  const [showText, setShowText] = useState('');

  useEffect(() => {
    const currentRole = roles[index];
    let i = 0;

    const typeInterval = setInterval(() => {
      if (i <= currentRole.length) {
        setShowText(currentRole.slice(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [index]);

  return (
    <h1 className="font-bold text-3xl w-full text-center mb-6">
      ABOUT ME : <span className="text-blue-500">{showText}</span>
    </h1>
  );
};

const Card = ({ title, description, bgColor }) => (
  <div
    className="shadow-lg rounded-2xl transform hover:-translate-y-2 transition duration-300"
    style={{
      width: '270px',
      height: '280px',
      padding: '40px 20px',
      background: '#f2f3f7',
      boxShadow: '0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff',
      borderRadius: '20px',
      textAlign: 'center',
    }}
  >
    <div
      className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center font-bold text-white text-2xl`}
      style={{ backgroundColor: bgColor }}
    >
      {title.charAt(0)}
    </div>
    <h3 className="mt-4 text-xl font-semibold text-[#36187d]">{title}</h3>
    <p className="mt-3 text-gray-600 text-sm">{description}</p>
  </div>
);

const About = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center px-4 py-10'>
      <AnimatedHeading />

      <p className="text-lg text-gray-600 text-center max-w-2xl mb-10">
        I'm Karthikeya — a passionate full-stack enthusiast who crafts sleek, efficient, and engaging web experiences.
        With a love for clean code and constant learning, I aim to solve real-world problems with creative digital solutions.
      </p>

      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <Card
          title="Developer"
          description="I design and build web apps with clean UI, robust backend, and responsive design."
          bgColor="#3b82f6"
        />
        <Card
          title="Freelancer"
          description="Helping clients bring their ideas to life with efficient, scalable web solutions."
          bgColor="#ec4899"
        />
        <Card
          title="Student"
          description="Constantly exploring the latest in tech and sharpening my skills every day."
          bgColor="#10b981"
        />
      </div>

      <div className="text-center">
        <p className="text-md text-gray-700 mb-3 font-semibold">Let's connect</p>
        <div className="flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/DevarakondaKarthikeya" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="text-xl text-gray-700 hover:text-blue-600 transition" icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/__karthikeya________" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="text-xl text-gray-700 hover:text-pink-500 transition" icon={faInstagram} />
          </a>
          <a href="https://github.com/DevarakondaKarthikeya" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="text-xl text-gray-700 hover:text-black transition" icon={faGithub} />
          </a>
          <a href="https://wa.me/918688795001" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="text-xl text-gray-700 hover:text-green-500 transition" icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
