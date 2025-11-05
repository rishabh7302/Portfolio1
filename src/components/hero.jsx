import { useState } from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from "react-icons/bs";
import HeroPic from "../assets/fox.png";

const socialLinks = [
  { icon: BsFacebook, label: "Facebook", url: "#" },
  { icon: BsTwitter, label: "Twitter", url: "#" },
  { icon: BsInstagram, label: "Instagram", url: "#" },
  { icon: BsPinterest, label: "Pinterest", url: "#" },
];

const Hero = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-r from-black via-purple-950 to-pink-900 flex flex-col lg:flex-row justify-center items-center p-12 gap-12 text-white">
      
      {/* Left: Intro */}
      <div className="lg:w-1/3 sm:w-full max-w-md text-center lg:text-left animate-fadeInLeft">
        <p className="text-4xl mb-5 text-indigo-300 tracking-wide font-light">I'm</p>
        <h1 className="text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg">Rishabh Negi</h1>
        <hr className="border-indigo-500 mb-8" />
        <p className="text-xl text-indigo-200 font-sans leading-relaxed">
          A <span className="font-semibold text-white">Machine Learning enthusiast</span>,<br />
          currently pursuing <span className="font-semibold text-white">B.Tech</span> in my 4th year.<br />
          Passionate about new tech and technology.
        </p>
      </div>

      {/* Center: Profile Image */}
      <div className="w-72 h-72 rounded-full overflow-hidden border-8 border-white shadow-2xl transform transition-transform duration-500 hover:scale-105 animate-fadeInUp">
        <img
          src={HeroPic}
          alt="Rishabh Negi"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: About & Socials */}
      <div className="lg:w-1/3 sm:w-full max-w-md text-center lg:text-left animate-fadeInRight">
        <h2 className="text-4xl mb-6 font-semibold tracking-wide">About Me</h2>
        <p className="text-indigo-200 font-sans mb-6 leading-relaxed">
          Let's build quality in programming and design with our services.
        </p>

        <button
          type="button"
          onClick={() => setShowMore(!showMore)}
          className="bg-gray-800 text-white px-12 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 hover:text-white transition transform hover:scale-105"
        >
          {showMore ? "Hide Info" : "Show more..."}
        </button>

        {/* Hidden Info Card */}
        {showMore && (
          <div className="mt-6 p-6 bg-gray-800 text-white rounded-lg shadow-lg transition-all duration-500 ease-in-out">
            <h3 className="text-2xl font-bold mb-2">More About Me</h3>
            <p className="text-base leading-relaxed">
              I specialize in building interactive web applications, solving algorithmic challenges, and designing elegant UI/UX experiences. I love working with React, Tailwind CSS, and exploring AI tools. My goal is to create meaningful digital experiences that reflect creativity and precision.
            </p>
          </div>
        )}

        <div className="flex justify-center lg:justify-start mt-8 space-x-6">
          {socialLinks.map(({ icon: Icon, label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="border-2 border-white rounded-full p-3 text-white hover:text-indigo-600 hover:border-indigo-600 transition transform hover:scale-110"
            >
              <Icon size={32} />
            </a>
          ))}
        </div>
      </div>

      {/* Animations using Tailwind CSS plugin or custom CSS */}
      <style jsx>{`
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 1s ease forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
