import HeroSection from '../components/HeroSection';
import VideoBackground from '../components/VideoBackground';
import vctVideo from '../assets/11_05_Homescreen_VCT.mp4';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-valorant-dark text-valorant-white">
      <VideoBackground 
        videoSrc={vctVideo} 
        overlay={true} 
        overlayOpacity={0.2} 
      />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
