import React, { useEffect, useRef } from "react";

const Works = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    function refreshImage() {
      const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue("--secondaryColor");
      let imagePath;

      if (secondaryColor === "#98FB98") {
        imagePath = "../../src/assets/playGreen.png";
      } else if (secondaryColor === "#B0E0E6") {
        imagePath = "../../src/assets/playBlue.png";
      } else if (secondaryColor === "#f8f87c") {
        imagePath = "../../src/assets/playYellow.png";
      } else {
        imagePath = "../../src/assets/play.png";
      }

      imageRef.current.src = imagePath;
    }

    const root = document.documentElement;
    const observer = new MutationObserver(refreshImage);
    observer.observe(root, { attributes: true });

    refreshImage();

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className='ctnWorks'>
        <div className='worksTitle'>
          <h1 id='works'>
            <span>W</span>
            <span>O</span>
            <span className='colorized'>R</span>
            <span>K</span>
            <span>S</span>
          </h1>
        </div>
        <div className='worksImg'>
          <img ref={imageRef} alt="illustration play hard" />
        </div>
        <div className='worksPlayImg'>
          <img src="../../src/assets/ball.png" alt="" />
        </div>
        <div className="worksCtn">
        </div>
      </div>
    </>
  );
};

export default Works;
