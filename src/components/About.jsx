import { motion } from "framer-motion";


const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://via.placeholder.com/400"
              alt="Ayush Trivedi"
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              I'm Ayush Trivedi, a final-year BCA student passionate about web development and eSports. I love crafting
              user-friendly websites and diving into the world of competitive gaming. When I'm not coding, you can find
              me exploring new places or jamming to music on Spotify Premium.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My goal is to build innovative web solutions that make an impact. Let's create something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;