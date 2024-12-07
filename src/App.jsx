import React, { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import AnimatedCursor from "react-animated-cursor";

// Lazy load components for better performance
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="text-center p-8 text-red-500">
      <pre>{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
};

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-500"></div>
  </div>
);

const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the state of your app here
        window.location.reload();
      }}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <div className="relative overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
          {/* Animated Background */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-black">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-4 md:px-8 space-y-16">
            <Navbar />

            <section id="hero">
              <Hero />
            </section>

            <section id="about">
              <About />
            </section>

            <section id="skills">
              <Skills />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section id="experience">
              <Experience />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </div>

          {/* Animated Cursor */}
          <AnimatedCursor
            innerSize={10}
            outerSize={14}
            color="245, 245, 245"
            outerAlpha={0.3}
            innerScale={1.1}
            outerScale={4}
            outerStyle={{
              border: "2px solid #8c8c8c",
              backgroundColor: "transparent",
              transition: "none",
            }}
            innerStyle={{
              backgroundColor: "#8c8c8c",
              transition: "none",
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
              ".link",
            ]}
          />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
