import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Import all skill images
import reactImg from '../assets/skillSet/react.png';
import javascriptImg from '../assets/skillSet/js.png';

import pythonImg from '../assets/skillSet/python.png';
import uiuxImg from '../assets/skillSet/uiux.png';

import mongodbImg from '../assets/skillSet/mongoDb.png';
import AI from '../assets/skillSet/ai.png';
import api from '../assets/skillSet/api.png';
import c from '../assets/skillSet/c.png';
import cplus from '../assets/skillSet/c++.png';
import java from '../assets/skillSet/java.png';
import CompetitveProgramming from '../assets/skillSet/competitiveProgramming.png';
import css from '../assets/skillSet/css.png';
import html from '../assets/skillSet/html.png';
import git from '../assets/skillSet/gitHub.png';
import tailwind from '../assets/skillSet/tailwind.png';
import daisyUI from '../assets/skillSet/daisyUI.png';
import figma from '../assets/skillSet/figma.png';
import fireBase from '../assets/skillSet/fireBase.png';
import IoT from '../assets/skillSet/iot.png';
import jwt from '../assets/skillSet/jwt.png';
import mySQL from '../assets/skillSet/mySql.png';
import research from '../assets/skillSet/research.png';
import visualStudio from '../assets/skillSet/visualStudio.png';




const GoodAt = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Skills data with actual images
const skills = [
  { name: "React", color: "rgba(97, 218, 251, 0.7)", image: reactImg },
  { name: "JavaScript", color: "rgba(247, 223, 30, 0.7)", image: javascriptImg },
  { name: "Python", color: "rgba(76, 175, 80, 0.7)", image: pythonImg },
  { name: "UI/UX Design", color: "rgba(171, 71, 188, 0.7)", image: uiuxImg },
  { name: "MongoDB", color: "rgba(76, 175, 80, 0.7)", image: mongodbImg },
  { name: "AI", color: "rgba(77, 182, 172, 0.7)", image: AI },
  { name: "", color: "rgba(255, 112, 67, 0.7)", image: api },
  { name: "", color: "rgba(33, 150, 243, 0.7)", image: c },
  { name: "C++", color: "rgba(33, 150, 243, 0.7)", image: cplus },
  { name: "", color: "rgba(255, 87, 34, 0.7)", image: java },
  { name: "Competitive Programming", color: "rgba(255, 193, 7, 0.7)", image: CompetitveProgramming },
  { name: "CSS", color: "rgba(21, 101, 192, 0.7)", image: css },
  { name: "HTML", color: "rgba(255, 87, 34, 0.7)", image: html },
  { name: "Git", color: "rgba(255, 109, 0, 0.7)", image: git },

  { name: "Tailwind CSS", color: "rgba(0, 191, 255, 0.7)", image: tailwind },
  { name: "DaisyUI", color: "rgba(255, 140, 0, 0.7)", image: daisyUI },
  { name: "Figma", color: "rgba(255, 64, 129, 0.7)", image: figma },
  { name: "Firebase", color: "rgba(255, 202, 40, 0.7)", image: fireBase },
  { name: "IoT", color: "rgba(100, 181, 246, 0.7)", image: IoT },
  { name: "", color: "rgba(255, 143, 0, 0.7)", image: jwt },
  { name: "", color: "rgba(0, 150, 136, 0.7)", image: mySQL },
  { name: "Research", color: "rgba(139, 195, 74, 0.7)", image: research },
  { name: "VS", color: "rgba(33, 150, 243, 0.7)", image: visualStudio }
];


  // Floating animation for skills
  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Glow animation
  const glowAnimation = (color) => ({
    boxShadow: [
      `0 0 10px ${color}`,
      `0 0 20px ${color}`,
      `0 0 30px ${color}`,
      `0 0 20px ${color}`,
      `0 0 10px ${color}`,
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e2a3b] py-20 px-4 overflow-hidden relative"
    >
      {/* Animated background elements - unchanged */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Floating particles - unchanged */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, (Math.random() - 0.5) * 50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10 min-h-[50vh] flex flex-col justify-center">
        {/* Animated Headline Section - unchanged */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.3
          }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.2,
              duration: 0.8,
              type: "spring",
              bounce: 0.3
            }}
          >
            My Skillset
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.4,
              duration: 0.8,
              type: "spring",
              bounce: 0.3
            }}
          >
            Technologies I excel at and continuously master through real-world projects
          </motion.p>
        </motion.div>

        {/* Top moving row - Left to Right */}
        <motion.div
          className="flex mb-16"
          animate={{
            x: ["0%", "-100%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              duration: 30,
              ease: "linear"
            }
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <motion.div
              key={`top-${index}`}
              className="flex-shrink-0 mx-4 w-24 h-24 rounded-full bg-gray-900 border border-white/10 flex flex-col items-center justify-center relative"
              animate={[
                floatAnimation,
                glowAnimation(skill.color)
              ]}
              whileHover={{
                scale: 1.1,
                y: -10,
                z: 20,
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-full"></div>
              {/* Replaced emoji with image */}
              <img
                src={skill.image}
                alt={skill.name}
                className="w-12 h-12 object-contain mb-1"
              />
              <span className="text-white text-xs font-medium mt-1">{skill.name}</span>

              {/* Floating sparkles - unchanged */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: `${Math.random() * 6 + 2}px`,
                    height: `${Math.random() * 6 + 2}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom moving row - Right to Left */}
        <motion.div
          className="flex"
          animate={{
            x: ["-100%", "0%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              duration: 40,
              ease: "linear"
            }
          }}
        >
          {[...skills.slice().reverse(), ...skills.slice().reverse()].map((skill, index) => (
            <motion.div
              key={`bottom-${index}`}
              className="flex-shrink-0 mx-4 w-24 h-24 rounded-full bg-gray-900 border border-white/10 flex flex-col items-center justify-center relative"
              animate={[
                floatAnimation,
                glowAnimation(skill.color)
              ]}
              whileHover={{
                scale: 1.1,
                y: -10,
                z: 20,
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-full"></div>
              {/* Replaced emoji with image */}
              <img
                src={skill.image}
                alt={skill.name}
                className="w-12 h-12 object-contain mb-1"
              />
              <span className="text-white text-xs font-medium mt-1">{skill.name}</span>

              {/* Floating sparkles - unchanged */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: `${Math.random() * 6 + 2}px`,
                    height: `${Math.random() * 6 + 2}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GoodAt;