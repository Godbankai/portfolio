import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-center sm:text-left">© 2025 Ayush Trivedi. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://github.com/yourusername" className="text-gray-300 hover:text-blue-500">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="text-gray-300 hover:text-blue-500">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-blue-500">
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;