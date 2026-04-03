import { useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [clicked, setClicked] = useState(false);

  const handleEnter = () => {
    setClicked(true);
    setTimeout(() => {
      import("./utils/initialFX").then((module) => {
        if (module.initialFX) {
          module.initialFX();
        }
        setIsLoading(false);
      });
    }, 500); // Wait for fade-out before unmounting
  };

  return (
    <div className={`new-entrance-container ${clicked ? "fade-out" : ""}`}>
      <div className="new-entrance-left">
        <h1 className="new-entrance-title">Hi, I'm Vivek Pasarge</h1>
        <h2 className="new-entrance-subtitle">Welcome to my portfolio</h2>
        
        <button 
          onClick={handleEnter} 
          className="new-entrance-btn"
        >
          Know About Me
        </button>
      </div>
      <div className="new-entrance-right">
        <img 
          src="/images/hero.png" 
          alt="Hero" 
          className="new-entrance-image" 
          onError={(e) => { e.currentTarget.style.display = 'none'; }} 
        />
      </div>
    </div>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
