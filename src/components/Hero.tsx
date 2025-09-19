import VeriplotSvg from "../assets/WorkObjects";

export default function Hero() {
  return (
    <section
      className="relative h-[627px] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('src/assets/Hero-background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center px-6 h-full">
        {/* Heading with inline SVG */}
        <h1 className="flex flex-col items-center justify-center gap-2 text-white font-poppins font-bold text-[18px] leading-tight max-w-[325px]">
          Unlock wealth through real estate with
          <VeriplotSvg />
        </h1>

        {/* Subtext */}
        <p className="mt-3 text-gray-300 font-poppins text-[12px] max-w-[325px] leading-snug">
          Join a growing community of realtors, agents, and marketers who are
          transforming their real estate careers with VeriPlot.
        </p>

        {/* Buttons container */}
        <div className="flex items-center gap-3 mt-5">
          {/* Secondary Button */}
          <button
            className="flex justify-center items-center px-4 py-2 
             rounded-lg 
             bg-[#F0E6F7] border border-[#F0E6F7] 
             shadow-sm font-inter font-semibold text-[16px] leading-6 text-[#6500AC]"
          >
            About us
          </button>

          {/* Primary Button */}
          <button
            className="flex justify-center items-center px-4 py-2 rounded-lg 
             bg-[#6500AC] border border-[#6500AC] 
             shadow-sm font-inter font-semibold text-[16px] leading-6 text-white"
          >
            Join us
          </button>
        </div>
      </div>
    </section>
  );
}
