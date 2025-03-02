"use client";

import {  FaBuilding } from "react-icons/fa";
import {} from "react-icons/fi";
import { PiArrowCounterClockwiseFill } from "react-icons/pi";
import { GoGitCommit } from "react-icons/go";
import { MdOutlineContentPaste } from "react-icons/md";
import { Avatar, AvatarGroup } from "@heroui/react";
import { MdOutlineVerifiedUser } from "react-icons/md"

export default function EnterpriseDashboard() {
  return (
    <div className="bg-black text-white flex flex-col border-1 border-blackTransparent items-center justify-center space-y-8 py-8">
      <div className=" grid grid-cols-2 gap-2 w-full p-10 border-1 border-blackTransparent ">
        {/* Left Column - Instant Rollbacks */}
        <div className=" rounded-lg p-2 w-full ">
          <p className="text-gray-400 text-sm flex items-center">
            <PiArrowCounterClockwiseFill className="w-4 h-4" />{" "}
            <span>Instant Rollbacks</span>
          </p>
          <h2 className="text-xl font-semibold mt-2">
            <span className="text-white">Go ahead, deploy on Friday.</span>{" "}
            <span className="text-gray-400">
              Instantly rollback to a working deployment.
            </span>
          </h2>

          <div className="relative mt-6">
            {/* Top Commit Card */}
            <div className="bg-[#1c1c1c] w-[70%]  p-4 rounded-md border border-gray-800 space-y-2">
              <div className="grid grid-cols-4 w-full place-content-evenly">
                <p className="text-xs text-gray-400 col-span-3">
                  vercel-site/jvjb4ynna
                </p>
                <p className="text-xs col-span-1 text-gray-500">1d ago</p>
                <div className="flex flex-row col-span-3 mt-2">
                  <GoGitCommit />
                  <p className="text-xs text-gray-400">
                    ba5f65f Update bento box design
                  </p>
                </div>
                <p className="text-green-500  flex justify-end text-xs font-semibold">
                  90
                </p>
              </div>
            </div>

            <div className="bg-[#1c1c1c] w-[70%] p-4 rounded-md border-dotted ml-[70px] mt-16 border-blackTransparent space-y-2">
              <div className="grid grid-cols-4 w-full place-content-evenly">
                <p className="text-xs text-gray-400 col-span-3">
                  vercel-site/gigj78pv
                </p>
                <p className="text-xs col-span-1 text-gray-500">10m ago</p>
                <div className="flex flex-row col-span-3 mt-2">
                  <GoGitCommit />
                  <p className="text-xs text-gray-400">
                    bx012fmm Fix ESLint error on query
                  </p>
                </div>
                <p className="text-red-700  flex justify-end text-xs font-semibold">
                  55
                </p>
              </div>
            </div>

            {/* Bottom Commit Card */}
          </div>
        </div>

        {/* Right Column - Conformance */}
        <div className="rounded-lg p-6">
          <p className="text-gray-400 text-sm flex items-center space-x-2">
            <MdOutlineContentPaste /> <span>Conformance</span>
          </p>
          <h2 className="text-xl font-semibold mt-2">
            <span className="text-white">
              Move fast, don&apos;t break things.
            </span>{" "}
            <span className="text-gray-400">
              Keep quality high while maintaining velocity with Enterprise
              Monorepos.
            </span>
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-0">
            {/* Conformance Scores */}
            <div className="space-y-3 border-1 border-blackTransparent p-4">
              <p>Conformance</p>
              <div className="bg-[#1c1c1c] p-3 rounded-md flex justify-between items-center">
                <span className="text-xs text-gray-400">Excellent</span>
                <span className="text-white font-semibold">9.5</span>
              </div>
              <div className="bg-[#1c1c1c] p-3 rounded-md flex justify-between items-center">
                <span className="text-xs text-gray-400">Total Issues</span>
                <span className="text-white font-semibold">34</span>
              </div>
              <div className="bg-[#1c1c1c] p-3 rounded-md flex justify-between items-center">
                <span className="text-xs text-gray-400">Major Issues</span>
                <span className="text-white font-semibold">12</span>
              </div>
            </div>

            {/* Code Owners */}
            <div className="space-y-3 border-1 border-blackTransparent p-4">
              <p>Code owners</p>
              {["@vercel/design", "@vercel/eng", "@vercel/marketing"].map(
                (owner) => (
                  <div
                    key={owner}
                    className="bg-[#1c1c1c] p-3 rounded-md flex justify-between items-center"
                  >
                    <span className="text-xs text-gray-400">{owner}</span>
                    <div className="flex space-x-1">
                      <AvatarGroup isBordered>
                        <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                        <Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                        <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                        
                      </AvatarGroup>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text & Buttons */}
      <div className="flex space-x-2 items-center text-white text-2xl">
        <span className="">Scale your</span>
        <button className="px-3 py-1 bg-gray-800 rounded-full text-white text-xs flex items-center space-x-1">
          <FaBuilding className="w-4 h-4" />
          <span className="p-2">Enterprise</span>
        </button>
        <span className="">without compromising</span>
        <button className="px-3 py-1 bg-gray-800 rounded-full text-white text-xs flex items-center space-x-1">
        <MdOutlineVerifiedUser className="w-4 h-4" />
          <span className="p-2">Security</span>
        </button>
      </div>
    </div>
  );
}
