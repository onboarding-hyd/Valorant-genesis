import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGamepad, FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

const TournamentRulesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-valorant-dark border-2 border-valorant-cyan rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-valorant-red to-valorant-cyan p-6 relative">
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-2">
              Cafe Hydras Kickoff Event — Rules & Guidelines
            </h2>
            <p className="text-white/90 font-exo">
              Official tournament rules and conduct expectations
            </p>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/30 rounded-lg hover:bg-black/50 transition-colors duration-200"
            >
              <FaTimes className="text-white text-xl" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
            {/* Event Overview */}
            <div className="mb-8">
              <h3 className="text-xl font-orbitron font-bold text-valorant-red mb-4">Event Overview</h3>
              <p className="text-valorant-white/90 leading-relaxed mb-6">
                Café Hydras Kickoff is an inaugural esports-focused event aimed at building local FPS communities, 
                showcasing competitive play, and providing players with a premium café experience. This document 
                contains the official rules, operational guidelines, and conduct expectations for participants, 
                staff, and partners.
              </p>

              {/* Quick Facts */}
              <div className="bg-valorant-gray/30 rounded-lg p-6 border border-valorant-cyan/30">
                <h4 className="text-lg font-orbitron font-bold text-valorant-cyan mb-4">Quick Facts</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <FaCalendarAlt className="text-valorant-cyan" />
                    <div>
                      <p className="text-valorant-white/60 text-sm">Event Date:</p>
                      <p className="text-valorant-white font-semibold">Oct 11 - TBD</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaMapMarkerAlt className="text-valorant-cyan" />
                    <div>
                      <p className="text-valorant-white/60 text-sm">Venue:</p>
                      <p className="text-valorant-white font-semibold">NightHawk Gaming Lounge and Cafe</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaGamepad className="text-valorant-cyan" />
                    <div>
                      <p className="text-valorant-white/60 text-sm">Game Title(s):</p>
                      <p className="text-valorant-white font-semibold">Valorant</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaUsers className="text-valorant-cyan" />
                    <div>
                      <p className="text-valorant-white/60 text-sm">Organiser Contact:</p>
                      <p className="text-valorant-white font-semibold">RIOT GAMES</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rules Sections */}
            <div className="space-y-8">
              {/* General Rules */}
              <div>
                <h3 className="text-xl font-orbitron font-bold text-valorant-red mb-4">1. General Rules</h3>
                <ul className="text-valorant-white/90 space-y-2 list-disc list-inside">
                  <li>All participants must register through the official registration channel and provide valid details.</li>
                  <li>Participants must carry valid photo ID proof (Aadhaar, College ID, Passport, Driver's License) as requested.</li>
                  <li>Organizers' decisions are final and binding on all participants.</li>
                  <li>Any form of cheating, collusion, or dishonest behavior will lead to immediate disqualification.</li>
                  <li>Participants must follow the event schedule; failure to be present at match time may result in forfeit.</li>
                  <li>Each team will have 5+1 (substitute), a total of 6 player's roster.</li>
                  <li>In case if anyone from the team fails to show up then only the sub player will be allowed to play, If there is no proper 5 man to play then, they will be forfeited.</li>
                </ul>
              </div>

              {/* Eligibility & Age */}
              <div>
                <h3 className="text-xl font-orbitron font-bold text-valorant-red mb-4">2. Eligibility & Age</h3>
                <p className="text-valorant-white/90">
                  Organizers reserve the right to verify eligibility and request additional proofs (tracker.gg links etc)
                </p>
              </div>

              {/* Registration & Check-in */}
              <div>
                <h3 className="text-xl font-orbitron font-bold text-valorant-red mb-4">3. Registration & Check-in</h3>
                <ul className="text-valorant-white/90 space-y-2 list-disc list-inside">
                  <li>Registration opens on: 30-09-2025 and closes on: 06-10-2025.</li>
                  <li>On-site check-in starts at: 11-05-2025. Participants must check in at least 30 minutes before their first match.</li>
                  <li>Team rosters must be finalized 24 hours before the event starts. Substitutions are allowed only with admin approval.</li>
                </ul>
              </div>

              {/* Tournament Format & Match Settings */}
              <div>
                <h3 className="text-xl font-orbitron font-bold text-valorant-red mb-4">4. Tournament Format & Match Settings</h3>
                <div className="text-valorant-white/90 space-y-2">
                  <p className="font-semibold text-valorant-cyan">Default/placeholder format (modify per game):</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Stage 1: Group Stage — Single Elimination / BO3</li>
                    <li>Stage 2: Playoffs — Single Elimination / BO3</li>
                    <li>Finals: BO5 (if applicable)</li>
                  </ul>
                  <p className="mt-4">
                    <span className="font-semibold text-valorant-cyan">Map selection:</span> (map veto / organizer picks). 
                    Specific match settings (round time, economy, bomb timer, etc.) should follow the official 
                    rulebook of the game and will be shared prior to the event.
                  </p>
                </div>
              </div>

              {/* Equipment, Setup & Responsibilities */}
              <div>
                <h3 className="text-xl font-orbitron font-bold text-valorant-red mb-4">5. Equipment, Setup & Responsibilities</h3>
                <ul className="text-valorant-white/90 space-y-2 list-disc list-inside">
                  <li>Players may use the equipment provided by Cafe Hydras or bring their own peripherals — subject to admin approval.</li>
                  <li>No external recording/hacks or unauthorized software allowed on venue machines.</li>
                  <li>Players are responsible for ensuring their accounts are properly logged in, and for any account-related issues.</li>
                  <li>Organizers will provide LAN/internet connectivity; in case of connectivity failure, admins will decide match rescheduling.</li>
                </ul>
              </div>

              {/* Anti-Cheat Policy */}
              <div>
                <h3 className="text-xl font-orbitron font-bold text-valorant-red mb-4">6. Anti-Cheat Policy</h3>
                <ul className="text-valorant-white/90 space-y-2 list-disc list-inside">
                  <li>Use of third-party tools, scripts, macros, or any software that provides unfair advantage is strictly prohibited.</li>
                  <li>Organizers reserve the right to run anti-cheat scans and request that players open their systems for inspection.</li>
                  <li>Suspicious behavior will be investigated; confirmed violations will lead to disqualification and possible ban from future events.</li>
                </ul>
              </div>

              {/* Match Conduct & Pauses */}
              <div>
                <h3 className="text-xl font-orbitron font-bold text-valorant-red mb-4">7. Match Conduct & Pauses</h3>
                <ul className="text-valorant-white/90 space-y-2 list-disc list-inside">
                  <li>Teams must be ready at the match station 15 minutes before their scheduled time.</li>
                  <li>A grace period of 10 minutes is given; after that, teams may forfeit the match.</li>
                  <li>On weekdays the matches will sharply start from 6:30 pm sharp, reporting time is 6:00 pm for the players. And on weekends the match timings will be announced prior</li>
                  <li>Pauses allowed only for technical issues and must be requested via admin. Abuse of pause system may be penalized.</li>
                  <li>Players must not taunt, harass, or distract opponents. Unsportsmanlike conduct will be penalized.</li>
                </ul>
              </div>

              {/* Streaming, Media & Content Rights */}
              <div>
                <h3 className="text-xl font-orbitron font-bold text-valorant-red mb-4">8. Streaming, Media & Content Rights</h3>
                <ul className="text-valorant-white/90 space-y-2 list-disc list-inside">
                  <li>Cafe Hydras may stream matches. By participating, players consent to being recorded and streamed.</li>
                  <li>Players/teams wishing to stream must obtain permission from organizers and follow overlay and sponsor guidelines.</li>
                  <li>All content created during the event is owned and used by Cafe Hydras for promotional purposes.</li>
                </ul>
              </div>

              {/* Code of Conduct & Safety */}
              <div>
                <h3 className="text-xl font-orbitron font-bold text-valorant-red mb-4">9. Code of Conduct & Safety</h3>
                <ul className="text-valorant-white/90 space-y-2 list-disc list-inside">
                  <li>Zero tolerance towards abusive language, threats, hate speech, or discriminatory behavior.</li>
                  <li>No alcohol, illegal substances, or weapons allowed on venue premises.</li>
                  <li>Follow venue safety protocols and staff instructions. Organizers hold the right to remove any participant violating rules.</li>
                </ul>
              </div>

              {/* Prize Distribution & Taxes */}
              <div>
                <h3 className="text-xl font-orbitron font-bold text-valorant-red mb-4">10. Prize Distribution & Taxes</h3>
                <ul className="text-valorant-white/90 space-y-2 list-disc list-inside">
                  <li>Prize pool and distribution will be announced prior to the event.</li>
                  <li>Winners must be present at the award ceremony to claim prizes; organizers reserve the right to redistribute unclaimed prizes.</li>
                  <li>Applicable taxes or statutory deductions will be borne by the winner as per Indian law.</li>
                </ul>
              </div>

              {/* Sponsor & Branding Guidelines */}
              <div>
                <h3 className="text-xl font-orbitron font-bold text-valorant-red mb-4">11. Sponsor & Branding Guidelines</h3>
                <ul className="text-valorant-white/90 space-y-2 list-disc list-inside">
                  <li>Sponsors' branding and activation must not be obstructed by participants.</li>
                  <li>Any partner activations at the venue must be coordinated with Café Hydras marketing team.</li>
                  <li>Unauthorized promotional activities within the venue are strictly prohibited.</li>
                </ul>
              </div>

              {/* Cancellations & Force Majeure */}
              <div>
                <h3 className="text-xl font-orbitron font-bold text-valorant-red mb-4">12. Cancellations & Force Majeure</h3>
                <ul className="text-valorant-white/90 space-y-2 list-disc list-inside">
                  <li>Event may be postponed or canceled due to force majeure or unforeseen circumstances.</li>
                  <li>Organizers are not liable for travel/accommodation costs incurred by participants.</li>
                </ul>
              </div>

              {/* Dispute Resolution */}
              <div>
                <h3 className="text-xl font-orbitron font-bold text-valorant-red mb-4">13. Dispute Resolution</h3>
                <p className="text-valorant-white/90">
                  Any disputes will be handled by the Cafe Hydras admin panel. The admin team's decision is final. 
                  Parties agree to resolve disputes in accordance with Indian laws and jurisdiction of Hyderabad courts.
                </p>
              </div>

              {/* Contact & Emergency Info */}
              <div className="bg-valorant-gray/30 rounded-lg p-6 border border-valorant-red/30">
                <h3 className="text-xl font-orbitron font-bold text-valorant-red mb-4">14. Contact & Emergency Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-valorant-cyan font-semibold">Event Organizer:</p>
                    <p className="text-valorant-white">Hitesh Srivastav</p>
                    <p className="text-valorant-white">Phone: +91 63027 87542</p>
                  </div>
                  <div>
                    <p className="text-valorant-cyan font-semibold">On-site Admin:</p>
                    <p className="text-valorant-white">Prabhas</p>
                    <p className="text-valorant-white">Phone: +91 95735 68846</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TournamentRulesModal;
