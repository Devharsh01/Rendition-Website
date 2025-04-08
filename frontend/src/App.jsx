import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Events,
  Footer,
  Productions,
  Home,
  Navbar,
  Teachings,
  Team,
  Form,
  Preloader,
} from "./components";
import RenditionLogo from "./assets/logo.png"; // Import your logo
import "./App.css";

// Custom Loading Component with Circular Loader
const LoadingScreen = ({ onLoadComplete }) => {
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        const newPercentage = prevPercentage < 100 ? prevPercentage + 1 : 100;
        if (newPercentage === 100) {
          clearInterval(interval);

          // Delay before transitioning to allow user to see 100%
          setTimeout(() => {
            setIsLoading(false);
            onLoadComplete();
          }, 1000);
        }

        return newPercentage;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Preloader percentage={percentage} />
    </div>
  );
};

const useComponentLoader = (componentCount) => {
  const [loadedComponents, setLoadedComponents] = useState(0);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);

  const incrementLoaded = () => {
    setLoadedComponents((prev) => {
      const newLoadedCount = prev + 1;
      if (newLoadedCount === componentCount) {
        setIsFullyLoaded(true);
      }
      return newLoadedCount;
    });
  };

  return { loadedComponents, isFullyLoaded, incrementLoaded };
};

function App() {
  const { loadedComponents, isFullyLoaded, incrementLoaded } =
    useComponentLoader(7); // 7 components
  const [showWebsite, setShowWebsite] = useState(false);

  const handleLoadComplete = () => {
    // Smoothly transition to website after loader completes
    setTimeout(() => {
      setShowWebsite(true);
    }, 500);
  };

  return (
    <div className="flex flex-col overflow-x-hidden bg-black">
      {!showWebsite && <LoadingScreen onLoadComplete={handleLoadComplete} />}

      <div
        className={`transition-opacity scroll-container duration-1000 ${
          showWebsite ? "opacity-100" : "opacity-0"
        }`}
      >
        <BrowserRouter>
          <Navbar onLoad={incrementLoaded} />
          <Home onLoad={incrementLoaded} />

          <Events onLoad={incrementLoaded} />
          <Teachings onLoad={incrementLoaded} />
          <Team onLoad={incrementLoaded} />
          <Productions onLoad={incrementLoaded} />
          <Form onLoad={incrementLoaded} />
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
