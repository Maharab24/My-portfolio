import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const FieldsOfWork = () => {
  const containerRef = useRef(null);

  // Fields data with new animation properties
  const fields = [
    {
      title: "Artificial Intelligence",
      description: "Machine learning models, computer vision, NLP systems, and predictive analytics solutions",
      color: "from-purple-500 to-indigo-600",
      icon: "🤖",
      animation: {
        initial: { x: -100, opacity: 0, rotateY: 90 },
        animate: { x: 0, opacity: 1, rotateY: 0 },
        transition: { duration: 0.7, type: "spring", bounce: 0.3 },
        hover: { y: -15, rotate: -1, boxShadow: "0 25px 50px -12px rgba(192, 132, 252, 0.3)" }
      }
    },
    {
      title: "Web Development",
      description: "Full-stack applications, responsive UIs, modern frameworks, and API integrations",
      color: "from-cyan-400 to-blue-500",
      icon: "💻",
      animation: {
        initial: { y: 100, opacity: 0, scale: 0.8 },
        animate: { y: 0, opacity: 1, scale: 1 },
        transition: { duration: 0.7, type: "spring", bounce: 0.3, delay: 0.1 },
        hover: { y: -15, rotate: 1, boxShadow: "0 25px 50px -12px rgba(56, 189, 248, 0.3)" }
      }
    },
    {
      title: "Research",
      description: "Cutting-edge technology research, academic publications, and innovative problem solving",
      color: "from-green-400 to-emerald-500",
      icon: "🔬",
      animation: {
        initial: { x: 100, opacity: 0, rotateX: 90 },
        animate: { x: 0, opacity: 1, rotateX: 0 },
        transition: { duration: 0.7, type: "spring", bounce: 0.3, delay: 0.2 },
        hover: { y: -15, rotate: -1, boxShadow: "0 25px 50px -12px rgba(52, 211, 153, 0.3)" }
      }
    },
    {
      title: "Competitive Programming",
      description: "Algorithm design, data structures, problem-solving, and coding competitions",
      color: "from-amber-400 to-orange-500",
      icon: "🏆",
      animation: {
        initial: { scale: 0, opacity: 0, rotate: 45 },
        animate: { scale: 1, opacity: 1, rotate: 0 },
        transition: { duration: 0.7, type: "spring", bounce: 0.4, delay: 0.3 },
        hover: { y: -15, rotate: 2, boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.3)" }
      }
    }
  ];

  // Floating animation for icons
  const floatAnimation = {
    y: [0, -15, 0],
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

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e2a3b] py-20 px-4 sm:px-8 overflow-hidden relative"
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

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
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
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Fields Of My Works
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Explore the domains where I apply my expertise and passion to create innovative solutions
          </motion.p>
        </motion.div>

        {/* Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {fields.map((field, index) => (
            <motion.div
              key={index}
              className="field-card"
              initial={field.animation.initial}
              animate={field.animation.animate}
              transition={field.animation.transition}
              whileHover={field.animation.hover}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`h-full bg-gradient-to-br ${field.color} rounded-2xl p-6 shadow-xl overflow-hidden relative group`}>
                {/* Floating icon with depth */}
                <motion.div
                  className="text-6xl absolute -top-6 -right-6 opacity-20 group-hover:opacity-30 transition-opacity"
                  animate={floatAnimation}
                  style={{
                    filter: "drop-shadow(0 5px 5px rgba(0,0,0,0.3))",
                    textShadow: "0 5px 15px rgba(0,0,0,0.2)"
                  }}
                >
                  {field.icon}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {field.title}
                  </h3>
                  <p className="text-gray-100 mb-6">
                    {field.description}
                  </p>

                  {/* Clickable button with shine effect */}
                  <motion.button
                    className="px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full text-white border border-white/20 relative overflow-hidden group-hover:bg-white/10 transition-colors"
                    onClick={() => console.log(`Viewing projects in ${field.title}`)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">View Projects</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%", transition: { duration: 0.6 } }}
                    />
                  </motion.button>
                </div>

                {/* Animated sparkles inside card */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                      width: `${Math.random() * 8 + 2}px`,
                      height: `${Math.random() * 8 + 2}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: 0.3
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.4, 0],
                    }}
                    transition={{
                      duration: Math.random() * 2 + 1,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FieldsOfWork;