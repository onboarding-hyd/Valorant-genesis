import DetailsSection from '../components/DetailsSection';
import VideoBackground from '../components/VideoBackground';
import detailsVideo from '../assets/11_00_Homescreen.mp4';

const DetailsPage = () => {
  return (
    <div className="min-h-screen bg-valorant-dark text-valorant-white">
      <VideoBackground 
        videoSrc={detailsVideo} 
        overlay={true} 
        overlayOpacity={0.4} 
      />
      <div className="relative z-10">
        <DetailsSection />
      </div>
    </div>
  );
};

export default DetailsPage;
