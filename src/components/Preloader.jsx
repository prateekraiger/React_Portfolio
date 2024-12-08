import React, { useEffect, useState } from "react";
import { Loader2, Code, Laptop } from "lucide-react";

const Preloader = ({ onLoadComplete }) => {
  const [loadingStage, setLoadingStage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const loadingStages = [
    {
      icon: <Loader2 className="animate-spin text-blue-500" size={64} />,
      text: "Initializing Environment",
    },
    {
      icon: <Code className="text-green-500 animate-pulse" size={64} />,
      text: "Loading Code Modules",
    },
    {
      icon: <Laptop className="text-purple-500 animate-bounce" size={64} />,
      text: "Preparing Portfolio",
    },
  ];

  useEffect(() => {
    const stageTimer = setTimeout(() => {
      if (loadingStage < loadingStages.length - 1) {
        setLoadingStage((prev) => prev + 1);
      } else {
        setIsLoading(false);
        onLoadComplete && onLoadComplete();
      }
    }, 1000);

    return () => clearTimeout(stageTimer);
  }, [loadingStage, onLoadComplete]);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center
                    bg-gradient-to-br from-gray-900 to-slate-800
                    transition-all duration-500 ease-in-out"
    >
      <div
        className="text-center space-y-6 p-8
                      bg-slate-800 rounded-xl shadow-2xl
                      transform transition-all
                      hover:scale-105 duration-300"
      >
        {loadingStages[loadingStage].icon}

        <h2
          className="text-2xl font-bold
                       text-white mt-4
                       tracking-wider"
        >
          {loadingStages[loadingStage].text}
        </h2>

        <div className="flex space-x-2 justify-center mt-4">
          {loadingStages.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full
                          ${
                            loadingStage === index
                              ? "bg-blue-500 w-6"
                              : "bg-gray-300"
                          }
                          transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
