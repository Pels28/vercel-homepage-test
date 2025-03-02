"use client"

import React, { useState } from "react";
import { FaReact, FaVuejs, FaPython, FaAngular } from "react-icons/fa";
import { SiNextdotjs, SiGatsby, SiNuxtdotjs } from "react-icons/si";
import { RiSvelteLine } from "react-icons/ri";

interface Framework {
  name: string;
  icon: React.ComponentType<{ size: number; className?: string; style?: React.CSSProperties }>;
  color: string;
}

const frameworks: Framework[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Nuxt.js", icon: SiNuxtdotjs, color: "#00DC82" },
  { name: "Svelte", icon: RiSvelteLine, color: "#FF3E00" },
  { name: "Vue.js", icon: FaVuejs, color: "#42B883" },
  { name: "Gatsby", icon: SiGatsby, color: "#663399" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Angular", icon: FaAngular, color: "#DD0031" },
  { name: "Vercel", icon: SiNextdotjs, color: "#FFFFFF" }, // For symmetry
];

export default function FrameworkGrid() {
  const [hoveredFramework, setHoveredFramework] = useState<string | null>(null);
  const [hoveredColor, setHoveredColor] = useState<string>("#ffffff");

  const handleMouseEnter = (framework: Framework) => {
    setHoveredFramework(framework.name);
    setHoveredColor(framework.color);
  };

  const handleMouseLeave = () => {
    setHoveredFramework(null);
    setHoveredColor("#ffffff");
  };

  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-5 gap-2">
        {/* Dynamic Text - Spans 2 columns */}
        <div className="col-span-2 flex items-center">
          <h2 className="text-3xl font-bold">
            Your{" "}
            <span style={{ color: hoveredColor }} className="transition-colors duration-300">
              {hoveredFramework ?? "framework"}
            </span>, your way.
          </h2>
        </div>

        {/* Framework Icons - 3 icons per row (each icon takes 1 column) */}
        {frameworks.map((framework, index) => {
          const Icon = framework.icon;

          return (
            <div
              key={index}
              className="border border-gray-700 flex justify-center items-center aspect-square cursor-pointer transition-all duration-300"
              onMouseEnter={() => handleMouseEnter(framework)}
              onMouseLeave={handleMouseLeave}
            >
              <Icon
                size={50}
                className="transition-all duration-300"
                style={{
                  color: hoveredFramework === framework.name ? framework.color : "transparent",
                  fill: hoveredFramework === framework.name ? framework.color : "transparent",
                  stroke: hoveredFramework === framework.name ? framework.color : "white",
                  strokeWidth: "1.5",
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}