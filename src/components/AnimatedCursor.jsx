import React, { useEffect, useState } from "react";

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    // Add hover detection to specific elements
    const hoverElements = document.querySelectorAll(
      "a, button, input, .hoverable"
    );
    hoverElements.forEach((el) => {
      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver);
        el.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  return (
    <>
      {/* Outer Circle */}
      <div
        className={`fixed pointer-events-none z-[9999]
          w-8 h-8 rounded-full border-2 border-indigo-500
          transform -translate-x-1/2 -translate-y-1/2
          transition-all duration-200 ease-out
          ${
            isHovering ? "scale-200 opacity-50 bg-indigo-500/30" : "scale-100"
          }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Inner Dot */}
      <div
        className={`fixed pointer-events-none z-[9999]
          w-2 h-2 bg-indigo-500 rounded-full
          transform -translate-x-1/2 -translate-y-1/2
          transition-all duration-100 ease-out
          ${isHovering ? "scale-300 opacity-0" : "scale-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default AnimatedCursor;
