import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Collapse from "../../components/collapse/Collapse";
import Eyes from "../../components/eyes/Eyes";

function About() {
    const aboutTitleRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const opacity = Math.min(1, window.scrollY / 100);
            gsap.to(aboutTitleRef.current, {
                opacity,
                duration: 0.3,
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        function refreshImage() {
            const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue("--secondaryColor");
            let imagePath;

            if (secondaryColor === "#98FB98") {
                imagePath = "../src/assets/helloGreen.png";
            } else if (secondaryColor === "#B0E0E6") {
                imagePath = "../src/assets/helloBlue.png";
            } else if (secondaryColor === "#f8f87c") {
                imagePath = "../src/assets/helloYellow.png";
            } else {
                imagePath = "../src/assets/hello.png";
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
            <div className="imgAbout">
                <img ref={imageRef} alt="developer say hello" />
                <div className="eyesMove">
                    <Eyes />
                </div>
            </div>
            <div className="txtAbout">
                <h1 id="about" ref={aboutTitleRef} style={{ opacity: 0 }}>
                   WHAT IS MY P<span className="colorized">R</span>OFIL ?
                </h1>
                <p className="pTop">
                    "After a career change, I rediscovered my passion for development,
                    particularly front-end development. At the age of **, I rediscovered
                    my love for creativity, design, immersion, and user interface (UI).
                    Imagine a developer juggling lines of code while dreaming of 3D
                    worlds and artificial intelligence. I'm Clément, a creative
                    developer looking for uniqueness in every pixel and humor in every
                    line of code. Welcome to my world, where development becomes an
                    artistic experience."
                </p>
                <Collapse />
                <p className="pDown">
                    "In summary, I'm a versatile individual who adapts seamlessly to a diverse array of projects. For me, programming languages and frameworks are tools that help materialize ideas, rather than limitations. Committed to ongoing growth, I delve into various cutting-edge technologies and innovations, including 3D animation and artificial intelligence, to enhance user experiences. My ultimate aim is to continuously push boundaries, fusing technology and art to create good and fun experiences."
                </p>
            </div>
        </>
    );
}

export default About;
