import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaRocket, FaExternalLinkAlt, FaHeartbeat, FaTemperatureHigh, FaMicrochip, FaFilePdf, FaFilter, FaTimes, FaWifi } from 'react-icons/fa';

function Iot() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    search: ''
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/IoT.json');
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const allTypes = ['all', ...new Set(projects.map(project => project.type))];

  const filteredProjects = projects.filter(project => {
    const statusMatch = filters.status === 'all' || project.status === filters.status;
    const typeMatch = filters.type === 'all' || project.type === filters.type;
    const searchMatch = filters.search === '' ||
      project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      project.description.toLowerCase().includes(filters.search.toLowerCase());

    return statusMatch && typeMatch && searchMatch;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardItem = {
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

  const getFocusIcon = (focusArea) => {
    switch(focusArea) {
      case 'Healthcare Technology':
        return <FaHeartbeat className="text-red-500" />;
      case 'Smart Home':
        return <FaWifi className="text-blue-500" />;
      case 'Industrial IoT':
        return <FaMicrochip className="text-yellow-500" />;
      case 'Environmental Monitoring':
        return <FaTemperatureHigh className="text-green-500" />;
      default:
        return <FaMicrochip className="text-blue-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Progress':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Planned':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'Hardware + IoT Project':
        return 'bg-blue-900/30 text-blue-400';
      case 'Research':
        return 'bg-purple-900/30 text-purple-400';
      case 'Sensor Network':
        return 'bg-amber-900/30 text-amber-400';
      case 'Industrial Solution':
        return 'bg-indigo-900/30 text-indigo-400';
      default:
        return 'bg-gray-700/30 text-gray-400';
    }
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const clearFilters = () => {
    setFilters({
      status: 'all',
      type: 'all',
      search: ''
    });
  };

  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <div
      id="iot-projects"
      className="min-h-screen bg-gradient-to-br from-[#0d0f1a] to-[#1d1e30] py-16 px-4 md:px-8 overflow-hidden relative scroll-mt-24"
    >
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl"
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
        className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-purple-500/20 blur-3xl"
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

      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400/20"
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mt-20 text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
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
           IoT & Embedded Systems
          </motion.h1>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"
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
            Connecting the physical world through sensors, devices, and intelligent systems
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <h2 className="text-xl font-bold text-blue-400 flex items-center gap-2">
              <FaFilter className="text-blue-400" /> Filter Projects
            </h2>

            <div className="flex flex-wrap gap-3">
              {(filters.status !== 'all' || filters.type !== 'all' || filters.search !== '') && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors"
                >
                  <FaTimes /> Clear Filters
                </button>
              )}

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="bg-gray-900/70 border border-gray-800 rounded-lg pl-10 pr-4 py-2 w-full md:w-64 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Status</label>
              <div className="flex flex-wrap gap-2">
                {['all', 'Completed', 'In Progress', 'Planned'].map(status => (
                  <button
                    key={status}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filters.status === status
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    onClick={() => handleFilterChange('status', status)}
                  >
                    {status === 'all' ? 'All Statuses' : status}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Project Type</label>
              <div className="flex flex-wrap gap-2">
                {allTypes.map(type => (
                  <button
                    key={type}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filters.type === type
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    onClick={() => handleFilterChange('type', type)}
                  >
                    {type === 'all' ? 'All Types' : type}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="bg-gray-900/70 px-4 py-2 rounded-lg">
                <span className="text-gray-300">
                  Showing <span className="text-blue-400 font-medium">{filteredProjects.length}</span> of{' '}
                  <span className="text-purple-400 font-medium">{projects.length}</span> projects
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        ) : (
          <>
            {filteredProjects.length === 0 ? (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-3xl text-gray-400 mb-6">No projects match your filters</div>
                <button
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium"
                  onClick={clearFilters}
                >
                  Clear All Filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={cardItem}
                    className="bg-gradient-to-br from-gray-900/50 to-gray-900 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 shadow-xl overflow-hidden relative flex flex-col h-full group"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        <div className="bg-gray-900 p-2 rounded-lg group-hover:bg-blue-900 transition-colors">
                          {getFocusIcon(project.focusArea)}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

                      <div className={`inline-block ${getTypeColor(project.type)} px-3 py-1 rounded-full text-xs font-medium mb-4`}>
                        {project.type}
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <motion.button
                      className="mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                      onClick={() => setSelectedProject(project)}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="z-10 relative">View Details</span>

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
              </motion.div>
            )}
          </>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-900 border border-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-8">
                <div className="flex items-start gap-6 mb-8">
                  <div className="bg-gray-900 p-4 rounded-xl">
                    {getFocusIcon(selectedProject.focusArea)}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(selectedProject.status)}`}>
                        {selectedProject.status}
                      </span>
                    </div>
                    <p className="text-blue-400 mt-1">{selectedProject.focusArea}</p>
                    <p className={`${getTypeColor(selectedProject.type)} px-3 py-1 rounded-full inline-block mt-2 text-xs`}>
                      {selectedProject.type}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3">Project Overview</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.video && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-3">Project Video</h3>
                    <div className="aspect-video rounded-xl overflow-hidden mb-4">
                      {getYouTubeId(selectedProject.video) ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${getYouTubeId(selectedProject.video)}`}
                          title={selectedProject.title + " video"}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                          <p className="text-gray-400">Invalid video URL</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {selectedProject.report && (
                  <a
                    href={selectedProject.report}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-medium shadow-lg transition-all mb-8"
                  >
                    <FaFilePdf className="text-lg" />
                    <span>View Project Report</span>
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                )}

                <div className="flex gap-4 justify-end mt-8 flex-wrap">
                  {selectedProject.status === 'Completed' ? (
                    <>
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-lg text-white font-medium transition-all"
                        >
                          <FaGithub className="text-xl" />
                          <span>View on GitHub</span>
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      )}

                      {selectedProject.liveDemo && (
                        <a
                          href={selectedProject.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-medium shadow-lg transition-all"
                        >
                          <FaRocket className="text-lg" />
                          <span>Live Demo</span>
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      )}
                    </>
                  ) : (
                    <motion.div
                      className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        background: [
                          'linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                          'linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))',
                          'linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                        ]
                      }}
                      transition={{
                        duration: 0.5,
                        background: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: 'reverse'
                        }
                      }}
                    >
                      <motion.span
                        className="text-lg font-semibold text-blue-300"
                        animate={{
                          opacity: [0.7, 1, 0.7],
                          textShadow: [
                            '0 0 5px rgba(59, 130, 246, 0)',
                            '0 0 10px rgba(59, 130, 246, 0.5)',
                            '0 0 5px rgba(59, 130, 246, 0)'
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: 'reverse'
                        }}
                      >
                        Coming Soon
                      </motion.span>

                      <motion.div
                        className="flex gap-1 text-2xl text-red-400"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                          scale: [0.9, 1, 0.9]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity
                        }}
                      >
                        <motion.span
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: 0
                          }}
                        >
                          .
                        </motion.span>
                        <motion.span
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: 0.2
                          }}
                        >
                          .
                        </motion.span>
                        <motion.span
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: 0.4
                          }}
                        >
                          .
                        </motion.span>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-1/4 left-10 opacity-20">
        <FaMicrochip className="text-6xl text-blue-500" />
      </div>
      <div className="absolute bottom-1/3 right-10 opacity-20">
        <FaWifi className="text-6xl text-purple-500" />
      </div>
    </div>
  );
}

export default Iot;