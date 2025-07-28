import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope, FaPhone, FaFacebookF, FaLinkedin, FaGithub,
  FaPaperPlane, FaWhatsapp, FaCheck, FaExclamationTriangle
} from 'react-icons/fa';

const Contact = () => {
         useEffect(() => {
          // Initialize scroll position
          window.scrollTo(0, 0);
        }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("oDWYTZMlFQvC9MiOg");

    // Animation trigger on component mount
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        'service_qcom042',
        'template_sn97csq',
        formRef.current,
        'oDWYTZMlFQvC9MiOg'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', title: '', message: '' });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      details: "maharabhossainopi24@gmail.com",

      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      details: "+8801841213662",

      color: "from-green-500 to-teal-500"
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp (Click to chat)",
      details: "+8801841213662",
      link: "https://wa.me/8801841213662",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/maharab.hossain.opi.2024",
      color: "bg-blue-600",
      hover: "hover:bg-blue-700"
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/maharab-hossain-opi-548294228/",
      color: "bg-blue-500",
      hover: "hover:bg-blue-600"
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/Maharab24",
      color: "bg-gray-800",
      hover: "hover:bg-gray-900"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      type: "spring",
      stiffness: 300
    }
  };

  const socialHover = {
    scale: 1.15,
    rotate: 10,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 500
    }
  };

  const pulse = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  if (!isVisible) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1f] to-[#13182c] py-12 px-4 md:px-8 overflow-hidden relative">
      {/* Animated background elements */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, rgba(124, 58, 237, 0.3) 100%)`
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

      {/* Floating message bubbles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/10 font-bold"
          style={{
            fontSize: `${Math.random() * 24 + 16}px`,
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
          {i % 4 === 0 ? "✉️" : i % 4 === 1 ? "📱" : i % 4 === 2 ? "💬" : "📞"}
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10 mt-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              backgroundPosition: {
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            Let's Connect
          </motion.h1>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={{ width: "128px" }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </motion.p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Contact Information */}
          <motion.div variants={item}>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl h-full">
              <motion.h2
                className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 p-2 rounded-lg"
                  animate={pulse}
                >
                  <FaEnvelope className="text-white" />
                </motion.div>
                Contact Information
              </motion.h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all group"
                    whileHover={hoverEffect}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    <motion.div
                      className={`bg-gradient-to-r ${item.color} p-3 rounded-xl`}
                      whileHover={{ rotate: 10 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 group-hover:text-white transition-colors">
                        {item.details}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-12">
                <motion.h3
                  className="text-xl font-bold text-white mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Follow Me
                </motion.h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} ${social.hover} p-4 rounded-full text-white transition-all`}
                      whileHover={socialHover}
                      whileTap={{ scale: 0.9 }}
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                        delay: 0.5 + (index * 0.1)
                      }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                className="mt-10 p-6 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl border border-cyan-500/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <h3 className="text-lg font-bold text-white mb-2">Availability</h3>
                <p className="text-gray-300 mb-3">I'm currently available for freelance work and part-time opportunities.</p>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                  <span className="text-green-400 font-medium">Available now</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={item}>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
              <motion.h2
                className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 p-2 rounded-lg"
                  animate={pulse}
                >
                  <FaPaperPlane className="text-white" />
                </motion.div>
                Send Me a Message
              </motion.h2>

              {submitStatus === 'success' ? (
                <motion.div
                  className="mb-6 p-4 bg-green-900/30 border border-green-500/30 rounded-lg flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FaCheck className="text-green-400 text-xl" />
                  <p className="text-green-400">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </motion.div>
              ) : submitStatus === 'error' ? (
                <motion.div
                  className="mb-6 p-4 bg-red-900/30 border border-red-500/30 rounded-lg flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FaExclamationTriangle className="text-red-400 text-xl" />
                  <p className="text-red-400">
                    Failed to send message. Please try again.
                  </p>
                </motion.div>
              ) : null}

              <form ref={formRef} onSubmit={handleSubmit}>
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"

                  />
                </motion.div>

                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"

                  />
                </motion.div>

                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="title" className="block text-gray-300 mb-2">title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"

                  />
                </motion.div>

                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"

                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Hours */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-xl font-bold text-white mb-2">Response time: Within 24 hours </h3>

        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <div className="text-9xl text-cyan-500 rotate-12">{"</>"}</div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <div className="text-9xl text-purple-500 -rotate-12">{"{}"}</div>
      </div>
    </div>
  );
};

export default Contact;