import React, { useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const GoodAt = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Skills data with glow colors
  const skills = [
    { name: "React", color: "rgba(97, 218, 251, 0.7)", icon: "⚛️" },
    { name: "JavaScript", color: "rgba(247, 223, 30, 0.7)", icon: "📜" },
    { name: "Node.js", color: "rgba(139, 195, 74, 0.7)", icon: "🟢" },
    { name: "Python", color: "rgba(76, 175, 80, 0.7)", icon: "🐍" },
    { name: "UI/UX Design", color: "rgba(171, 71, 188, 0.7)", icon: "🎨" },
    { name: "TypeScript", color: "rgba(48, 120, 198, 0.7)", icon: "📝" },
    { name: "MongoDB", color: "rgba(77, 182, 172, 0.7)", icon: "🍃" },
    { name: "GraphQL", color: "rgba(229, 53, 171, 0.7)", icon: "📊" },
    { name: "AWS", color: "rgba(255, 153, 0, 0.7)", icon: "☁️" },
    { name: "Docker", color: "rgba(41, 182, 246, 0.7)", icon: "🐳" },
    { name: "Kubernetes", color: "rgba(50, 115, 220, 0.7)", icon: "⚓" },
    { name: "TensorFlow", color: "rgba(255, 109, 0, 0.7)", icon: "🧠" },
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
      {/* Animated background elements */}
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

      {/* Floating particles */}
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
        {/* Animated Headline Section */}
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
              <span className="text-3xl mb-1">{skill.icon}</span>
              <span className="text-white text-xs font-medium mt-1">{skill.name}</span>

              {/* Floating sparkles */}
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
              <span className="text-3xl mb-1">{skill.icon}</span>
              <span className="text-white text-xs font-medium mt-1">{skill.name}</span>

              {/* Floating sparkles */}
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