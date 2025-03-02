// "use client";

// import React, { useEffect, useState } from "react";
// import { FaReact, FaPython } from "react-icons/fa";
// import { SiNextdotjs, SiNuxtdotjs, SiSvelte, SiAstro } from "react-icons/si";

// const frameworks = [
//   { name: "Next.js", icon: SiNextdotjs },
//   { name: "Svelte", icon: SiSvelte },
//   { name: "React", icon: FaReact },
//   { name: "Nuxt.js", icon: SiNuxtdotjs },
//   { name: "Astro", icon: SiAstro },
//   { name: "Python", icon: FaPython },
// ];

// export default function DeploySection() {
//   const [flipText, setFlipText] = useState("Start Deploying");

//   // Letter flip effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFlipText((prev) =>
//         prev === "Start Deploying" ? "Deploying Start" : "Start Deploying"
//       );
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const flipAnimation = (letter: string, index: number) => {
//     return (
//       <span
//         key={index}
//         className="inline-block relative transition-all duration-700"
//         style={{
//           animation: `flipIn 0.8s ease-in-out ${index * 0.1}s`,
//         }}
//       >
//         {letter}
//       </span>
//     );
//   };

//   return (
//     <section className="w-full bg-black text-white py-16">
//       <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4">
//         {/* Left Text Column */}
//         <div className="col-span-1 flex flex-col justify-between space-y-6">
//           <div>
//             <h2 className="text-4xl font-bold leading-tight">
//               Deploy your first app in <br />
//               <span className="text-gray-300">seconds.</span>
//             </h2>
//             <p className="mt-4 flex items-center space-x-2">
//               <span className="text-sm">🚀🐙🔗 Deploy automatically from git or with our CLI</span>
//             </p>
//             <p className="mt-2 text-sm">📚 Wide range support for the most popular frameworks</p>
//             <p className="mt-2 text-sm">🔍 Previews for every push</p>
//             <p className="mt-2 text-sm">🔒 Automatic HTTPS for all your domains</p>
//           </div>

//           {/* Animated Button */}
//           <div className="relative group w-fit">
//             <button
//               className="relative flex items-center justify-between px-6 py-3 bg-white text-black font-bold rounded-full overflow-hidden border border-gray-600"
//               style={{
//                 clipPath: "inset(0 round 30px)",
//               }}
//             >
//               <div className="relative h-6 overflow-hidden">
//                 {flipText.split("").map((letter, index) =>
//                   flipAnimation(letter, index)
//                 )}
//               </div>
//               <span className="ml-2 text-xl">➜</span>
//             </button>
//           </div>
//         </div>

//         {/* Frameworks Grid - Middle + Right Column */}
//         <div className="col-span-2 grid grid-cols-2 gap-4">
//           {frameworks.map((framework, index) => {
//             const Icon = framework.icon;
//             return (
//               <div
//                 key={index}
//                 className="relative flex items-center justify-between p-4 border border-gray-800 hover:bg-gray-900 transition-all duration-300 cursor-pointer group"
//               >
//                 <div className="flex items-center space-x-3">
//                   <div className="w-8 h-8 flex justify-center items-center">
//                     <Icon
//                       size={28}
//                       className="text-white group-hover:text-blue-500 transition-colors duration-300"
//                     />
//                   </div>
//                   <p className="text-sm font-medium">{framework.name} Templates</p>
//                 </div>

//                 {/* Top right corner fold effect */}
//                 <div className="absolute top-0 right-0 w-6 h-6 bg-black border-t border-r border-gray-800 group-hover:bg-gray-700"></div>
//               </div>
//             );
//           })}
//           {/* Empty placeholders to fill grid if necessary */}
//           <div className="flex justify-center items-center p-4 col-span-2 space-x-3">
//             <button className="px-4 py-2 text-sm border border-gray-700 rounded-full hover:bg-gray-800">
//               Talk to an Expert ➜
//             </button>
//             <button className="px-4 py-2 text-sm border border-gray-700 rounded-full hover:bg-gray-800">
//               Get an Enterprise Trial ➜
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* FlipIn Animation CSS */}
//       <style jsx>{`
//         @keyframes flipIn {
//           0% {
//             transform: rotateX(90deg);
//             opacity: 0;
//           }
//           50% {
//             transform: rotateX(-20deg);
//           }
//           100% {
//             transform: rotateX(0);
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiSvelte,
  SiNuxtdotjs,
  SiAstro,
  SiPython,
} from "react-icons/si";
import {
  FaGit,
  FaTerminal,
  FaGlobe,
  FaLock,
  FaArrowRight,
} from "react-icons/fa";
import { BsWindow } from "react-icons/bs";
import Button from "./Button";
import { BiChevronRight } from "react-icons/bi";

const frameworks = [
  { name: "Next.js", Icon: SiNextdotjs, color: "hover:text-white" },
  { name: "React", Icon: SiReact, color: "hover:text-[#61DAFB]" },
  { name: "Svelte", Icon: SiSvelte, color: "hover:text-[#FF3E00]" },
  { name: "Nuxt", Icon: SiNuxtdotjs, color: "hover:text-[#00DC82]" },
  { name: "Astro", Icon: SiAstro, color: "hover:text-[#FF5D01]" },
  { name: "Python", Icon: SiPython, color: "hover:text-[#3776AB]" },
];

const features = [
  {
    text: "Deploy automatically from",
    highlight: "git",
    or: "or with",
    end: "our CLI",
    icons: [FaGit, FaTerminal],
  },
  {
    text: "Wide range support for the most popular frameworks",
    Icon: BsWindow,
  },
  {
    text: "Previews for every push",
    Icon: FaGlobe,
  },
  {
    text: "Automatic HTTPS for all your domains",
    Icon: FaLock,
  },
];

const AnimatedText = ({ text }: { text: string }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={false}
          animate={{
            rotateX: isAnimating ? [0, 180, 360] : 0,
            opacity: isAnimating ? [1, 0, 1] : 1,
          }}
          transition={{
            duration: 0.5,
            delay: i * 0.03,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default function DeploymentSection() {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Deploy your
            <br />
            first app in
            <br />
            seconds.
          </h1>

          <div className="space-y-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-400">
                {feature.Icon && <feature.Icon className="w-4 h-4" />}
                <span>
                  {feature.text}{" "}
                  {feature.highlight && (
                    <>
                      <span className="text-white">{feature.highlight}</span>{" "}
                      {feature.or}{" "}
                      <span className="text-white">{feature.end}</span>
                    </>
                  )}
                </span>
                {feature.icons && (
                  <div className="flex gap-2">
                    {feature.icons.map((Icon, i) => (
                      <Icon key={i} className="w-4 h-4" />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Framework Grid */}
        <div className="grid grid-cols-2 gap-px bg-zinc-800">
          {frameworks.map((framework) => (
            <div
              key={framework.name}
              className="bg-[#111] p-6 group hover:bg-[#161616] transition-colors"
            >
              <framework.Icon
                className={`w-8 h-8 mb-4 text-gray-400 transition-colors ${framework.color}`}
              />
              <p className="text-sm text-gray-400">
                {framework.name} Templates
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 flex items-center justify-between">
        <motion.div
          className="flex items-center w-full  gap-4 group cursor-pointer"
          whileHover={{ x: 10 }}
        >
          <div className="text-2xl text-white font-semibold">
            <AnimatedText text="Start Deploying" />
          </div>
          <FaArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 text-white" />
        </motion.div>

        <div className="space-y-2 flex flex-col items-center justify-center">
          <Button
            variant="solid"
            endContent={<BiChevronRight />}
            radius="full"
            color="secondary"
            fullWidth
            className="text-primary"
          >
        
            Talk to an Expert
          </Button>

          <Button
            variant="bordered"
            color="primary"
            radius="full"
            fullWidth
            className="text-secondary border-1 border-blackTransparent"
            endContent={<BiChevronRight />}
          >
        
            Get an Enterprise Trial
          </Button>
        </div>
      </div>
    </div>
  );
}
