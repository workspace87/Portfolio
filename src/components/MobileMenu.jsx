import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center bg-[rgba(10,10,10,0.8)] backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden
        ${
          menuOpen
            ? "max-h-[100vh] opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl p-2 focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <nav className="flex flex-col items-center w-full px-6 pt-24 space-y-6">
        {["home", "about", "projects", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white transition duration-300 transform ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </nav>
    </div>
  );
};