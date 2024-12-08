import React, { useEffect, useRef } from "react";

const AnimatedCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Move the cursor to the mouse position instantly for smooth movement
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "40px", // Adjust size of crosshair outer lines
          height: "40px",
          border: "2px solid #F28D9F", // Outer border color
          borderRadius: "50%", // Circular shape for the cursor
          opacity: 1, // Ensure it's visible at all times
        }}
      >
        {/* Outer Horizontal Line */}
        <div
          className="absolute w-5 h-1 bg-[#F28D9F] transform -translate-x-1/2 -translate-y-1/2"
          style={{ top: "50%" }}
        />
        {/* Outer Vertical Line */}
        <div
          className="absolute w-1 h-5 bg-[#F28D9F] transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: "50%" }}
        />
        {/* Inner Horizontal Line */}
        <div
          className="absolute w-3 h-1 bg-[#F28D9F] transform -translate-x-1/2 -translate-y-1/2"
          style={{ top: "50%" }}
        />
        {/* Inner Vertical Line */}
        <div
          className="absolute w-1 h-3 bg-[#F28D9F] transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: "50%" }}
        />
      </div>
    </>
  );
};

export default AnimatedCursor;
