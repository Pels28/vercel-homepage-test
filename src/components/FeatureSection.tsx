"use client";

import { FaDatabase, FaStripe, FaVuejs } from "react-icons/fa";
import Button from "./Button";
import { GoCopy } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";

export default function FeatureSection() {
  const [isCopied, setIsCopied] = useState(false);

  const isCopiedHandler = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  };

  return (
    <section className="w-full bg-black mt-6 text-white py-16 border-1 border-blackTransparent">
      <div className=" mx-auto grid grid-cols-3 gap-2 px-8 md:px-6">
        {/* Left Column - Code Block & Text */}
        <div className="col-span-2 items-start space-y-6 w-[80%] mx-auto">
          {/* Code Block */}
          <div className="relative  text-white font-mono text-sm p-4 rounded-lg border border-gray-700">
            <div className="absolute top-2 left-3 text-gray-400 bg-black border-b-0 border-b-white">
              app/users/page.tsx
            </div>
            <pre className="mt-6 overflow-x-auto whitespace-pre-wrap bg-primary">
              <code className="language-javascript">
                {`export default async function Page() {\n`}
                {`  const data = await sql\`SELECT * from USERS\`\n\n`}
                {`  return (\n`}
                {`    <>\n`}
                {`      <h1>Users</h1>\n`}
                {`      <ul>\n`}
                {`        {data.map(user => (\n`}
                {`          <li key={user.id}>{user.name}</li>\n`}
                {`        ))}\n`}
                {`      </ul>\n`}
                {`    </>\n`}
                {`  );\n`}
                {`}`}
              </code>
            </pre>
            {/* Copy button */}
            {/* <button className="absolute top-2 right-3 text-gray-400 hover:text-white">📋</button> */}
            <Button
              isIconOnly
              onPress={isCopiedHandler}
              className="absolute top-2 right-3 text-gray-400 hover:text-white"
            >
              {isCopied ? <IoMdCheckmark /> : <GoCopy />}
            </Button>
          </div>

          {/* Text Content */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">
              Bridging the best of Client and Server Rendering.
            </h3>
            <p className="text-gray-400">
              Experience seamless integration, optimized performance, and
              reduced bundle sizes like never before.
            </p>
            <Button
              variant="bordered"
              color="primary"
              radius="full"
              className="mt-4 px-4 py-2 border-1 border-blackTransparent text-secondary"
            >
              More about Rendering
            </Button>
          </div>
        </div>

        {/* Right Column - Network Diagram & Text */}
        <div className="flex flex-col items-start space-y-6">
          {/* Diagram */}
          <div className="relative w-full h-[320px] flex items-center justify-center">
            <div className="absolute w-[220px] h-[220px] rounded-full border border-gray-700 flex items-center justify-center">
              <div className="absolute w-2 h-2 bg-white rounded-full"></div>
              {/* Connecting Lines */}
              <div className="absolute w-full h-full">
                <svg className="w-full h-full">
                  <line
                    x1="50%"
                    y1="50%"
                    x2="90%"
                    y2="20%"
                    stroke="rgb(59,130,246)"
                    strokeWidth="1"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="90%"
                    y2="80%"
                    stroke="rgb(59,130,246)"
                    strokeWidth="1"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="10%"
                    y2="50%"
                    stroke="rgb(239,68,68)"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              {/* Icons */}
              <div className="absolute top-4 right-4 text-white">
                <FaDatabase size={24} />
              </div>
              <div className="absolute bottom-4 right-4 text-white">
                <FaStripe size={24} />
              </div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white">
                <FaVuejs size={24} />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-2 mt-14">
            <h3 className="text-2xl font-bold">All the data.</h3>
            <p className="text-gray-400">
              Connect with content, commerce or database platforms.
            </p>
          
            <Button
              variant="bordered"
              color="primary"
              radius="full"
              className="mt-4 text-secondary border-1 border-blackTransparent"
            >
              Discover Integrations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
