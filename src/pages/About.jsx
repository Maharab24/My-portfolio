import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaHome, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLaptopCode, FaBrain, FaCode, FaMedal } from 'react-icons/fa';
import profile2 from '../assets/profile-2.png';
import university from '../assets/university.png';
import college from '../assets/college.jpg';
import school from '../assets/school.jpg';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
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

  // Education details with images
  const education = [
    {
      image: university,
      title: "University",
      description: "United International University",
      year: "2022-2026",
      achievements: "BSc in Computer Science & Engineering"
    },
    {
      image: college,
      title: "College",
      description: "Government Science College, Dhaka",
      year: "2018-2020",
      achievements: "GPA 5.0 in HSC"
    },
    {
      image: school,
      title: "School",
      description: "Hasan Ali Government High School, Chandpur",
      year: "2016-2018",
      achievements: "GPA 5.0 in SSC"
    }
  ];

  // Personal details
  const personalDetails = [
    {
      icon: <FaHome className="text-green-400" />,
      title: "Hometown",
      description: "Chandpur, Bangladesh",
      animation: "spring"
    },
    {
      icon: <FaMapMarkerAlt className="text-red-400" />,
      title: "Current Location",
      description: "Sonirakra, Dhaka, Bangladesh",
      animation: "spring"
    },
    {
      icon: <FaPhone className="text-cyan-400" />,
      title: "Phone (Emergency Contact)",
      description: "+880 1841213662",
      animation: "spring"
    }
  ];

  // Passion cards
  const passions = [
    {
      icon: <FaCode className="text-cyan-400 text-3xl" />,
      title: "Web Development",
      description: "Creating responsive, modern web applications with React, Node.js and modern frameworks"
    },
    {
      icon: <FaBrain className="text-purple-400 text-3xl" />,
      title: "Artificial Intelligence",
      description: "Exploring machine learning models and AI solutions for real-world problems"
    },
    {
      icon: <FaMedal className="text-yellow-400 text-3xl" />,
      title: "Competitive Programming",
      description: "Solving complex algorithmic challenges and participating in coding competitions"
    }
  ];

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-[#0c1120] to-[#1a243a] py-20 px-4 md:px-8 overflow-hidden relative"
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
            className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
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
            About Me
          </motion.h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "128px" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Personal introduction */}
        <motion.div
          className="bg-gradient-to-br from-cyan-900/20 to-purple-900/40 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 mb-16 shadow-xl shadow-purple-500/20 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{
            boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
            y: -5
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <motion.h3
                className="text-3xl font-bold text-white mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                Passionate Innovator & Problem Solver
              </motion.h3>

              <motion.p
                className="text-gray-300 mb-6 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                Hello! I'm <span className="text-cyan-300 font-medium">Maharab Hossain Opi</span>, a passionate tech lover who is always curious and excited about new ideas. I enjoy exploring different areas of technology, solving problems, and creating useful things that make a difference.
              </motion.p>

              <motion.p
                className="text-gray-300 mb-6 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9 }}
              >
               I enjoy building responsive websites, learning about artificial intelligence, and joining programming contests. I love trying new things in tech and always want to improve my skills. I use both my technical knowledge and creative ideas to do great work.
              </motion.p>

              <motion.p
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.0 }}
              >
                I believe in the power of technology to transform ideas into reality, and I'm committed to continuous learning and growth in this ever-evolving field.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, type: "spring" }}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-1 rounded-full">
                  <div className="bg-gray-900 rounded-full p-2">
                    <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 w-48 h-48 rounded-full flex items-center justify-center">
                      <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-1 rounded-full">
                        <div className="text-5xl"><img src={profile2} alt="Profile" className="w-40 h-40 rounded-full object-cover" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg font-bold"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  Opi
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Education */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <motion.div
              className="flex items-center mb-8"
              variants={item}
            >
              <FaLaptopCode className="text-4xl text-purple-500 mr-4" />
              <h3 className="text-3xl font-bold text-white">Education Journey</h3>
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/20 transition-all"
                  whileHover={{
                    y: -8,
                    backgroundColor: 'rgba(30, 41, 59, 0.7)',
                    boxShadow: '0 15px 30px rgba(124, 58, 237, 0.3)'
                  }}
                >
                  <div className="flex items-start">
                    <div className="mr-5">
                      <img
                        src={edu.image}
                        alt={edu.title}
                        className="w-16 h-16 object-contain rounded-full border-2 border-purple-500/50"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{edu.title}</h4>
                      <p className="text-cyan-300 text-lg mb-1">{edu.description}</p>
                      <p className="text-gray-400 mb-2">{edu.year}</p>
                      <p className="text-gray-300">{edu.achievements}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Personal info */}
          <div>
            <motion.div
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="mb-12"
            >
              <motion.div
                className="flex items-center mb-8"
                variants={item}
              >
                <FaMapMarkerAlt className="text-4xl text-cyan-400 mr-4" />
                <h3 className="text-3xl font-bold text-white">Personal Details</h3>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personalDetails.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-all"
                    whileHover={{
                      y: -8,
                      backgroundColor: 'rgba(30, 41, 59, 0.7)',
                      boxShadow: '0 15px 30px rgba(56, 189, 248, 0.3)'
                    }}
                  >
                    <div className="flex items-start">
                      <div className="text-2xl mr-4">{info.icon}</div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{info.title}</h4>
                        <p className="text-cyan-300 text-lg">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Passions section */}
            <motion.div
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <motion.div
                className="flex items-center mb-8"
                variants={item}
              >
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-1 rounded-full mr-4">
                  <div className="bg-gray-900 rounded-full p-2">
                    <FaBrain className="text-2xl text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white">My Passions</h3>
              </motion.div>

              <div className="space-y-6">
                {passions.map((passion, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/20 transition-all"
                    whileHover={{
                      y: -5,
                      backgroundColor: 'rgba(30, 41, 59, 0.7)',
                      boxShadow: '0 15px 30px rgba(124, 58, 237, 0.3)'
                    }}
                  >
                    <div className="flex items-start">
                      <div className="text-3xl mr-5">{passion.icon}</div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{passion.title}</h4>
                        <p className="text-gray-300">{passion.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
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
            "I don't just write code, I craft solutions that make a difference"
          </motion.div>

          <motion.div
            className="h-1 w-48 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: "192px" } : {}}
            transition={{ duration: 1, delay: 1.4 }}
          />

          
        </motion.div>
      </div>
    </div>
  );
}

export default About;