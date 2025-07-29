import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaChartLine, FaExternalLinkAlt, FaLightbulb, FaBrain, FaRocket, FaCogs } from 'react-icons/fa';
import Codeforce from '../assets/skillSet/codeforces.png';
import Leetcode from '../assets/skillSet/leetcode.png';
function Cp() {

           useEffect(() => {
            window.scrollTo(0, 0);
          }, []);


  const [cpStats, setCpStats] = useState({
    codeforces: {
      handle: "Maharab_Hossain_Opi",
      rating: 765,
      maxRating: 843,
      rank: "Newbie",
      contests: 23,
      solved: 288,
      link: "https://codeforces.com/profile/Maharab_Hossain_Opi"
    },
    leetcode: {
      handle: "maharabhossainopi24",
      rating: 0,
      contests: 0,
      solved: 21,
      easy: 14,
      medium: 7,
      hard: 0,
      link: "https://leetcode.com/u/maharabhossainopi24/"
    },
    skills: [
      { name: "Data Structures", level: 95 },
      { name: "Algorithms", level: 85 },
      { name: "Dynamic Programming", level: 30 },
      { name: "Graph Theory", level: 20 },
      { name: "Number Theory", level: 70 },
      { name: "Greedy Algorithms", level: 60 },
    ]
  });

  // Update ratings
  const updateRating = (platform, value) => {
    setCpStats(prev => ({
      ...prev,
      [platform]: {
        ...prev[platform],
        rating: Math.max(0, Math.min(value, 3000))
      }
    }));

    // Update max rating 
    if (platform === 'codeforces' && value > prev.codeforces.maxRating) {
      setCpStats(prev => ({
        ...prev,
        codeforces: {
          ...prev.codeforces,
          maxRating: value
        }
      }));
    }
  };

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
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const codeforcesHover = {
    scale: 1.03,
    boxShadow: "0 15px 30px rgba(255, 111, 0, 0.4)",
    transition: { duration: 0.3, ease: "easeOut" }
  };

  const leetcodeHover = {
    scale: 1.03,
    boxShadow: "0 15px 30px rgba(255, 212, 59, 0.4)",
    transition: { duration: 0.3, ease: "easeOut" }
  };

  // Get rank color based on rating
  const getRankColor = (rating) => {
    if (rating < 1200) return "text-gray-400";
    if (rating < 1400) return "text-green-500";
    if (rating < 1600) return "text-cyan-400";
    if (rating < 1900) return "text-blue-500";
    if (rating < 2100) return "text-purple-500";
    if (rating < 2400) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#0a0f1f] to-[#13182c] py-16 px-4 md:px-8 overflow-hidden relative"
      id="competitive-programming"
    >
      {/* Particle background */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, rgba(56, 189, 248, 0.5) 0%, rgba(124, 58, 237, 0.5) 100%)`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: Math.random() * 6 + 6,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Floating code symbols */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-400/10 font-mono font-bold"
          style={{
            fontSize: `${Math.random() * 24 + 12}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: Math.random() * 12 + 12,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        >
          {i % 4 === 0 ? "{" : i % 4 === 1 ? "}" : i % 4 === 2 ? "<" : ">"}
        </motion.div>
      ))}

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-[80px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-56 h-56 rounded-full bg-cyan-500/10 blur-[70px]"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mt-10 text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
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
            Competitive Programming
          </motion.h1>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "128px" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Solving complex problems with efficient algorithms and data structures
          </motion.p>
        </motion.div>

        {/* Platform Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
        {/* Codeforces Card */}
                  <motion.div
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-xl overflow-hidden relative"
                    variants={item}
                    whileHover={codeforcesHover}
                  >
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-1">
                      Codeforces
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-b p-2 rounded-xl w-10 h-10 flex items-center justify-center">
                        <img src={Codeforce} alt="Codeforces Logo" className="w-7 h-7 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">{cpStats.codeforces.handle}</h3>
                        <p className={`${getRankColor(cpStats.codeforces.rating)} font-bold text-xs`}></p>
                <p className={`${getRankColor(cpStats.codeforces.rating)} font-bold`}>
                  {cpStats.codeforces.rank}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-4 rounded-xl border border-white/5">
                <p className="text-gray-400 text-sm">Current Rating</p>
                <p className="text-2xl font-bold text-orange-400">{cpStats.codeforces.rating}</p>

              </div>
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-4 rounded-xl border border-white/5">
                <p className="text-gray-400 text-sm">Max Rating</p>
                <p className="text-2xl font-bold text-yellow-400">{cpStats.codeforces.maxRating}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-4 rounded-xl border border-white/5">
                <p className="text-gray-400 text-sm">Contests</p>
                <p className="text-2xl font-bold text-cyan-400">{cpStats.codeforces.contests}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-4 rounded-xl border border-white/5">
                <p className="text-gray-400 text-sm">Solved</p>
                <p className="text-2xl font-bold text-green-400">{cpStats.codeforces.solved}</p>
              </div>
            </div>

            <a
              href={cpStats.codeforces.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-orange-600 to-orange-800 text-white font-medium hover:shadow-lg transition-all"
            >
              <span>View Profile</span>
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </motion.div>

          {/* LeetCode Card */}
          <motion.div
            className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl overflow-hidden relative"
            variants={item}
            whileHover={leetcodeHover}
          >
            <div className="absolute top-6 right-6 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              LeetCode
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl">
                 <img src={Leetcode} alt="Leetcode Logo" className="w-7 h-7 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{cpStats.leetcode.handle}</h3>
                <p className={`${getRankColor(cpStats.leetcode.rating)} font-bold`}>

                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-4 rounded-xl border border-white/5">
                <p className="text-gray-400 text-sm">Rating</p>
                <p className="text-2xl font-bold text-yellow-400">{cpStats.leetcode.rating}</p>

              </div>
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-4 rounded-xl border border-white/5">
                <p className="text-gray-400 text-sm">Contests</p>
                <p className="text-2xl font-bold text-cyan-400">{cpStats.leetcode.contests}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-4 rounded-xl border border-white/5">
                <p className="text-gray-400 text-sm">Solved</p>
                <p className="text-2xl font-bold text-green-400">{cpStats.leetcode.solved}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-4 rounded-xl border border-white/5">
                <p className="text-gray-400 text-sm">Hard Solved</p>
                <p className="text-2xl font-bold text-red-400">{cpStats.leetcode.hard}</p>
              </div>
            </div>

            <a
              href={cpStats.leetcode.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-yellow-600 to-amber-800 text-white font-medium hover:shadow-lg transition-all"
            >
              <span>View Profile</span>
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl mb-16"
          variants={item}
          initial="hidden"
          animate="show"
        >
          <div className="text-center mb-10">
            <motion.h2
              className="text-3xl font-bold text-white mb-4 inline-block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Algorithmic Expertise
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "96px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FaChartLine className="text-cyan-400" /> Technical Skills
              </h3>
              <div className="space-y-6">
                {cpStats.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-4 rounded-xl border border-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full"
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FaLightbulb className="text-yellow-400" /> Problem Solving Approach
              </h3>

              <motion.div
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-5 rounded-xl border border-white/5 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-cyan-500/20 p-2 rounded-lg mt-1">
                    <FaBrain className="text-xl text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Understand & Analyze</h4>
                    <p className="text-gray-300 text-sm">
                      Carefully analyze problem requirements, constraints, and edge cases to form a complete understanding.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-5 rounded-xl border border-white/5 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-purple-500/20 p-2 rounded-lg mt-1">
                    <FaCogs className="text-xl text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Design & Optimize</h4>
                    <p className="text-gray-300 text-sm">
                      Select optimal algorithms and data structures, considering time and space complexity trade-offs.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-5 rounded-xl border border-white/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-yellow-500/20 p-2 rounded-lg mt-1">
                    <FaRocket className="text-xl text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Implement & Test</h4>
                    <p className="text-gray-300 text-sm">
                      Write clean, efficient code and thoroughly test with various inputs including edge cases.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating decorative icons */}
      <div className="absolute top-1/4 left-10 opacity-5">
        <FaCode className="text-9xl text-cyan-500" />
      </div>
      <div className="absolute bottom-1/3 right-10 opacity-5">
        <FaCode className="text-9xl text-purple-500" />
      </div>
    </div>
  );
}

export default Cp;