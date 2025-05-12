import { RxCross2 } from "react-icons/rx";

function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={`fixed w-full top-0 left-0 bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 gap-15 ease-in-out ${
        isMenuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-5 right-7 text-2xl focus:outline-none cursor-pointer text-white"
        aria-label="Close Menu"
      >
        <RxCross2 />
      </button>

      {[
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
      ].map((link, index) => (
        <a
          key={index}
          onClick={() => setIsMenuOpen(false)}
          href={link.href}
          className={`text-2xl font-semibold text-white py-4 w-full text-center transition-all duration-300
          hover:bg-white/10 hover:text-white ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default MobileMenu;
