const Navbar = () => {
  return (
    <nav
      className="
        flex items-center justify-between
        px-4 py-4 md:px-28
       bg-white shadow-md
        fixed top-0 left-0 w-full z-50
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="src/assets/Veriplot Primary logo 2.svg"
          alt="Veriplot logo"
          className="h-8 w-auto md:h-9"
        />
      </div>

      <button className="md:hidden">
        <img src="src/assets/Menu icon.svg" alt="Menu" className="h-6 w-6" />
      </button>

      <div className="hidden md:flex items-center gap-6">
        {/* Login + Create Account buttons */}
        <div className="flex items-center gap-3 ml-6">
          <button className="px-5 py-2 border border-gray-200 rounded-lg text-gray-600 font-semibold hover:bg-gray-50">
            Log in
          </button>
          <button className="px-5 py-2 bg-purple-700 text-white rounded-lg shadow hover:bg-purple-800">
            Create account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
