// components/ProjectShowcase.jsx
import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Linux Task Manager",
    description: "Built with Qt Framework (C++), this app monitors system",
    github: "https://github.com/rishabh7302/Linux_Taskmanager.git",
  },
  {
    title: "Digit Recognition",
    description: " Developed an artificial neural network classifier for recognizing handwritten digits",
    github: "https://github.com/rishabhnegi/portfolio",
  },
  {
    title: "Face Recognition System",
    description: "Developed a face recognition system with OpenCV achieving 95% accuracy. Improved processing time by 25% using the K-Nearest Neighbors algorithm.",
    github: "https://github.com/rishabh7302/face_recognizer-using-opencv.git",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const ProjectShowcase = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-black via-purple-950 to-black text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(({ title, description, github }, i) => (
          <motion.div
            key={title}
            className="bg-gray-800 rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="mb-6 text-indigo-200">{description}</p>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-pink-400 hover:text-pink-600 font-semibold"
              aria-label={`GitHub repository for ${title}`}
            >
              <FaGithub size={24} className="mr-2" />
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
