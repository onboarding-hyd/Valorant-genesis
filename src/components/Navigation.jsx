import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import riotLogo from '../assets/riot.svg';
import nighthawkLogo from '../assets/nighthawk.svg';
import hsnLogo from '../assets/Hsn.svg';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black border-b border-valorant-red/30 z-50 shadow-lg">
      <div className="px-0 py-2 relative w-full h-20 overflow-hidden">
        {/* Left side logos */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center space-x-4 pl-2 h-full">
          {/* Riot Logo */}
          <motion.img
            src={riotLogo}
            alt="Riot Games"
            className="h-16 w-auto object-contain cursor-pointer max-h-full"
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
              filter: "brightness(1.2)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          {/* Nighthawk Logo */}
          <motion.img
            src={nighthawkLogo}
            alt="Nighthawk Gaming"
            className="h-16 w-auto object-contain cursor-pointer max-h-full"
            whileHover={{ 
              scale: 1.05,
              rotate: -2,
              filter: "brightness(1.2)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        {/* Right side - HSN Logo and Video */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center space-x-3 pr-2 h-full">
          {/* HSN Logo */}
          <motion.img
            src={hsnLogo}
            alt="HSN"
            className="h-16 w-auto object-contain cursor-pointer max-h-full"
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
              filter: "brightness(1.2)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          {/* Video */}
          <motion.video
            className="h-16 w-auto object-contain cursor-pointer max-h-full rounded"
            autoPlay
            muted
            loop
            playsInline
            whileHover={{ 
              scale: 1.05,
              filter: "brightness(1.2)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <source src="/src/assets/Video Object Remover-1759179848000.mp4" type="video/mp4" />
          </motion.video>
        </div>

        <div className="flex items-center justify-center w-full">
          {/* Navigation Links */}
          <div className="flex items-center justify-center space-x-16">
            <Link 
              to="/" 
              className={`px-8 py-4 rounded-lg font-exo text-xl font-semibold transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-valorant-red text-white shadow-glow' 
                  : 'text-valorant-white hover:text-valorant-cyan hover:bg-valorant-gray/50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/details" 
              className={`px-8 py-4 rounded-lg font-exo text-xl font-semibold transition-all duration-300 ${
                isActive('/details') 
                  ? 'bg-valorant-red text-white shadow-glow' 
                  : 'text-valorant-white hover:text-valorant-cyan hover:bg-valorant-gray/50'
              }`}
            >
              Details
            </Link>
            <Link 
              to="/register" 
              className={`px-8 py-4 rounded-lg font-exo text-xl font-semibold transition-all duration-300 ${
                isActive('/register') 
                  ? 'bg-valorant-red text-white shadow-glow' 
                  : 'text-valorant-white hover:text-valorant-cyan hover:bg-valorant-gray/50'
              }`}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
