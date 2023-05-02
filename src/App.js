import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

import "./App.css";

function App() {
  const [visibleSocialIcons, setVisibleSocialIcons] = useState(false);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Welcome to my personal website.",
        "My name is Alican Çamlıbel.",
        "I have started the software development adventure since 2017.",
        "I'm working as Frontend Developer since 2017 I try to follow up-to-date technologies related to software.",
        " You can follow the links below to get to know me better and my accounts.",
      ],
      typeSpeed: 30,
      backSpeed: 30,
      fadeOut: true,
      backDelay: 500,
      startDelay: 1000,
      onComplete: (self) => {
        document.getElementsByClassName("App")[0].style["flex-direction"] =
          "column";
        self.cursor.remove();
        setVisibleSocialIcons(true);
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="App">
      <span ref={el} className="animation-text"></span>
      {visibleSocialIcons && (
        <div className="social-container">
          <a
            href="https://github.com/Nuptial"
            target="_blank"
            className="social github"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/alican-%C3%A7aml%C4%B1bel-7a160290/"
            target="_blank"
            className="social linkedin"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://medium.com/@alican.camlibel91"
            target="_blank"
            className="social medium"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faMedium} size="2x" />
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
