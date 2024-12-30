import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

import "./App.css";

const strings = [
  "Welcome to my portfolio",
  "I'm Alican Çamlıbel",
  "Software developer with expertise since 2017",
  "Frontend Developer specializing in modern web technologies",
  "Connect with me through the social links below",
];

function App() {
  const [visibleSocialIcons, setVisibleSocialIcons] = useState(false);
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings,
      typeSpeed: 40,
      backSpeed: 30,
      fadeOut: true,
      backDelay: 800,
      startDelay: 1000,
      loop: false,
      showCursor: false,
      cursorChar: '_',
      onComplete: (self) => {
        document.getElementsByClassName("App")[0].style["flex-direction"] = "column";
        setVisibleSocialIcons(true);
      },
      onReset: (self) => {
        console.log('Reset triggered!');
      },
      onStop: (pos, self) => {
        console.log('Animation stopped at: ', pos);
      }
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} className="animation-text"></span>
      {visibleSocialIcons && (
        <div className="social-container" style={{ marginTop: '2rem' }}>
          <a
            href="https://github.com/Nuptial"
            target="_blank"
            className="social github fade-in"
            rel="noreferrer"
            style={{ animationDelay: '0s' }}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/alican-%C3%A7aml%C4%B1bel-7a160290/"
            target="_blank"
            className="social linkedin fade-in"
            rel="noreferrer"
            style={{ animationDelay: '0.5s' }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://medium.com/@alican.camlibel91"
            target="_blank"
            className="social medium fade-in"
            rel="noreferrer"
            style={{ animationDelay: '1s' }}
          >
            <FontAwesomeIcon icon={faMedium} size="2x" />
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
