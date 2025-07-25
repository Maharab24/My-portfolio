import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaHeart } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function Footer() {
  // Social media links with actual URLs
  const socialLinks = [
    {
      Icon: FaGithub,
      url: 'https://github.com/Maharab24',

      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      Icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/maharab-hossain-opi-548294228/',

      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      Icon: FaFacebook,
      url: 'https://www.facebook.com/maharab.hossain.opi.2024/',

      target: '_blank',
      rel: 'noopener noreferrer'
    },
{
  Icon: SiGmail,
  url: 'https://mail.google.com/mail/?view=cm&to=maharabhossainopi24@gmail.com&su=',
  target: '_blank',
  rel: 'noopener noreferrer'
}
  ];

  return (
    <motion.footer
      className="relative overflow-hidden pt-20 pb-12 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: 'radial-gradient(ellipse at bottom, #0a0e2a 0%, #000000 70%)'
      }}
    >
      {/* Glowing particles background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Electric gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-600/15 to-purple-500/20"></div>

        {/* Intensified floating particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 10 + 3}px`,
              height: `${Math.random() * 10 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${Math.random() > 0.5 ? '#00f7ff' : '#ff00ea'}, transparent 70%)`
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, (Math.random() - 0.5) * 60, 0],
              scale: [0.5, 1.5, 0.5],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: Math.random() * 6 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}

        {/* Glowing bubbles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 120 + 30}px`,
              height: `${Math.random() * 120 + 30}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(0, 247, 255, 0.1)' : 'rgba(255, 0, 234, 0.1)'}, transparent 70%)`,
              boxShadow: `0 0 ${Math.random() * 50 + 30}px ${i % 2 === 0 ? '#00f7ff' : '#ff00ea'}`
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, (Math.random() - 0.5) * 100, 0],
              scale: [0.8, 1.5, 0.8],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Brand section - Electric glow */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h2
              className="text-4xl font-bold mb-5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-500">
               Maharab Hossain Opi
              </span>
              <motion.span
                className="ml-2 text-cyan-300"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-cyan-100/80 mb-8 max-w-xs text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Let’s discuss how we can work together —<span className="text-cyan-300 font-medium">reach out below</span>

            </motion.p>

            <motion.div
              className="flex space-x-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map(({ Icon, url, title, target, rel }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  title={title}
                  target={target}
                  rel={rel}
                  className="text-cyan-100 hover:text-white bg-black/30 backdrop-blur-lg rounded-full p-4 border border-cyan-500/30 hover:border-fuchsia-500/50 relative group"
                  whileHover={{
                    y: -12,
                    scale: 1.15,
                    backgroundColor: 'rgba(0, 247, 255, 0.15)',
                    boxShadow: '0 0 25px rgba(0, 247, 255, 0.5)',
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    y: [0, -15, 0],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3
                    }
                  }}
                >
                  <Icon className="text-xl" />
                  {/* Glowing ring effect on hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Links section - Neon glow */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-400">
              Quick Links
            </h3>
            <ul className="space-y-5">
              {['Home', 'About', 'Projects', 'Skills'].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                >
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="text-cyan-100/90 hover:text-white flex items-center group text-lg font-medium"
                    whileHover={{
                      x: 15,
                      color: '#ff00ea',
                      textShadow: '0 0 10px rgba(255, 0, 234, 0.7)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      className="w-3 h-3 bg-cyan-400 rounded-full mr-4 group-hover:bg-fuchsia-500"
                      animate={{
                        scale: [1, 1.4, 1],
                        boxShadow: ['0 0 0 0 rgba(0, 247, 255, 0)', '0 0 0 6px rgba(0, 247, 255, 0.3)', '0 0 0 0 rgba(0, 247, 255, 0)']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    ></motion.span>
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact section - Glowing text */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-400">
              Get In Touch
            </h3>
            <ul className="space-y-6">
              {[
                { icon: SiGmail, text: 'maharabhossainopi24@gmail.com' },
                { icon: FaHeart, text: 'Open to freelance work' },
                { icon: FaHeart, text: 'Available for part-time roles' }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 15, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    <item.icon className={`text-2xl mt-1 mr-4 ${index === 0 ? 'text-cyan-300' : 'text-fuchsia-400'}`} />
                  </motion.div>
                  <span className="text-cyan-100/90 text-lg font-medium">
                    {item.text}
                    {index === 0 && (
                      <motion.span
                        className="ml-2 text-cyan-300"
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ✉️
                      </motion.span>
                    )}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Animated divider - Electric pulse */}
        <motion.div
          className="h-0.5 my-12 relative"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-70"></div>
          <motion.div
            className="absolute h-full w-20 bg-cyan-400 blur-xl"
            animate={{
              left: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Copyright - Glowing text */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-cyan-100/80 text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} <span className="text-cyan-300">Opi's Portfolio</span>. All rights reserved.
          </div>
          <div className="flex items-center">
            <span className="mr-2">Made by</span>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 20, 0],
                textShadow: ['0 0 5px rgba(255,0,234,0.3)', '0 0 20px rgba(255,0,234,0.8)', '0 0 5px rgba(255,0,234,0.3)']
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <FaHeart className="text-fuchsia-400 mx-1" />
            </motion.div>
            <span className="ml-2"></span>
            <motion.span
              className="ml-2 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text font-bold"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              Maharab Hossain Opi
            </motion.span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;