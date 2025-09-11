import VeriplotSvg from "../assets/WorkObjects";
const Hero = () => {
  return (
    <div>
      <section
        className="relative h-[500px] flex items-center justify-center text-center text-white px-4"
        style={{
          backgroundImage: "url('src/assets/Hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 max-w-md">
          <h1 className="flex items-center flex-col gap-2 text-xl font-bold mb-2">
            Unlock Wealth Through Real Estate with
            <VeriplotSvg />
          </h1>
          <p className="text-sm font-normal mb-4 text-gray-200">
            Join a growing community of realtors, agents, and marketers who are
            transforming
            <br /> their real estate careers with VeriPlot
          </p>
          <div className="flex gap-3 justify-center">
            <button className="px-6 py-2  bg-gray-50 text-purple-600 rounded-lg font-semibold">
              About us
            </button>
            <button className="px-6 py-2 bg-purple-600 rounded-lg font-semibold">
              Join us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
