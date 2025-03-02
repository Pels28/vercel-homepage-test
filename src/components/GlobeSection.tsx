import GlobeWithLines from "./GlobeWithLines";
import Button from "./Button"

export default function GlobeSection() {
  return (
    <section className="relative w-full h-[650px] bg-black text-white flex flex-col items-center justify-center pt-6">
    

      {/* Globe with moving lines */}
      
        <GlobeWithLines />
      

      {/* Git Push tooltip */}
      <div className="absolute top-[350px] bg-black border border-gray-700 rounded-md px-4 py-2 text-gray-300 text-sm flex items-center space-x-2">
        <span className="text-gray-500">~</span>
        <span className="font-mono text-white">vercel-site/</span>
        <span className="font-mono bg-gray-800 text-white px-1 rounded">git push</span>
      </div>
    </section>
  );
}
