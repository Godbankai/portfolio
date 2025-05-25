import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    // Add smooth scrolling behavior to the HTML element
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', icon: 'fab fa-github' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'fab fa-linkedin' },
    { name: 'Twitter', href: 'https://twitter.com', icon: 'fab fa-twitter' },
    { name: 'Email', href: 'mailto:trivediayushpwn@gmail.com', icon: 'fas fa-envelope' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Contact</h3>
            <p className="mb-2">Ayush Trivedi</p>
            <p className="mb-2">Email: <a href="mailto:trivediayushpwn@gmail.com" className="hover:text-blue-500 transition-colors duration-200">trivediayushpwn@gmail.com</a></p>
            <p className="mb-2">Phone: +918953158407</p>
            <p>Location: Powayan (Shahjahanpur), Uttar Pradesh, India</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-blue-500 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200"
                  aria-label={link.name}
                >
                  <i className={`${link.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Ayush Trivedi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
