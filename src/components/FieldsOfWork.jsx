import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const FieldsOfWork = ({id}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");

  // Fields data with deep 3D animation properties
  const fields = [
    {
      id: "ai",
      title: "Artificial Intelligence",
      description: "Machine learning models, computer vision, NLP systems, and predictive analytics solutions",
      color: "from-purple-500 to-indigo-600",
      icon: "🤖",
      path: "/AI",
      animation: {
        hidden: { z: -500, scale: 0.2, opacity: 0, rotateY: 45 },
        visible: {
          z: 0,
          scale: 1,
          opacity: 1,
          rotateY: 0,
          transition: {
            duration: 0.9,
            type: "spring",
            bounce: 0.3
          }
        },
        hover: {
          y: -15,
          z: 20,
          boxShadow: "0 25px 50px -12px rgba(192, 132, 252, 0.3)",
          transition: { duration: 0.3 }
        }
      }
    },
    {
      id: "web",
      title: "Web Development",
      description: "Full-stack applications, responsive UIs, modern frameworks, and API integrations",
      color: "from-cyan-400 to-blue-500",
      icon: "💻",
      animation: {
        hidden: { z: -500, scale: 0.2, opacity: 0, rotateX: 30 },
        visible: {
          z: 0,
          scale: 1,
          opacity: 1,
          rotateX: 0,
          transition: {
            duration: 0.9,
            type: "spring",
            bounce: 0.3,
            delay: 0.1
          }
        },
        hover: {
          y: -15,
          z: 20,
          boxShadow: "0 25px 50px -12px rgba(56, 189, 248, 0.3)",
          transition: { duration: 0.3 }
        }
      }
    },
    {
      id: "research",
      title: "Research",
      description: "Cutting-edge technology research, academic publications, and innovative problem solving",
      color: "from-green-400 to-emerald-500",
      icon: "🔬",
      animation: {
        hidden: { z: -500, scale: 0.2, opacity: 0, rotateZ: -20 },
        visible: {
          z: 0,
          scale: 1,
          opacity: 1,
          rotateZ: 0,
          transition: {
            duration: 0.9,
            type: "spring",
            bounce: 0.3,
            delay: 0.2
          }
        },
        hover: {
          y: -15,
          z: 20,
          boxShadow: "0 25px 50px -12px rgba(52, 211, 153, 0.3)",
          transition: { duration: 0.3 }
        }
      }
    },
    {
      id: "competitive",
      title: "Competitive Programming",
      description: "Algorithm design, data structures, problem-solving, and coding competitions",
      color: "from-amber-400 to-orange-500",
      icon: "🏆",
      animation: {
        hidden: { z: -500, scale: 0.2, opacity: 0, rotate: 45 },
        visible: {
          z: 0,
          scale: 1,
          opacity: 1,
          rotate: 0,
          transition: {
            duration: 0.9,
            type: "spring",
            bounce: 0.4,
            delay: 0.3
          }
        },
        hover: {
          y: -15,
          z: 20,
          boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.3)",
          transition: { duration: 0.3 }
        }
      }
    },
    {
      id: "iot",
      title: "IoT & Embedded Systems",
      description: "Connected devices, sensor networks, embedded firmware, and smart hardware solutions",
      color: "from-rose-500 to-pink-600",
      icon: "🌐",
      animation: {
        hidden: { z: -500, scale: 0.2, opacity: 0, rotateX: -30, rotateY: 30 },
        visible: {
          z: 0,
          scale: 1,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          transition: {
            duration: 0.9,
            type: "spring",
            bounce: 0.35,
            delay: 0.4
          }
        },
        hover: {
          y: -15,
          z: 20,
          boxShadow: "0 25px 50px -12px rgba(251, 113, 133, 0.3)",
          transition: { duration: 0.3 }
        }
      }
    }
  ];

  // Filter options
  const filterOptions = [
    { id: "all", label: "All Fields" },
    { id: "ai", label: "AI" },
    { id: "web", label: "Web" },
    { id: "research", label: "Research" },
    { id: "competitive", label: "Programming" },
    { id: "iot", label: "IoT" }
  ];

  // Filtered fields based on active filter
  const filteredFields = activeFilter === "all"
    ? fields
    : fields.filter(field => field.id === activeFilter);

  // Floating animation for icons
  const floatAnimation = {
    y: [0, -15, 0],
    z: [0, 10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Glow animation
  const glowAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.2, 0.4, 0.2],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Container animation
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  return (
    <div
      id={id}
      ref={containerRef}
     
      className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e2a3b] py-20 px-4 sm:px-8 overflow-hidden relative scroll-mt-24"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-1/4 w-16 h-16 rounded-full bg-cyan-400/20 blur-xl"
        animate={glowAnimation}
      />
      <motion.div
        className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full bg-purple-500/30 blur-xl"
        animate={glowAnimation}
        transition={{ ...glowAnimation.transition, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 left-10 w-14 h-14 rounded-full bg-blue-500/25 blur-xl"
        animate={glowAnimation}
        transition={{ ...glowAnimation.transition, delay: 2 }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-20 h-20 rounded-full bg-rose-500/20 blur-xl"
        animate={glowAnimation}
        transition={{ ...glowAnimation.transition, delay: 1.5 }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, (Math.random() - 0.5) * 40, 0],
            z: [0, 20, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20, z: -50 }}
          animate={isInView ? { opacity: 1, y: 0, z: 0 } : "hidden"}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : "hidden"}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Fields Of My Expertise
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, z: -30 }}
            animate={isInView ? { opacity: 1, z: 0 } : "hidden"}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Explore the domains where I apply my expertise to create innovative solutions
          </motion.p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : "hidden"}
          transition={{ delay: 0.6 }}
        >
          {filterOptions.map((option) => (
            <motion.button
              key={option.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === option.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(option.id)}
            >
              {option.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Fields Grid - Visible only when in view */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ perspective: "1000px" }}
        >
          <AnimatePresence>
            {filteredFields.map((field, index) => (
              <motion.div
                key={field.id}
                className="field-card"
                variants={field.animation}
                initial="hidden"
                animate="visible"
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  z: -100,
                  transition: { duration: 0.3 }
                }}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                style={{ transformStyle: "preserve-3d" }}
                layout
              >
                <Link to={field.path} className="h-full block">
                  <div className={`h-full bg-gradient-to-br ${field.color} rounded-2xl p-6 shadow-xl overflow-hidden relative group hover:shadow-2xl transition-all duration-500`}>
                    {/* Floating icon with depth */}
                    <motion.div
                      className="text-7xl absolute -top-5 -right-5 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                      animate={floatAnimation}
                      style={{
                        filter: "drop-shadow(0 5px 5px rgba(0,0,0,0.3))",
                        textShadow: "0 5px 15px rgba(0,0,0,0.2)"
                      }}
                    >
                      {field.icon}
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {field.title}
                        </h3>
                        <p className="text-gray-100 text-base mb-6">
                          {field.description}
                        </p>
                      </div>

                      {/* Clickable button with shine effect */}
                      <motion.div
                        className="mt-auto"
                        whileHover={{ scale: 1.05, z: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="px-5 py-3 bg-black/30 backdrop-blur-sm rounded-xl text-white border border-white/20 relative overflow-hidden group-hover:bg-white/10 transition-colors">
                          <span className="relative z-10 flex items-center justify-between">
                            <span>Explore Projects</span>
                            <span className="transform transition-transform group-hover:translate-x-1">→</span>
                          </span>
                          <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%", transition: { duration: 0.6 } }}
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Animated sparkles inside card */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                          width: `${Math.random() * 6 + 2}px`,
                          height: `${Math.random() * 6 + 2}px`,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          opacity: 0.3
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 0.4, 0],
                          z: [0, 10, 0]
                        }}
                        transition={{
                          duration: Math.random() * 2 + 1,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                      />
                    ))}

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                      <div className="absolute -top-8 -right-8 w-16 h-16 rotate-45 bg-white/10"></div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No results message */}
        {filteredFields.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-3xl text-gray-400 mb-4">No fields match this filter</div>
            <button
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-medium"
              onClick={() => setActiveFilter("all")}
            >
              Show All Fields
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FieldsOfWork;