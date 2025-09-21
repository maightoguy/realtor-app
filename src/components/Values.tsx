import {
  IntegrityIcon,
  InnovationIcon,
  TrustIcon,
  AccessibilityIcon,
  PartnershipIcon,
} from "../modules/ValueIcons";

const ValuesSection = () => {
  return (
    <section className="relative z-20 bg-[#6500AC] py-12 px-6">
      {/* Section Header */}
      <div className="max-w-md mx-auto text-center mb-10">
        <h2 className="text-white font-bold text-lg">Our core Values</h2>
        <p className="text-gray-200 text-sm">
          Our values guide everything we do, They are the foundation of our
          community
        </p>
      </div>

      {/* Values List */}
      <div className="flex flex-col gap-6">
        {/* Integrity */}
        <div className="bg-[#38005F] rounded-2xl p-8 flex flex-col gap-4">
          <IntegrityIcon />
          <h3 className="text-white text-2xl font-medium">Integrity</h3>
          <p className="text-gray-200 text-sm">
            We ensure every listing is verified, and every process is
            transparent, so agents and clients can transact with confidence.
          </p>
        </div>

        {/* Innovation */}
        <div className="bg-[#38005F] rounded-2xl p-8 flex flex-col gap-4">
          <InnovationIcon />
          <h3 className="text-white text-2xl font-medium">Innovation</h3>
        </div>

        {/* Trust */}
        <div className="bg-[#38005F] rounded-2xl p-8 flex flex-col gap-4">
          <TrustIcon />
          <h3 className="text-white text-2xl font-medium">Trust</h3>
          <p className="text-gray-200 text-sm">
            Every property, agent, and referral goes through validation,
            building a safe and reliable ecosystem.
          </p>
        </div>

        {/* Accessibility */}
        <div className="bg-[#38005F] rounded-2xl p-8 flex flex-col gap-4">
          <AccessibilityIcon />
          <h3 className="text-white text-2xl font-medium">Accessibility</h3>
        </div>

        {/* Partnership */}
        <div className="bg-[#38005F] rounded-2xl p-8 flex flex-col gap-6">
          <PartnershipIcon />
          <h3 className="text-white text-2xl font-medium">Partnership</h3>
          <p className="text-gray-200 text-sm">
            We create meaningful opportunities that empower realtors,
            developers, and buyers to succeed together.
          </p>
          <button className="w-[155px] bg-white text-[#6500AC] font-semibold text-sm py-2 px-6 rounded-lg whitespace-nowrap">
            Create account
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
