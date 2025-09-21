const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-5 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="src/assets/Veriplot Primary logo 2.svg"
          alt="Veriplot logo"
          className="h-6 w-auto"
        />
      </div>

      {/* Mobile Menu Icon */}
      <button className="md:hidden">
        <img
          src="src/assets/Menu icon.svg" // place menu.svg in your /public folder
          alt="Menu"
          className="h-4 w-4"
        />
      </button>

      {/* Desktop Links (hidden on mobile for now) */}
      <div className="hidden md:flex items-center gap-6">
        <a href="#services" className="text-gray-700 hover:text-purple-600">
          Services
        </a>
        <a href="#about" className="text-gray-700 hover:text-purple-600">
          About
        </a>
        <a href="#contact" className="text-gray-700 hover:text-purple-600">
          Contact
        </a>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
