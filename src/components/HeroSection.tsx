import { IoTriangle } from "react-icons/io5";
import Button from "./Button";

export default function HeroSection() {
  return (
 <section className=" bg-blackOverlay w-full h-[400px] flex flex-col items-center justify-center gap-3">
        <h1 className="text-5xl font-montserrat">
          Your complete platform for the web
        </h1>
        <p className="font-poppins w-[50%] text-center">
          Vercel provides the developer tools and cloud infrastrucure to build
          scale amd secure a faster, more personalized web
        </p>

        <div className="flex flex-row gap-4">
          <Button
            radius="full"
            variant="solid"
            size="lg"
            className="font-lato text-primary"
            color="secondary"
            startContent={<IoTriangle className="text-primary" />}
          >
            Start Deploying
          </Button>

          <Button
            radius="full"
            variant="solid"
            size="lg"
            className="font-lato "
            color="primary"
          >
            Get a Demo
          </Button>
        </div>
   
    </section>
  );
}
