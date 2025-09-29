import { useState, useRef, useEffect } from 'react';
import arcaneVideo from '../assets/arcane-splash.webm';

const SplashScreen = ({ onComplete }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [isEnding, setIsEnding] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Show skip button after 3 seconds
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 3000);

    return () => clearTimeout(skipTimer);
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoEnd = () => {
    setIsEnding(true);
    setTimeout(() => {
      onComplete();
    }, 500); // Small delay for fade effect
  };

  const handleSkip = () => {
    setIsEnding(true);
    setTimeout(() => {
      onComplete();
    }, 300); // Faster transition when skipped
  };

  const handleVideoError = () => {
    console.log('Video failed to load, showing fallback splash');
    setIsVideoLoaded(true); // Show fallback content
  };

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${isEnding ? 'opacity-0' : 'opacity-100'}`}>
      {/* Video Container */}
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          onLoadedData={handleVideoLoad}
          onEnded={handleVideoEnd}
          onError={handleVideoError}
        >
          <source src={arcaneVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>


        {/* Loading Overlay */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-valorant-red mx-auto mb-4"></div>
              <p className="text-valorant-white text-xl font-orbitron">Loading...</p>
            </div>
          </div>
        )}

        {/* Skip Button */}
        {showSkip && isVideoLoaded && (
          <button
            onClick={handleSkip}
            className="absolute top-8 right-8 bg-valorant-red/20 backdrop-blur-sm border border-valorant-red text-valorant-white px-6 py-3 rounded-lg font-orbitron text-sm hover:bg-valorant-red/30 transition-all duration-300 hover:shadow-glow"
          >
            Skip Intro
          </button>
        )}

      </div>

      {/* Click overlay to proceed */}
      <div 
        className="absolute inset-0 cursor-pointer z-10"
        onClick={handleSkip}
      />
    </div>
  );
};

export default SplashScreen;
