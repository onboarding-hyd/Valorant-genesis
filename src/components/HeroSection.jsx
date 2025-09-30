import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaClock, FaTrophy, FaMapMarkerAlt } from 'react-icons/fa';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [showLogo, setShowLogo] = useState(true);

  // Calculate countdown to October 5, 2025, 11:59:59 PM IST
  useEffect(() => {
    const targetDate = new Date('2025-10-05T23:59:59+05:30');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Logo animation sequence
  useEffect(() => {
    const logoSequence = setTimeout(() => {
      setShowLogo(false);
    }, 3000);

    return () => clearTimeout(logoSequence);
  }, []);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 3.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 4,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleLine1 = "ARE YOU READY";
  const titleLine2 = "HYDERABAD";

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Transparent background to show video behind */}

      {/* Logo Animation */}
      {showLogo && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: [0.5, 1.2, 1],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ 
            duration: 3,
            times: [0, 0.3, 0.7, 1],
            ease: "easeInOut",
          }}
          className="absolute z-20 flex flex-col items-center"
        >
          <motion.div
            animate={{ 
              filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
            }}
            transition={{
              duration: 0.3,
              repeat: 3,
              repeatType: "reverse",
            }}
            className="text-8xl font-orbitron font-bold text-valorant-red mb-4"
          >
            HSN
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-6xl font-orbitron font-bold text-valorant-cyan"
          >
            VALORANT
          </motion.div>
        </motion.div>
      )}

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >

        {/* Tagline */}
        {/* Removed as per request: In Partnership with Riot Games */}
        
        {/* Info Blocks */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 px-4 md:px-0"
        >
          <div className="flex flex-col items-center p-4 md:p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-valorant-cyan/30">
            <FaClock className="text-2xl md:text-4xl text-valorant-cyan mb-2 md:mb-3" />
            <h3 className="text-sm md:text-lg font-bold text-valorant-white mb-1 md:mb-2">Date</h3>
            <p className="text-valorant-white text-xs md:text-base text-center">October 11 - TBD, 2025</p>
          </div>
          <div className="flex flex-col items-center p-4 md:p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-valorant-cyan/30">
            <FaTrophy className="text-2xl md:text-4xl text-valorant-cyan mb-2 md:mb-3" />
            <h3 className="text-sm md:text-lg font-bold text-valorant-white mb-1 md:mb-2">Prize Pool</h3>
            <p className="text-valorant-white text-xs md:text-base text-center">₹1,00,000 INR</p>
          </div>
          <div className="flex flex-col items-center p-4 md:p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-valorant-cyan/30">
            <FaMapMarkerAlt className="text-2xl md:text-4xl text-valorant-cyan mb-2 md:mb-3" />
            <h3 className="text-sm md:text-lg font-bold text-valorant-white mb-1 md:mb-2">Location</h3>
            <p className="text-valorant-white text-xs md:text-base text-center">Nighthawk Gaming Cafe</p>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          variants={itemVariants}
          className="mb-8 md:mb-12 px-4 md:px-0"
        >
          <h3 className="text-lg md:text-2xl lg:text-3xl font-orbitron font-bold text-valorant-white mb-4 md:mb-6 text-center">
            Registration Ends In:
          </h3>
          <div className="flex justify-center space-x-2 md:space-x-4 lg:space-x-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-center p-2 md:p-4 bg-black/50 backdrop-blur-sm rounded-lg border border-valorant-red/50"
              >
                <motion.div
                  animate={{
                    textShadow: [
                      "0 0 5px #FF4654",
                      "0 0 20px #FF4654",
                      "0 0 5px #FF4654",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-xl md:text-3xl lg:text-5xl font-orbitron font-bold text-valorant-red"
                >
                  {String(value).padStart(2, '0')}
                </motion.div>
                <div className="text-xs md:text-sm lg:text-base text-valorant-white uppercase font-exo">
                  {unit}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4 md:px-0"
        >
          <Link to="/details">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 245, 255, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-valorant-cyan/20 border-2 border-valorant-cyan text-valorant-cyan hover:bg-valorant-cyan hover:text-black transition-all duration-300 text-sm md:text-lg lg:text-xl px-6 py-3 md:px-8 md:py-4 rounded-lg font-orbitron relative overflow-hidden group w-full sm:min-w-[180px] md:min-w-[200px]"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              VIEW DETAILS
            </motion.button>
          </Link>
          
          <Link to="/register">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 70, 84, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm md:text-lg lg:text-xl px-6 py-3 md:px-8 md:py-4 rounded-lg font-orbitron relative overflow-hidden group w-full sm:min-w-[180px] md:min-w-[200px]"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              REGISTER NOW
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
