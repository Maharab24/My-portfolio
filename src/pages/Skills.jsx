import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaCode, FaServer, FaBrain, FaFlask, FaChessKnight, FaMicrochip, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


import reactImg from '../assets/skillSet/react.png';
import javascriptImg from '../assets/skillSet/js.png';
import pythonImg from '../assets/skillSet/python.png';
import mongodbImg from '../assets/skillSet/mongoDb.png';
import AI from '../assets/skillSet/ai.png';
import c from '../assets/skillSet/c.png';
import cplus from '../assets/skillSet/c++.png';
import java from '../assets/skillSet/java.png';
import CompetitveProgramming from '../assets/skillSet/competitiveProgramming.png';
import css from '../assets/skillSet/css.png';
import html from '../assets/skillSet/html.png';
import git from '../assets/skillSet/gitHub.png';
import tailwind from '../assets/skillSet/tailwind.png';
import fireBase from '../assets/skillSet/fireBase.png';
import IoT from '../assets/skillSet/iot.png';
import jwt from '../assets/skillSet/jwt.png';
import mySQL from '../assets/skillSet/mySql.png';
import research from '../assets/skillSet/research.png';
import nodeJs from '../assets/skillSet/nodeJs.png';
import daisyUi from '../assets/skillSet/daisyUi.png';
import codeforces from '../assets/skillSet/codeforces.png';

function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Skill images mapping
  const skillImages = {
    'React': reactImg,
    'JavaScript': javascriptImg,
    'Python': pythonImg,
    'MongoDB': mongodbImg,
    'C': c,
    'C++': cplus,
    'Java': java,
    'Competitive Programming': CompetitveProgramming,
    'CSS3': css,
    'HTML5': html,
    'Git': git,
    'Tailwind CSS': tailwind,
    'Firebase': fireBase,
    'IoT': IoT,
    'JWT': jwt,
    'MySQL': mySQL,
    'Research': research,
    'Node.js': nodeJs,
    'DaisyUI': daisyUi,
    'Codeforces': codeforces
  };

  // Skill categories
  const skillCategories = [
    {
      id: 'web',
      title: 'Web Development',
      icon: <FaCode className="text-cyan-400 text-3xl" />,
      description: 'Building modern, responsive web applications',
      skills: [
        {
          category: 'Frontend',
          items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'DaisyUI']
        },
        {
          category: 'Backend',
          items: ['Node.js', 'MySQL', 'MongoDB', 'API Integration', 'JWT', 'Firebase']
        }
      ],
      color: 'from-cyan-500/20 to-blue-500/20',
      buttonColor: 'from-cyan-500 to-blue-500',
      action: 'View Projects',
      actionLink: '/Web',
      isExternal: false
    },
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: <FaCode className="text-purple-400 text-3xl" />,
      description: 'Languages I master for various applications',
      skills: [
        'C', 'C++', 'JavaScript', 'Java', 'Python'
      ],
      color: 'from-purple-500/20 to-indigo-500/20',
      buttonColor: 'from-purple-500 to-indigo-500',
      action: 'See Code Examples',
      actionLink: "https://github.com/Maharab24/All-topics-of-coding",
      isExternal: true
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      icon: <FaBrain className="text-pink-500 text-3xl" />,
      description: 'Exploring the future of intelligent systems',
      skills: [],
      color: 'from-pink-500/20 to-rose-500/20',
      buttonColor: 'from-pink-500 to-rose-500',
      action: 'View Projects',
      actionLink: '/AI',
      isExternal: false
    },
    {
      id: 'research',
      title: 'Research',
      icon: <FaFlask className="text-yellow-400 text-3xl" />,
      description: 'Academic and practical research projects',
      skills: [
        'AI for Sustainable Campuses: Saving Resources with Smart Technology'
      ],
      color: 'from-yellow-500/20 to-amber-500/20',
      buttonColor: 'from-yellow-500 to-amber-500',
      action: 'View Research',
      actionLink: '/Research',
      isExternal: false
    },
    {
      id: 'competitive',
      title: 'Competitive Programming',
      icon: <FaChessKnight className="text-green-400 text-3xl" />,
      description: 'Algorithm design and problem solving',
      skills: [
        'Data Structures & Algorithms',
        'Problem Solving Techniques',
        'Codeforces Competitions'
      ],
      color: 'from-green-500/20 to-emerald-500/20',
      buttonColor: 'from-green-500 to-emerald-500',
      action: 'See Profile',
      actionLink: '/Cp',
      isExternal: false
    },
    {
      id: 'iot',
      title: 'IoT & Embedded Systems',
      icon: <FaMicrochip className="text-red-400 text-3xl" />,
      description: 'Hands-on experience with smart devices',
      skills: [
        'Arduino Programming',
        'Sensor Integration',
        'Hardware Prototyping',
        'Raspberry Pi'
      ],
      color: 'from-red-500/20 to-orange-500/20',
      buttonColor: 'from-red-500 to-orange-500',
      action: 'View Projects',
      actionLink: '/Iot',
      isExternal: false
    }
  ];

  // Skill badge component
  const SkillBadge = ({ skill }) => (
    <motion.div
      className="bg-gray-800/50 text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
    >
      {skillImages[skill] && (
        <img
          src={skillImages[skill]}
          alt={skill}
          className="w-5 h-5 object-contain rounded-full bg-white p-0.5"
        />
      )}
      <span>{skill}</span>
    </motion.div>
  );

  // Handle button click
  const handleButtonClick = (category) => {
    if (category.isExternal) {
      window.open(category.actionLink, '_blank', 'noopener,noreferrer');
    } else {
      navigate(category.actionLink);
    }
  };

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-[#0c1120] to-[#1a243a] py-20 px-4 md:px-8 overflow-hidden relative"
      id="skills"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, -15, 0],
          y: [0, 15, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400/20"
          style={{
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, (Math.random() - 0.5) * 40, 0],
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.6, 0.1]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="mt-20 text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? {
              opacity: 1,
              y: 0,
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            } : {}}
            transition={{
              duration: 1.5,
              delay: 0.3,
              backgroundPosition: {
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            My Skills & Expertise
          </motion.h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "128px" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={item}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${category.color} backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl overflow-hidden relative flex flex-col h-full`}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
            >
              <div className="flex-grow">
                <div className="flex items-start mb-4">
                  <div className="bg-gray-900 p-3 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-cyan-200">{category.description}</p>
                  </div>
                </div>

                {/* Skills content */}
                <div className="mt-4">
                  {category.id === 'web' && (
                    <div className="space-y-4">
                      {category.skills.map((section, idx) => (
                        <div key={idx}>
                          <h4 className="text-sm font-semibold text-cyan-300 mb-2">{section.category}</h4>
                          <div className="flex flex-wrap gap-2">
                            {section.items.map((skill, i) => (
                              <SkillBadge key={i} skill={skill} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {category.id === 'programming' && (
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <SkillBadge key={i} skill={skill} />
                      ))}
                    </div>
                  )}

                  {category.id === 'ai' && (
                    <motion.div
                      className="text-center py-6"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    >
                      <div className="flex justify-center mb-4">
                        <img
                          src={AI}
                          alt="AI"
                          className="w-20 h-20 object-contain animate-pulse"
                        />
                      </div>
                      <div className="text-2xl font-bold text-pink-400">Coming Soon...</div>
                      <div className="mt-2 text-pink-200">Exploring the future of AI</div>
                    </motion.div>
                  )}

                  {category.id === 'research' && (
                    <div>
                      <a
                        href="https://github.com/Maharab24/AI-for-Sustainable-Campuses-Saving-Resources-with-Smart-Technology"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <div className="bg-gray-800/50 p-4 rounded-lg mb-3 group-hover:bg-gray-700/50 transition-all flex items-center gap-3">
                          <img
                            src={research}
                            alt="Research"
                            className="w-10 h-10 object-contain"
                          />
                          <div>
                            <div className="text-cyan-300 font-medium group-hover:text-cyan-200">
                              {category.skills[0]}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">Click to view on GitHub</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  )}

                  {category.id === 'competitive' && (
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.slice(0, 2).map((skill, i) => (
                          <SkillBadge key={i} skill={skill} />
                        ))}
                      </div>
                      <a
                        href="https://codeforces.com/profile/Maharab_Hossain_Opi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyan-300 hover:text-cyan-200 mt-2"
                      >
                        <img
                          src={codeforces}
                          alt="Codeforces"
                          className="w-5 h-5 mr-2"
                        />
                        <span>Codeforces Profile</span>
                      </a>
                    </div>
                  )}

                  {category.id === 'iot' && (
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <SkillBadge key={i} skill={skill} />
                      ))}
                    </div>
                  )}
                </div>
              </div>


              <motion.button
                className={`mt-6 w-full py-3 rounded-lg bg-gradient-to-r ${category.buttonColor} text-white font-bold flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 0 20px rgba(${
                    category.id === 'web' ? '56, 189, 248' :
                    category.id === 'programming' ? '139, 92, 246' :
                    category.id === 'research' ? '245, 158, 11' :
                    category.id === 'competitive' ? '16, 185, 129' :
                    '245, 57, 57'
                  }, 0.5)`
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleButtonClick(category)}
              >
                <span className="z-10 relative flex items-center gap-2">
                  {category.action}
                  <FaArrowRight className="text-xs" />
                </span>

                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`
                  }}
                  animate={{
                    x: ['-100%', '100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Closing section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-3xl mx-auto"
            animate={{
              textShadow: ["0 0 5px rgba(56,189,248,0.3)", "0 0 15px rgba(139,92,246,0.5)", "0 0 5px rgba(56,189,248,0.3)"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
          >
            "Continuously evolving my skills to build innovative solutions"
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;