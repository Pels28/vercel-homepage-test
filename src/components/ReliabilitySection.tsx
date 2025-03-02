"use client"

import React from "react";
import { FiActivity, FiShield, FiGlobe, FiUser, FiDatabase } from "react-icons/fi";

const features = [
    {
        icon: FiActivity,
        title: "Elastic scalability",
        description: "Handle unbelievable scale without a sweat, whether you're on Fortune 500, or it's your launch day."
    },
    {
        icon: FiShield,
        title: "Rock-solid security",
        description: "Infrastructure designed to automatically mitigate DDoS attacks and protect your information."
    },
    {
        icon: FiGlobe,
        title: "Global performance",
        description: "Automatically route traffic to over 100 edge locations around the globe, for a fast site, anywhere in the world."
    },
    {
        icon: FiUser,
        title: "User-first protection",
        description: "Vercel automatically caches your site to ensure that even if a backend service goes down, your site stays up."
    },
    {
        icon: FiDatabase,
        title: "Serverless Storage",
        description: "Accelerate development with databases for the fastest frontends."
    }
];

export default function ReliabilitySection() {
    return (
        <section className="w-full bg-black text-white py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8">Reliability you can count on.</h2>

                {/* Grid Layout */}
                <div className="grid grid-cols-3 gap-4 border-gray-700 p-10">
                    {/* Top Left - Elastic scalability */}
                    <div className=" border-r border-gray-700 p-6">
                        <Feature {...features[0]} />
                    </div>

                    {/* Top Center - Rock-solid security */}
                    <div className="border-r border-gray-700 p-6">
                        <Feature {...features[1]} />
                    </div>

                    {/* Top Right - 99.99% Uptime Block */}
                    <div className="border-b border-gray-700 flex justify-center items-center p-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-transparent to-gray-800  bg-[position:0_0] bg-[size:8px_8px] animate-[move-stripes_5s_linear_infinite]" />
                        <span className="text-3xl font-bold relative z-10">99.99% Uptime</span>
                    </div>

                    {/* Bottom Left - Global performance */}
                    <div className="border-b border-r border-gray-700 p-6">
                        <Feature {...features[2]} />
                    </div>

                    {/* Bottom Center - User-first protection */}
                    <div className="border-b border-r border-gray-700 p-6">
                        <Feature {...features[3]} />
                    </div>

                    {/* Bottom Right - Serverless Storage */}
                    <div className="border-b border-gray-700 p-6">
                        <Feature {...features[4]} />
                    </div>
                </div>
            </div>

            {/* Optional: CSS Keyframes for background animation */}
            <style jsx>{`
                @keyframes move-stripes {
                    0% { background-position: 0 0; }
                    100% { background-position: 100px 0; }
                }
            `}</style>
        </section>
    );
}

interface FeatureProps {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

function Feature({ icon: Icon, title, description }: FeatureProps) {
    return (
        <div className="space-y-2">
            <div className="flex items-center space-x-2 text-gray-300">
                <Icon className="w-5 h-5" />
                <span className="font-semibold">{title}</span>
            </div>
            <p className="text-gray-400">{description}</p>
        </div>
    );
}