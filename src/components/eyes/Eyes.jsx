import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Eyes = () => {
  const circleRef1 = useRef(null);
  const pointRef1 = useRef(null);
  const circleRef2 = useRef(null);
  const pointRef2 = useRef(null);

  useEffect(() => {
    const onMouseMove = (e, circleRef, pointRef) => {
      const circle = circleRef.current;
      const point = pointRef.current;
      const rect = circle.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const angle = Math.atan2(y, x);
      const distance = Math.min(circle.offsetWidth / 2 - 5, Math.hypot(x, y));

      const pointX = Math.cos(angle) * distance;
      const pointY = Math.sin(angle) * distance;

      gsap.to(point, { x: pointX, y: pointY, duration: 0.3 });
    };

    const mouseMoveHandler = (e) => {
      onMouseMove(e, circleRef1, pointRef1);
      onMouseMove(e, circleRef2, pointRef2);
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <div className="eyes">
      <div className="circle" ref={circleRef1}>
        <div className="point" ref={pointRef1}></div>
      </div>
      <div className="circle" ref={circleRef2}>
        <div className="point" ref={pointRef2}></div>
      </div>
    </div>
  );
};

export default Eyes;
