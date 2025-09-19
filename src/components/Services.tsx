export default function Services() {
  return (
    <section className="relative bg-[#FAFAFA] py-12 flex flex-col items-center">
      {/* Heading */}
      <div className="flex flex-col items-center gap-2 w-[315px] text-center">
        <h2 className="font-poppins font-bold text-[16px] leading-[24px] text-black">
          What you stand to Gain
        </h2>
        <p className="font-poppins text-[12px] leading-[18px] text-gray-500">
          Join a growing community of realtors, agents, and marketers who are
          transforming their real estate careers with VeriPlot.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 flex flex-col gap-5 w-[328px]">
        {/* Card 1 */}
        <div className="bg-white border border-[#F0E6F7] rounded-[10px] p-[14px] flex flex-col gap-2">
          <h3 className="font-poppins font-bold text-[14px] leading-[21px] text-center text-black">
            Free Training & Resources
          </h3>
          <p className="font-poppins text-[12px] leading-[18px] text-center text-gray-500">
            Gain access to exclusive real estate insights, digital marketing
            guides, and specialized training to scale your earnings.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-[#F0E6F7] rounded-[10px] p-[14px] flex flex-col gap-2">
          <h3 className="font-poppins font-bold text-[14px] leading-[21px] text-center text-black">
            Zero Capital Required
          </h3>
          <p className="font-poppins text-[12px] leading-[18px] text-center text-gray-500">
            Start your real estate journey without upfront investment. All you
            need is your drive, and VeriPlot gives you the platform.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-[#F0E6F7] rounded-[10px] p-[14px] flex flex-col gap-2">
          <h3 className="font-poppins font-bold text-[14px] leading-[21px] text-center text-black">
            Transparent Passive Income
          </h3>
          <p className="font-poppins text-[12px] leading-[18px] text-center text-gray-500">
            Earn commissions seamlessly through our verified referral system —
            track your rewards in real time, stress-free.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white border border-[#F0E6F7] rounded-[10px] p-[14px] flex flex-col gap-2">
          <h3 className="font-poppins font-bold text-[14px] leading-[21px] text-center text-black">
            Exclusive Incentives
          </h3>
          <p className="font-poppins text-[12px] leading-[18px] text-center text-gray-500">
            Qualify for exciting rewards, from all-expense-paid trips to bonuses
            that celebrate your success.
          </p>
        </div>
      </div>
    </section>
  );
}
