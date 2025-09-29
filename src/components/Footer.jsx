import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaDiscord, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import TournamentRulesModal from './TournamentRulesModal';

const Footer = () => {
  const [showRulesModal, setShowRulesModal] = useState(false);

  const socialLinks = [
    {
      icon: FaTwitter,
      href: "https://twitter.com/hsnesports",
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/hsnesports",
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    {
      icon: FaDiscord,
      href: "https://discord.gg/hsnesports",
      label: "Discord",
      color: "hover:text-indigo-400"
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com/hsnesports",
      label: "YouTube",
      color: "hover:text-red-400"
    }
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "onboarding@hyderabadhydras.in",
      href: "mailto:onboarding@hyderabadhydras.in"
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 63027 87542 / +91 95735 68846",
      href: "tel:+916302787542"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Venue",
      value: "Nighthawk Gaming Cafe and Lounge, Hyderabad",
      href: "https://maps.app.goo.gl/rNU3gu1xDKi4mC2D6"
    }
  ];

  return (
    <footer className="bg-black text-valorant-white relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23FF4654\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M20 20L30 10L20 0L10 10Z\"/%3E%3C/g%3E%3C/svg%3E')",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-3xl font-orbitron font-bold text-valorant-red mb-4">
              HSN ESPORTS
            </h3>
            <p className="text-valorant-cyan text-lg mb-6">
              Hyderabad's Premier Gaming Network
            </p>
            <p className="text-valorant-white/80 leading-relaxed">
              Bringing world-class esports tournaments to the city of pearls. 
              Join us in celebrating competitive gaming excellence.
            </p>
            
            {/* Tournament Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 p-4 bg-valorant-gray/30 backdrop-blur-sm rounded-lg border border-valorant-cyan/30"
            >
              <h4 className="font-orbitron font-bold text-valorant-cyan mb-2">Tournament Details</h4>
              <div className="text-sm text-valorant-white/90 space-y-1">
                <p>📅 October 11 - TBD, 2025</p>
                <p>🏆 ₹1,00,000 Prize Pool</p>
                <p>📍 Nighthawk Gaming Cafe and Lounge</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h4 className="text-2xl font-orbitron font-bold text-valorant-white mb-8">
              CONTACT <span className="text-valorant-cyan">INFO</span>
            </h4>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  whileHover={{ 
                    x: 10,
                    color: "#FF4654",
                  }}
                  className="flex items-center space-x-4 text-valorant-cyan transition-colors duration-300 hover:text-valorant-red group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-valorant-gray/50 rounded-lg border border-valorant-cyan/30 group-hover:border-valorant-red/30"
                  >
                    <contact.icon className="text-xl" />
                  </motion.div>
                  <div className="text-left">
                    <p className="text-sm text-valorant-white/60 uppercase tracking-wider">
                      {contact.label}
                    </p>
                    <p className="text-valorant-white font-semibold">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Media & Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <h4 className="text-2xl font-orbitron font-bold text-valorant-white mb-8">
              FOLLOW <span className="text-valorant-cyan">US</span>
            </h4>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 bg-valorant-gray/50 rounded-lg border border-valorant-cyan/30 text-valorant-cyan transition-all duration-300 hover:border-valorant-red/30 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="text-2xl" />
                </motion.a>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <motion.button
                onClick={() => {
                  const heroSection = document.querySelector('section');
                  heroSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full py-3 px-6 bg-valorant-red/20 border border-valorant-red rounded-lg text-valorant-red font-orbitron font-bold hover:bg-valorant-red hover:text-white transition-all duration-300"
              >
                BACK TO TOP
              </motion.button>
              
              <motion.button
                onClick={() => {
                  const registrationSection = document.getElementById('registration');
                  registrationSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full py-3 px-6 bg-valorant-cyan/20 border border-valorant-cyan rounded-lg text-valorant-cyan font-orbitron font-bold hover:bg-valorant-cyan hover:text-black transition-all duration-300"
              >
                REGISTER NOW
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-valorant-gray"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-valorant-white/60">
                © 2025 HSN Esports. All rights reserved.
              </p>
              <p className="text-valorant-white/40 text-sm">
                VALORANT is a trademark of Riot Games, Inc.
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ color: "#FF4654" }}
                className="text-valorant-cyan hover:text-valorant-red transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#FF4654" }}
                className="text-valorant-cyan hover:text-valorant-red transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.button
                onClick={() => setShowRulesModal(true)}
                whileHover={{ color: "#FF4654" }}
                className="text-valorant-cyan hover:text-valorant-red transition-colors cursor-pointer"
              >
                Tournament Rules
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Glow Effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-valorant-red/10 rounded-full blur-3xl"
      />

      {/* Tournament Rules Modal */}
      <TournamentRulesModal 
        isOpen={showRulesModal} 
        onClose={() => setShowRulesModal(false)} 
      />
    </footer>
  );
};

export default Footer;
