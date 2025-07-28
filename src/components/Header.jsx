import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.png';

const Header = () => {
  const textRef = useRef(null);
  const headerRef = useRef(null);
  const words = ["Web Developer", "Competitive Programmer"];
  const particlesRef = useRef(null);
  const [bubbles, setBubbles] = useState([]);
  const bubbleId = useRef(0);

  useEffect(() => {
    // Typing animation
    let currentWordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 200;

    const type = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        charIndex--;
        typeSpeed = 100;
      } else {
        charIndex++;
        typeSpeed = 200;
      }

      const text = currentWord.substring(0, charIndex);
      if (textRef.current) {
        textRef.current.textContent = text;
      }

      if (!isDeleting && text === currentWord) {
        typeSpeed = 1500;
        isDeleting = true;
      } else if (isDeleting && text === '') {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
      }

      setTimeout(type, typeSpeed);
    };

    type();

    // Create floating particles
    const createParticle = () => {
      if (!particlesRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full';

      // Random properties
      const size = Math.random() * 10 + 2;
      const colors = [
        'bg-cyan-500/40',
        'bg-purple-500/40',
        'bg-blue-500/40',
        'bg-pink-500/40'
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.className += ` ${color} w-${Math.round(size)} h-${Math.round(size)}`;

      // Random position
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;

      particle.style.left = `${startX}%`;
      particle.style.top = `${startY}%`;

      particlesRef.current.appendChild(particle);

      // Animation
      const duration = Math.random() * 10 + 10;
      const moveX = (Math.random() - 0.5) * 200;
      const moveY = (Math.random() - 0.5) * 200;

      particle.animate(
        [
          { transform: `translate(0, 0)`, opacity: 0 },
          { transform: `translate(${moveX}px, ${moveY}px)`, opacity: 1 },
          { transform: `translate(${moveX * 2}px, ${moveY * 2}px)`, opacity: 0 }
        ],
        {
          duration: duration * 1000,
          easing: 'ease-in-out',
        }
      );

      // Remove after animation
      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    };

    // Create particles continuously
    const particleInterval = setInterval(createParticle, 300);

    // Mouse move bubble effect
    const handleMouseMove = (e) => {
      if (Math.random() > 0.7) { // Only create bubbles 70% of the time
        const newBubble = {
          id: bubbleId.current++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 15 + 5,
          opacity: Math.random() * 0.5 + 0.3,
          color: `rgba(${Math.floor(Math.random() * 100) + 155},
                  ${Math.floor(Math.random() * 200) + 55},
                  ${Math.floor(Math.random() * 200) + 55},
                  ${Math.random() * 0.3 + 0.2})`
        };

        setBubbles(prev => [...prev, newBubble]);

        // Remove bubble after animation
        setTimeout(() => {
          setBubbles(prev => prev.filter(bubble => bubble.id !== newBubble.id));
        }, 2000);
      }
    };

    if (headerRef.current) {
      headerRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      clearInterval(particleInterval);
      if (headerRef.current) {
        headerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden relative cursor-default"
    >
      {/* Floating particles container */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      />

      {/* Mouse bubble elements */}
      {bubbles.map(bubble => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full pointer-events-none"
          initial={{
            opacity: bubble.opacity,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            backgroundColor: bubble.color,
            boxShadow: `0 0 10px ${bubble.color}, 0 0 20px ${bubble.color}`
          }}
          animate={{
            opacity: 0,
            top: `${bubble.y - 100}px`,
            scale: 1.5
          }}
          transition={{
            duration: 2,
            ease: "easeOut"
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between z-10">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-16 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-light text-cyan-300 mb-4">
              Hello, I'm
            </h3>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Maharab Hossain <span className="text-purple-400">Opi</span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-4xl font-bold mb-8 min-h-[60px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span className="text-cyan-300">I am a </span>
            <span
              ref={textRef}
              className="text-purple-400 ml-2 border-r-2 border-white animate-pulse"
            ></span>
          </motion.div>

          <motion.p
            className="text-gray-300 text-lg mb-10 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Crafting elegant solutions to complex problems through code.
            Passionate about building web experiences and solving algorithmic challenges.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
          
            <motion.a
              href="/Maharab_Hossain_CV.pdf"
              download="Maharab_Hossain_CV.pdf"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full glow-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>

            <motion.a
              href="#projects"
              className="px-8 py-3 bg-transparent border-2 border-purple-500 text-purple-300 font-bold rounded-full hover:bg-purple-500/10 transition-colors flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile Image with enhanced display */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className="relative">
            {/* Animated glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-xl opacity-70"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Floating container - increased size */}
            <motion.div
              className="relative rounded-full p-1 bg-gradient-to-r from-cyan-500 to-purple-500"
              animate={{
                rotateY: [0, 5, 0, -5, 0],
                rotateX: [0, 3, 0, -3, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="overflow-hidden rounded-full border-4 border-[#0f172a] w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.img
                    src={profile}
                    alt="Maharab Hossain Opi"
                    className="w-full h-full object-cover"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-cyan-900/80 backdrop-blur-sm px-6 py-2 rounded-full border border-cyan-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              <span className="flex items-center text-cyan-300">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                Available for work
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Glow animation styles */}
      <style jsx>{`
        .glow-button {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.6);
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
    </div>
  );
};

export default Header;