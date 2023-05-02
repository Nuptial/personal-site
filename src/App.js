import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import { SocialIcon } from "react-social-icons";

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
        self.cursor.remove();
        const animationText =
          document.getElementsByClassName("animation-text")[0];

        animationText.classList.add("moveTop");
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
          <SocialIcon
            url="https://github.com/Nuptial"
            target="_blank"
            bgColor="white"
            id="github-icon"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/alican-%C3%A7aml%C4%B1bel-7a160290/"
            target="_blank"
            bgColor="white"
            id="linkedin-icon"
          />
          <SocialIcon
            url="https://medium.com/@alican.camlibel91"
            target="_blank"
            bgColor="white"
            id="medium-icon"
          />
        </div>
      )}
    </div>
  );
}

export default App;
