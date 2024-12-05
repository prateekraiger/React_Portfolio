import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiJavascript, SiHtml5, SiCss3, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl font-bold text-white">
        Technologies
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:scale-110 transition-transform">
          <SiHtml5 className="text-5xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:scale-110 transition-transform">
          <SiCss3 className="text-5xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:scale-110 transition-transform">
          <SiTailwindcss className="text-5xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:scale-110 transition-transform">
          <SiJavascript className="text-5xl text-yellow-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:scale-110 transition-transform">
          <SiMongodb className="text-5xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:scale-110 transition-transform">
          <SiExpress className="text-5xl text-gray-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:scale-110 transition-transform">
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:scale-110 transition-transform">
          <FaNodeJs className="text-5xl text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
