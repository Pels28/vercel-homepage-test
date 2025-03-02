export default function Footer() {
    return (
      <footer className="w-full bg-black text-gray-300 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-6">
          {/* Products */}
          <div>
            <h3 className="text-white font-medium mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              {[
                "AI",
                "Enterprise",
                "Fluid Compute",
                "Next.js",
                "Observability",
                "Previews",
                "Rendering",
                "Security",
                "Turbo",
                "v0",
              ].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer">
                  {item} {item === "v0" && <span className="inline-block">↗</span>}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Resources */}
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Community ↗",
                "Docs",
                "Guides",
                "Help",
                "Integrations",
                "Pricing",
                "Resources",
                "Solution Partners",
                "Templates",
              ].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Company */}
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {[
                "About",
                "Blog",
                "Careers",
                "Changelog",
                "Contact Us",
                "Customers",
                "Partners",
                "Privacy Policy",
                "Legal ▼",
              ].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Social */}
          <div className="relative">
            <h3 className="text-white font-medium mb-4">Social</h3>
            <ul className="space-y-2 text-sm">
              {["GitHub", "LinkedIn", "Twitter", "YouTube"].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
  
            {/* Top-right corner triangle (▲) */}
            <div className="absolute top-0 right-0 cursor-pointer">
              <span className="text-white text-lg">▲</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  