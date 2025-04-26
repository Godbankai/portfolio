import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hey, I'm Ayush Trivedi
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl mb-6"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          BCA Student | Web Developer | eSports Enthusiast
        </motion.p>
        <motion.a
          href="#projects"
          className="inline-block bg-white text-blue-600 dark:bg-gray-700 dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-100 dark:hover:bg-gray-600 transition"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          View My Work
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;