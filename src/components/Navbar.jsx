import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0f172a] shadow-xl py-3 backdrop-blur-md'
          : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left-aligned navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-cyan-300 font-semibold
                          transition duration-300 hover:scale-105
                          relative after:content-[''] after:absolute after:bottom-0 after:left-0
                          after:w-0 after:h-0.5 after:bg-cyan-300 after:transition-all after:duration-300
                          hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right-aligned Hire Me button */}
          <div className="hidden md:block">
            <button className="relative glow-button px-7 py-3 rounded-full text-white font-bold
                              bg-gradient-to-r from-cyan-500 to-blue-600 transition-all
                              duration-500 hover:from-cyan-400 hover:to-blue-500 hover:scale-105
                              shadow-lg transform transition-transform">
              Start Building Together
            </button>
          </div>

          {/* Mobile menu button with animation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-white focus:outline-none transition-transform duration-300 ${
                isOpen ? 'rotate-90' : ''
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with enhanced animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-4 pb-5 space-y-3 bg-gradient-to-b from-indigo-900 to-purple-900 rounded-b-xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-3 rounded-lg text-white font-semibold
                         bg-gradient-to-r from-purple-700/50 to-indigo-700/50
                         transition duration-300 transform hover:scale-105 hover:bg-purple-800/70"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button className="w-full glow-button mt-3 px-5 py-3 rounded-full text-white font-bold
                            bg-gradient-to-r from-cyan-500 to-blue-600 transform transition-transform
                            hover:scale-105">
            Start Building Together
          </button>
        </div>
      </div>

      {/* Enhanced glow animation styles */}
      <style jsx>{`
        .glow-button {
          animation: glow 2s infinite ease-in-out;
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 5px rgba(34, 211, 238, 0.7),
                        0 0 10px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.9),
                        0 0 30px rgba(59, 130, 246, 0.7),
                        0 0 40px rgba(124, 58, 237, 0.5);
          }
          100% {
            box-shadow: 0 0 5px rgba(34, 211, 238, 0.7),
                        0 0 10px rgba(59, 130, 246, 0.5);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;