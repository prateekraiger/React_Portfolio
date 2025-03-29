import React, { useEffect, useState, memo } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const AnimatedCursor = memo(() => {
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // More performant spring animation with increased stiffness for less lag
  const cursorX = useSpring(mousePosition.x, { damping: 28, stiffness: 350 });
  const cursorY = useSpring(mousePosition.y, { damping: 28, stiffness: 350 });

  // Scale transforms for better performance
  const scaleTransform = useTransform(
    [isClicking, isHovering],
    () => (isClicking ? 0.8 : isHovering ? 1.2 : 1)
  );

  // Use throttled mouse move for better performance
  useEffect(() => {
    let timeoutId = null;
    
    const handleMouseMove = (e) => {
      if (timeoutId) return;
      
      timeoutId = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        timeoutId = null;
      }, 5); // Small throttle delay for smoother movement
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e) => {
      if (e.target.closest('button, a, input, textarea, select, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Use passive event listeners for better performance
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mousedown", handleMouseDown, { passive: true });
    document.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseover", handleMouseEnter, { passive: true });
    document.addEventListener("mouseout", handleMouseLeave, { passive: true });

    return () => {
      // Clean up
      clearTimeout(timeoutId);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  // Hide cursor on mobile devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] mix-blend-difference will-change-transform"
      style={{
        translateX: "-50%",
        translateY: "-50%",
        x: cursorX,
        y: cursorY,
      }}
    >
      {/* Main cursor container - using GPU accelerated properties */}
      <motion.div
        className="relative"
        animate={{ scale: scaleTransform }}
        transition={{ 
          duration: 0.15, 
          ease: "easeOut" 
        }}
      >
        {/* Outer circle */}
        <motion.div
          className="absolute rounded-full border-2 border-[#F28D9F] opacity-80"
          style={{
            width: "40px",
            height: "40px",
            left: "-20px",
            top: "-20px",
          }}
          animate={{
            scale: isHovering ? 1.2 : 1,
            opacity: isHovering ? 0.5 : 0.8,
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        />

        {/* Crosshair - simplified with fixed positioning */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Horizontal line */}
          <motion.div
            className="absolute bg-[#F28D9F] left-1/2 transform -translate-x-1/2"
            style={{ height: "2px" }}
            animate={{
              width: isHovering ? "12px" : "20px",
              opacity: isClicking ? 1 : 0.8,
            }}
            transition={{ duration: 0.15 }}
          />

          {/* Vertical line */}
          <motion.div
            className="absolute bg-[#F28D9F] top-1/2 transform -translate-y-1/2"
            style={{ width: "2px" }}
            animate={{
              height: isHovering ? "12px" : "20px",
              opacity: isClicking ? 1 : 0.8,
            }}
            transition={{ duration: 0.15 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
});

export default AnimatedCursor;
