import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-4xl text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="text-4xl text-cyan-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-500" /> },
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill.icon}
              <span className="mt-2 text-gray-800 dark:text-white">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;