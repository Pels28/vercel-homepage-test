import Button from "@/components/Button";
import { IoTriangle } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { GoCommandPalette } from "react-icons/go";
import { Code } from "@heroui/react";
import { GoDotFill } from "react-icons/go";
import { FaLock } from "react-icons/fa6";
import { BsChat } from "react-icons/bs";
import Card from "@/components/Card";
import { IoPaperPlaneSharp } from "react-icons/io5";
import { LuCircleArrowUp } from "react-icons/lu";
import AnalyticsChart from "@/components/AnalyticsChart";
import EnterpriseDashboard from "@/components/EnterpriseDashboard";
import GlobeSection from "@/components/GlobeSection";
import FeatureSection from "@/components/FeatureSection";
import FrameworkGrid from "@/components/FrameworkGrid";
import ReliabilitySection from "@/components/ReliabilitySection";
import DeploySection from "@/components/DeploySection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="bg-blackOverlay font-montserrat ">
      <section className=" bg-black text-white w-full h-[400px] flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-montserrat">Introducing Fluid Compute</h1>
        <p className="font-poppins">The Power of servers in serverless form</p>
        <Button
          radius="full"
          variant="solid"
          size="lg"
          className="font-lato text-primary"
          color="secondary"
        >
          Learn More
        </Button>
      </section>
      <HeroSection />
      
      <section className="bg-black text-white font-montserrat flex items-center w-full justify-between h-[300px] py-8">
        <div className="w-[45%] mx-auto text-xl items-center  flex-col justify-center gap-4 ">
          <p className="font-light">
            <strong>runaway</strong> build times went from 7m to 40s.
            <br />
            <strong>
              Leonard.Ai saw a 95% reduction in page load times.
              <strong>_zapier saw 24x faster builds</strong>
            </strong>
          </p>

          <div className="w-[70%] p-2 rounded-full text-sm font-montserrat flex flex-row justify-between border-1 border-secondary mt-4">
            <p className="font-bold">AI Apps</p>
            <p>Web Apps</p>
            <p>Ecommerce</p>
            <p>Marketing</p>
            <p>Platforms</p>
          </div>
        </div>

        <div className="mx-auto w-[30%]">
          <p className="text-sm font-extralight">
            Get started using our pre-built templates. Easily stream long
            running LLM responses for a better user experience with zero-config
            infrastructure that aalways giobally porformant{" "}
          </p>

          <Button
            radius="full"
            className="text-primary mt-4"
            color="secondary"
            fullWidth
            endContent={<BsStars className="text-primary" />}
          >
            Deploy Ai Apps in seconds
          </Button>
        </div>
      </section>
      <section className="bg-black mt-4 text-secondary border-1 border-secondary flex justify-center mx-auto px-12">
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-start justify-start gap-2 p-4">
            <div className="flex gap-1 items-center">
              <GoCommandPalette />

              <p className=" font-light text-sm">Git connected Deploys</p>
            </div>

            <strong className="text-medium font-poppins">
              From localhost to https, in seconds
            </strong>
            <p className="font-extralight text-lg font-lato">
              Deploy from Git or your CLI
            </p>

            <Code className="bg-black  z-0 font-lato border-[0.5px] border-blackTransparent text-secondary font-light text-base/7 mt-8">
              <div className="flex gap-1 items-center">
                <IoTriangle className="text-secondary  flex items-start" />
                <p className="font-extralight"> - vercel-site git push</p>
              </div>
              <p>Enumerating objects: 1, done</p>
              <p>Counting objects: 100% (1/1), done</p>
              <p>Writing objects: 100% (1/1), done</p>
              <p>Total 1 |delta|. reused 0 To github.com:vercel-site.git</p>
              <p className="ml-4">2136a9...8</p>
            </Code>

            <div className="w-[370px] ml-24 -mt-10 z-10  h-[180px] border-1 border-blackTransparent p-2 rounded-md">
              <div className="flex gap-20">
                <div className="flex items-center justify-center gap-0">
                  <GoDotFill className="text-red-600" />
                  <GoDotFill className="text-blue-600" />
                  <GoDotFill className="text-green-700" />
                </div>

                <div className="flex gap-1 items-center">
                  <FaLock className="h-3 w-3 text-blackTransparent" />
                  <p className="text-blackTransparent text-sm">vercel.com</p>
                </div>
              </div>

              <p className="font-montserrat text-center mx-auto text-3xl mt-6">
                What will you ship?
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-start justify-start gap-2 p-4">
            <div className="flex gap-2 items-center">
              <BsChat />

              <p className=" font-light text-sm">
                Collaborative pre production
              </p>
            </div>

            <p className="font-extralight text-lg font-lato">
              <b className="text-medium font-poppins">
                Every deploy is remarkable.&nbsp;
              </b>
              Chat with
              <br /> your team on real, production-grade-UI, not just designs
            </p>

            <Card className="bg-primary mt-4 text-xs text-secondary border-1 border-blackTransparent">
              <p>
                Swapped out the <code>button</code> <br />
                for some variants we needed
              </p>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-start-2 col-end-2 place-content-center place-items-center relative">
                <IoPaperPlaneSharp className="absolute top-2 right-5  text-blue-700 " />
                <div className="bg-blue-700 flex items-center justify-center w-[90px] text-primary rounded-md p-1">
                  Parani
                </div>
              </div>
              <div>
                <Card className="bg-primary mt-4 text-xs text-secondary border-1 border-blackTransparent">
                  <p>How about this instead?</p>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1 w-full relative">
              {/* Left Container */}
              <div className="col-span-2 relative">
                <Card className="bg-primary w-[270px] text-xs text-secondary border-1 border-blackTransparent">
                  <p>
                    I like it. Does this work with
                    <br />
                    the brand tweaks @mamuso?
                  </p>
                </Card>
              </div>

              {/* Right Container */}
              <div className="flex items-end relative">
                {/* Paper Plane Icon */}
                <IoPaperPlaneSharp className="absolute bottom-8 -left-4 text-red-700 -rotate-90" />

                {/* Parani Box */}
                <div className="bg-red-700 flex items-center justify-center w-[90px] text-primary rounded-md p-1">
                  Rauno
                </div>
              </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-3 mt-6">
              <div className="col-start-3 col-end-3">
                <Card className="bg-primary  text-xs text-secondary border-1 border-blackTransparent">
                  <div className="flex gap-2">
                    <p>This looks great!</p>
                    <LuCircleArrowUp className="w-5 h-5 text-white" />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnalyticsChart />

      <div className="">
        <EnterpriseDashboard />
      </div>

      <div>
        <div className="bg-black flex flex-col items-center justify-center px-16 pt-10">
          <h2 className="text-xl md:text-3xl font-semibold text-center">
            <span className="font-bold text-white">
              Deploy once, deliver everywhere.
            </span>{" "}
            <span className="text-gray-400">
              When you push code to Vercel, we make it instantly available
              across the planet.
            </span>
          </h2>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 ">
            <Button color="secondary" className="text-primary" radius="lg">
              {" "}
              More about Infrastructure
            </Button>

            <Button color="primary" className="text-secondary" radius="lg">
              {" "}
              Learn about Enterprise
            </Button>
          </div>
        </div>
        <GlobeSection />
      </div>

      <FeatureSection />

      <main className=" bg-black">
        <FrameworkGrid />
      </main>
      <ReliabilitySection />

      <div>
        <DeploySection />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}
