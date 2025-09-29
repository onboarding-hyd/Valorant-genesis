import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/DetailsPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-valorant-dark text-valorant-white">
        <Navigation />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;