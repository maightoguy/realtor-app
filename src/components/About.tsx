import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white px-6 py-12 flex flex-col items-start gap-10 max-w-md mx-auto">
      {/* About Text */}
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold text-black">About us</h2>
        <p className="text-gray-500 text-sm leading-6">
          VeriPlot is a proptech company redefining real estate marketing
          through digital referral systems. We connect realtors and buyers with
          verified property listings, ensuring transparency, trust, and seamless
          transactions. In partnership with reputable developers, we make
          property ownership simpler, safer, and more rewarding for everyone.
        </p>
      </div>

      {/* Image */}
      <div className="rounded-2xl overflow-hidden">
        <img
          src="src/assets/Meeting image.jpg"
          alt="People working together"
          className="w-[329px] h-[337px] object-cover"
        />
      </div>

      {/* Mission + Vision */}
      <div className="flex flex-col gap-6">
        {/* Mission */}
        <div className="bg-[#F0E6F7] border border-[#CFB0E5] rounded-lg p-4 flex flex-col gap-2">
          <h3 className="text-purple-900 text-lg font-bold">Our Mission</h3>
          <p className="text-gray-600 text-sm leading-6">
            To simplify real estate marketing by providing a trusted digital
            platform that connects realtors, and buyers with verified
            properties, ensuring transparency, speed, and rewarding
            opportunities for all.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-[#F0E6F7] border border-[#CFB0E5] rounded-lg p-4 flex flex-col gap-2">
          <h3 className="text-purple-900 text-lg font-bold">Our Vision</h3>
          <p className="text-gray-600 text-base leading-6">
            Our vision is to be Nigeria’s leading real estate marketing
            platform, making property investment and home ownership simple,
            transparent, and accessible to everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
