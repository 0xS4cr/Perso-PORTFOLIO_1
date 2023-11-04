import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Topbar from "./pages/topbar/Topbar";
import About from "./pages/about/About";
import Works from "./pages/works/Works";
import Contact from "./pages/contact/Contact";

function App() {
  const [showScrollIcon, setShowScrollIcon] = useState(true);
  const [hoveredSpan, setHoveredSpan] = useState(null);
  const [hidden, setHidden] = useState(false);
  const clementRef = useRef(null);
  const renaudRef = useRef(null);
  const otherElementsRef = useRef([]);
  const imageRef = useRef(null); // Ajout d'une référence pour l'image

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowScrollIcon(false);
      } else {
        setShowScrollIcon(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Animation pour "CLEMENT"
    gsap.fromTo(
      clementRef.current.childNodes,
      {
        autoAlpha: 0,
        y: "-=40",
      },
      {
        duration: 0.1,
        y: "0",
        autoAlpha: 1,
        stagger: 0.1,
        ease: "Power3.easeOut",
        onComplete: () => {
          gsap.to(otherElementsRef.current, {
            autoAlpha: 1,
            duration: 1,
            stagger: 0.1,
            ease: "Power3.easeIn",
          });
        },
      }
    );

    // Animation pour "RENAUD"
    gsap.fromTo(
      renaudRef.current.childNodes,
      {
        autoAlpha: 0,
        y: "+=40",
      },
      {
        duration: 0.1,
        y: "0",
        autoAlpha: 1,
        stagger: 0.1,
        ease: "Power3.easeOut",
      }
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function refreshImage() {
      const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue("--secondaryColor");
      let imagePath;

      if (secondaryColor === "#98FB98") {
        imagePath = "../src/assets/computerGreen.png";
      } else if (secondaryColor === "#B0E0E6") {
        imagePath = "../src/assets/computerBlue.png";
      } else if (secondaryColor === "#f8f87c") {
        imagePath = "../src/assets/computerYellow.png";
      } else {
        imagePath = "../src/assets/computer.png";
      }

      imageRef.current.src = imagePath;
    }

    const root = document.documentElement;
    const observer = new MutationObserver(refreshImage);
    observer.observe(root, { attributes: true });

    refreshImage();
  }, []);

  return (
    <>
      <div className="background">
        <div className="gradient"></div>
        <div className="grain"></div>
      </div>
      <Topbar />
      <section className="home">
        <div className="titleOne">
          <div className="clement" ref={clementRef}>
            <span className="colorized">C</span>
            <span>L</span>
            <span>E</span>
            <span>M</span>
            <span>E</span>
            <span>N</span>
            <span>T</span>
          </div>
          <div
            className="from"
            ref={(el) => otherElementsRef.current.push(el)}
            style={{ opacity: 0 }}
          >
            <p>-PRODUCT OF HAUTE-SAÔNE, FRANCE-</p>
          </div>
          <div
            className="image1"
            ref={(el) => otherElementsRef.current.push(el)}
            style={{ opacity: 0 }}
          >
            <img ref={imageRef} alt="illustration developer" />
          </div>
        </div>
        <div className="titleTwo">
          <div className="renaud" ref={renaudRef}>
            <span className="colorized">R</span>
            <span>E</span>
            <span>N</span>
            <span>A</span>
            <span>U</span>
            <span>D</span>
          </div>
          <div
            className="textHome"
            ref={(el) => otherElementsRef.current.push(el)}
            style={{ opacity: 0 }}
          >
            <p>
              A NEW FRONT-AND-CREATIV DEV <br /> SINCE 2023
            </p>
          </div>
        </div>
        <div
          className="description"
          ref={(el) => otherElementsRef.current.push(el)}
          style={{ opacity: 0 }}
        >
          <div className="textDescription">
            <p>
              Hi visitor, i'm a passionate and creative front-end developer.
              <br /> Specializing in React, I blend programming and design to
              craft immersive and <br />
              interactive user experiences.
            </p>
          </div>
          {showScrollIcon && <div className="icon-scroll"></div>}
          {showScrollIcon && <p id="scroll">&lt; DISCOVER ME AND MY WORK &gt;</p>}
        </div>
      </section>
      <section className="about">
        <About />
      </section>
      <section className="works">
        <Works />
      </section>
      <section className="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
