import { motion } from 'framer-motion';
import { FaTrophy, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaGamepad, FaClock } from 'react-icons/fa';
import riotLogo from '../assets/riot.svg';
import hsnLogo from '../assets/Hsn.svg';
import nighthawkLogo from '../assets/nighthawk.svg';

const DetailsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const details = [
    {
      icon: FaTrophy,
      title: "Prize Pool",
      description: "₹1,00,000 Total Prize Money",
    
    },
    {
      icon: FaCalendarAlt,
      title: "Tournament Dates",
      description: "October 11-To Be Declared, 2025",
      details: "Two-day intense competition with qualifiers and finals"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Venue",
      description: "Nighthawk Gaming Cafe and Lounge",
      details: "State-of-the-art gaming facility in Hyderabad"
    },
    {
      icon: FaUsers,
      title: "Team Format",
      description: "5v5 Team Competition",
      details: "Register individually for team matching"
    },
    {
      icon: FaGamepad,
      title: "Tournament Format",
      description: "Group Stage + Knockout Stage",
      details: "Best of 3 matches with professional casting and streaming"
    },
    {
      icon: FaClock,
      title: "Schedule",
      description: "To Be Declared",
      details: "Full day tournament with breaks and refreshments provided"
    }
  ];

  return (
    <section className="py-10 md:py-20 bg-valorant-dark relative overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23FF4654\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Agent Silhouette */}
      <motion.div
        initial={{ x: "-100%", opacity: 0.1 }}
        whileInView={{ x: "0%", opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-valorant-red/10 to-transparent"
        style={{
          clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-orbitron font-bold text-valorant-white mb-4 md:mb-6 px-2">
            TOURNAMENT <span className="text-valorant-red">DETAILS</span>
          </h2>
          <p className="text-sm md:text-xl text-valorant-cyan max-w-3xl mx-auto px-4">
            Get ready for the ultimate VALORANT experience in Hyderabad. 
            Here's everything you need to know about the competition.
          </p>
        </motion.div>

        {/* Details Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-20 px-2 md:px-0"
        >
          {details.map((detail, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
              }}
              className="card-hover bg-valorant-gray/50 backdrop-blur-sm p-4 md:p-8 rounded-lg border border-valorant-cyan/30 relative overflow-hidden group"
            >
              {/* Card Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-valorant-red/5 to-valorant-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <detail.icon className="text-3xl md:text-5xl text-valorant-cyan mb-3 md:mb-6 relative z-10" />
              <h3 className="text-lg md:text-2xl font-orbitron font-bold text-valorant-white mb-2 md:mb-4 relative z-10">
                {detail.title}
              </h3>
              <p className="text-valorant-cyan text-sm md:text-lg mb-2 md:mb-3 relative z-10">
                {detail.description}
              </p>
              <p className="text-valorant-white/80 text-xs md:text-sm relative z-10">
                {detail.details}
              </p>
              
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 border-2 border-valorant-red rounded-lg opacity-0 group-hover:opacity-100"
                animate={{
                  borderColor: ["#FF4654", "#00F5FF", "#FF4654"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center px-4"
        >
          <h3 className="text-xl md:text-3xl lg:text-4xl font-orbitron font-bold text-valorant-white mb-6 md:mb-12">
            OFFICIAL <span className="text-valorant-cyan">PARTNERS</span>
          </h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-16"
          >
            {/* HSN Logo */}
            <motion.div
              variants={logoVariants}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2)",
              }}
              className="filter grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-valorant-white/10 rounded-lg overflow-hidden border border-valorant-cyan/30">
                <img 
                  src={hsnLogo} 
                  alt="HSN" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-valorant-white mt-2 font-exo">Host Network</p>
            </motion.div>

            {/* Riot Games Logo */}
            <motion.div
              variants={logoVariants}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2)",
              }}
              className="filter grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-valorant-white/10 rounded-lg overflow-hidden border border-valorant-cyan/30">
                <img 
                  src={riotLogo} 
                  alt="Riot Games" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-valorant-white mt-2 font-exo">Riot Games</p>
            </motion.div>

            {/* Nighthawk Gaming Cafe Logo */}
            <motion.div
              variants={logoVariants}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2)",
              }}
              className="filter grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="w-32 h-32 bg-valorant-white/10 rounded-lg overflow-hidden border border-valorant-cyan/30 flex items-center justify-center p-2">
                    <img 
                      src="/src/assets/nighthawk.svg" 
                      alt="Nighthawk Gaming" 
                      className="max-w-full max-h-full object-contain"
                      onLoad={() => console.log('Nighthawk logo loaded with direct path')}
                      onError={(e) => {
                        console.error('Direct path failed, trying import:', e);
                        e.target.src = nighthawkLogo;
                      }}
                    />
              </div>
              <p className="text-valorant-white mt-2 font-exo">Nighthawk Gaming</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailsSection;
