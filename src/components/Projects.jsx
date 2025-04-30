import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Hospital Management System",
      description: "A web app for managing patient registrations and appointments using HTML, CSS, and JavaScript.",
      link: "https://github.com/yourusername/hospital-system",
      image: "project1.png",
    },
    {
      title: "Death Clock",
      description: "A personalized startup page with a countdown timer and quote API integration.",
      link: "https://github.com/yourusername/death-clock",
      image: "project2.png",
    },
    {
      title: "Jarvis AI Assistant",
      description: "A voice-activated AI assistant built with Python, handling tasks like web searches and music playback.",
      link: "https://github.com/yourusername/jarvis-ai",
      image: "project1.png",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block mt-4 text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;