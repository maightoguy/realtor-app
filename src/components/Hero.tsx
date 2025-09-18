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
        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button className="w-[105px] h-[44px] bg-purple-600 text-white rounded-md text-sm">
            About us
          </button>
          <button className="w-[105px] h-[44px] bg-white text-purple-600 rounded-md text-sm border border-purple-600">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}
