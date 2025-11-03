import { motion } from 'framer-motion';

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
        <h2 className="text-12xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="ayush2.jpg"
              alt="Ayush Trivedi"
              className="rounded-full shadow-lg    object-cover aspect-square"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              I'm Ayush Trivedi, a MCA student and fresher with a passion for web development and gaming. As a budding React and MERN stack developer, I’m skilled in crafting dynamic, user-friendly websites. I’m also proficient in Python and currently learning Java to expand my expertise. My goal is to build innovative, impactful web solutions that enhance user experiences. Beyond coding, I’m an avid eSports enthusiast and competitive gamer, excelling in Valorant, PUBG, and Call of Duty. These games fuel my strategic thinking and teamwork skills, which I apply to collaborative projects. When I’m not immersed in code or gaming, I enjoy exploring new destinations and unwinding with music on Spotify Premium. As a fresher, I’m eager to contribute fresh perspectives and learn from industry challenges. I thrive on creativity, whether designing sleek interfaces or outsmarting opponents in virtual arenas. Let’s connect to create something extraordinary—be it a cutting-edge web application or a thrilling eSports showdown!
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;