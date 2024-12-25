import React, { Suspense, lazy, useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";
import Preloader from "./components/Preloader";

// Lazy-loaded components
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

// Optimized animations config
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: "easeOut" }
};

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <motion.div
    {...fadeInUp}
    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 p-4"
  >
    <motion.div
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
      className="bg-slate-800 border border-slate-700 rounded-xl p-8 max-w-md w-full text-center shadow-2xl"
    >
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mx-auto text-indigo-500 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-indigo-400 mb-2">
          Unexpected Error
        </h2>
      </div>
      <pre className="text-sm text-slate-300 bg-slate-900 p-4 rounded-lg mb-6 max-h-40 overflow-auto">
        {error.message}
      </pre>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={resetErrorBoundary}
        className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-500 transition-colors duration-200"
      >
        Reload Application
      </motion.button>
    </motion.div>
  </motion.div>
);

const LoadingSpinner = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-slate-900"
    >
      <motion.div
        animate={{ 
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className="w-16 h-16 border-3 border-transparent border-t-indigo-600 rounded-full"
      />
      <div className="mt-4 text-indigo-400 font-medium text-lg">
        Loading{dots}
      </div>
    </motion.div>
  );
};

// Optimized background animation
const BackgroundAnimation = () => (
  <motion.div
    animate={{
      backgroundPosition: ["0% 0%", "100% 100%"],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear"
    }}
    className="absolute inset-0 bg-[linear-gradient(45deg,#1e293b_25%,#312e81_50%,#1e293b_75%)] bg-[size:200%_200%] opacity-40"
  />
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onLoadComplete={handleLoadComplete} />;
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-x-hidden text-slate-300 antialiased selection:bg-indigo-500/50 selection:text-white"
          >
            {/* Optimized Background Section */}
            <div className="fixed inset-0 -z-10">
              <div className="absolute inset-0 bg-slate-900">
                <BackgroundAnimation />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(71,85,105,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(71,85,105,0.1)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
              </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-8 space-y-12 max-w-6xl">
              <Navbar />

              {/* Optimized Section Animations */}
              {[
                { id: "hero", component: Hero },
                { id: "about", component: About },
                { id: "skills", component: Skills },
                { id: "projects", component: Projects },
                { id: "experience", component: Experience },
                { id: "contact", component: Contact },
              ].map(({ id, component: Component }, index) => (
                <motion.section
                  key={id}
                  id={id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.4,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative group"
                >
                  <Component />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { duration: 0.2 }
                    }}
                    className="absolute -inset-2 bg-indigo-900/10 rounded-xl blur-md -z-10"
                  />
                </motion.section>
              ))}
            </div>

            {/* Optimized Cursor */}
            <AnimatedCursor
              innerSize={8}
              outerSize={16}
              color="99, 102, 241"
              outerAlpha={0.3}
              innerScale={1}
              outerScale={2}
              outerStyle={{
                border: "2px solid rgba(99, 102, 241, 0.5)",
                backgroundColor: "transparent"
              }}
              innerStyle={{
                backgroundColor: "rgba(99, 102, 241, 0.8)"
              }}
              clickables={[
                "a",
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                "label[for]",
                "select",
                "textarea",
                "button",
                ".link"
              ]}
            />
          </motion.div>
        </AnimatePresence>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
