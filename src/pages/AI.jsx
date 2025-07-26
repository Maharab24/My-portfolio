import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBrain, FaChartLine, FaRobot, FaLightbulb, FaFilter, FaTimes } from 'react-icons/fa';

function AI() {
       useEffect(() => {
        // Initialize scroll position
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

  // Fetch projects data from JSON
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/AI.json');
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

  // Filter projects based on selected filters
  const filteredProjects = projects.filter(project => {
    const statusMatch = filters.status === 'all' || project.status === filters.status;
    const typeMatch = filters.type === 'all' || project.type === filters.type;
    const searchMatch = filters.search === '' ||
      project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      project.description.toLowerCase().includes(filters.search.toLowerCase());

    return statusMatch && typeMatch && searchMatch;
  });

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

  // Get icon based on focus area
  const getFocusIcon = (focusArea) => {
    switch(focusArea) {
      case 'Natural Language Processing (NLP)':
        return <FaBrain className="text-blue-500" />;
      case 'Smart Cities & Sustainability':
        return <FaLightbulb className="text-green-500" />;
      case 'Data Visualization & Predictive Analytics':
        return <FaChartLine className="text-purple-500" />;
      case 'Recommendation Systems':
        return <FaRobot className="text-yellow-500" />;
      default:
        return <FaBrain className="text-blue-500" />;
    }
  };

  // Get status color
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

  // Get type color
  const getTypeColor = (type) => {
    switch(type) {
      case 'Web App':
        return 'bg-cyan-900/30 text-cyan-400';
      case 'Research':
        return 'bg-emerald-900/30 text-emerald-400';
      case 'Visualization Tool':
        return 'bg-purple-900/30 text-purple-400';
      case 'Mobile App':
        return 'bg-amber-900/30 text-amber-400';
      default:
        return 'bg-gray-700/30 text-gray-400';
    }
  };

  // Handle filter change
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      status: 'all',
      type: 'all',
      search: ''
    });
  };

  return (
    <div
      id="ai-projects"
      className="min-h-screen  bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-16 px-4 md:px-8 overflow-hidden relative scroll-mt-24"
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
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mt-20 text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
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
            Artificial Intelligence Projects
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
            Exploring the intersection of artificial intelligence and real-world problem solving
          </motion.p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          className="bg-gray-800/30 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <h2 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
              <FaFilter className="text-cyan-400" /> Filter Projects
            </h2>

            <div className="flex flex-wrap gap-3">
              {(filters.status !== 'all' || filters.type !== 'all' || filters.search !== '') && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
                >
                  <FaTimes /> Clear Filters
                </button>
              )}

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="bg-gray-900/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2 w-full md:w-64 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Status</label>
              <div className="flex flex-wrap gap-2">
                {['all', 'Completed', 'In Progress', 'Planned'].map(status => (
                  <button
                    key={status}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      filters.status === status
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                    }`}
                    onClick={() => handleFilterChange('status', status)}
                  >
                    {status === 'all' ? 'All Statuses' : status}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Project Type</label>
              <div className="flex flex-wrap gap-2">
                {['all', 'Web App', 'Research', 'Visualization Tool', 'Mobile App'].map(type => (
                  <button
                    key={type}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      filters.type === type
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                    }`}
                    onClick={() => handleFilterChange('type', type)}
                  >
                    {type === 'all' ? 'All Types' : type}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Counter */}
            <div className="flex items-center justify-end">
              <div className="bg-gray-900/50 px-4 py-2 rounded-lg">
                <span className="text-gray-300">
                  Showing <span className="text-cyan-400 font-medium">{filteredProjects.length}</span> of{' '}
                  <span className="text-purple-400 font-medium">{projects.length}</span> projects
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cyan-500"></div>
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
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-medium"
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
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl overflow-hidden relative flex flex-col h-full group"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="flex-grow">
                      {/* Project type badge */}
                      <div className="flex justify-between items-start mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        <div className="bg-gray-900 p-2 rounded-lg group-hover:bg-cyan-900 transition-colors">
                          {getFocusIcon(project.focusArea)}
                        </div>
                      </div>

                      {/* Project title */}
                      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

                      {/* Project type */}
                      <div className={`inline-block ${getTypeColor(project.type)} px-3 py-1 rounded-full text-xs font-medium mb-4`}>
                        {project.type}
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* View Details button */}
                    <motion.button
                      className="mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                      onClick={() => setSelectedProject(project)}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(56, 189, 248, 0.5)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="z-10 relative">View Details</span>

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
              </motion.div>
            )}
          </>
        )}
      </div>

      {/* Project Detail Modal */}
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
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal content */}
              <div className="p-8">
                {/* Header */}
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
                    <p className="text-cyan-400 mt-1">{selectedProject.focusArea}</p>
                    <p className={`${getTypeColor(selectedProject.type)} px-3 py-1 rounded-full inline-block mt-2 text-xs`}>
                      {selectedProject.type}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3">Project Overview</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700/50 text-gray-300 px-4 py-2 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub link */}
                <div className="flex justify-end mt-8">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-white font-medium transition-colors"
                  >
                    <FaGithub className="text-xl" />
                    <span>View on GitHub</span>
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating decorative AI icons */}
      <div className="absolute top-1/4 left-10 opacity-20">
        <FaBrain className="text-6xl text-blue-500" />
      </div>
      <div className="absolute bottom-1/3 right-10 opacity-20">
        <FaRobot className="text-6xl text-purple-500" />
      </div>
    </div>
  );
}

export default AI;