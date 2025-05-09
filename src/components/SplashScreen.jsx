import { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  const [animationStage, setAnimationStage] = useState(0);
  
  useEffect(() => {
    // Animation sequence timeline
    const timer1 = setTimeout(() => setAnimationStage(1), 500);    // Drop to center
    const timer2 = setTimeout(() => setAnimationStage(2), 1000);   // Show text
    const timer3 = setTimeout(() => setAnimationStage(3), 2000);   // Show credits
    const timer4 = setTimeout(onFinish, 4000);                     // Finish

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onFinish]);

  // Split text for character animation
  const mainText = "CBG 2 Innovate4DigiJob";
  const developers = ["devfab250", "&", "devprince250"];

  return (
    <div className={`splash-screen ${animationStage >= 0 ? 'visible' : ''}`}>
      <div className={`logo-drop ${animationStage >= 1 ? 'centered' : ''}`}>
        {animationStage >= 2 && (
          <h1 className="logo-text">
            {mainText.split('').map((char, i) => (
              <span 
                key={i} 
                className="char" 
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {char}
              </span>
            ))}
          </h1>
        )}
      </div>
      
      {animationStage >= 3 && (
        <div className="developer-credits">
          <p className="developed-by">developed by:</p>
          <div className="developers">
            {developers.map((dev, i) => (
              <span 
                key={i} 
                className="dev-name"
                style={{ animationDelay: `${0.5 + i * 0.2}s` }}
              >
                {dev}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;