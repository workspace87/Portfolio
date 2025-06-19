import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Prathmesh<span className="text-blue-500">.tech</span>
          </a>

          <button
            className="md:hidden p-2 text-white z-50"
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </button>

          <div className="hidden md:flex items-center space-x-6">
            {["home", "about", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};