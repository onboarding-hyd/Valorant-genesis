import { useRef, useEffect, useState } from 'react';

const VideoBackground = ({ videoSrc, overlay = true, overlayOpacity = 0.4 }) => {
  const videoRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video && videoSrc) {
      // Ensure video plays when component mounts
      video.play().catch(console.error);
    }
  }, [videoSrc]);

  const handleVideoError = () => {
    console.log('Video failed to load, using fallback background');
    setHasError(true);
  };

  // Fallback gradient background if video fails or no video provided
  if (!videoSrc || hasError) {
    return (
      <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-valorant-dark via-valorant-gray to-black"></div>
        {overlay && (
          <div 
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          ></div>
        )}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1]">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={handleVideoError}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Configurable overlay for text readability */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        ></div>
      )}
    </div>
  );
};

export default VideoBackground;
