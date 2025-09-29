import RegistrationForm from '../components/RegistrationForm';
import VideoBackground from '../components/VideoBackground';
import registerVideo from '../assets/Video Enhancer-1759152987000.mp4';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-valorant-dark text-valorant-white">
      <VideoBackground 
        videoSrc={registerVideo} 
        overlay={true} 
        overlayOpacity={0.4} 
      />
      <div className="relative z-10">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegisterPage;
