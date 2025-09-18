export default function Services() {
  const services = [
    {
      title: "Free Thinking Resources",
      desc: "Get access to a wide range of tools and resources that help you explore ideas freely.",
    },
    {
      title: "Zero Capital Required",
      desc: "Start your journey without any initial investment required.",
    },
    {
      title: "Transparent Funding Access",
      desc: "Easily see how funds are managed with total transparency.",
    },
    {
      title: "Free Thinking Resources",
      desc: "Build your knowledge and skills with open and free resources.",
    },
    {
      title: "Creative Incentives",
      desc: "Participate in exciting incentive programs designed to support your growth.",
    },
  ];

  return (
    <section id="services" className="px-4 py-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          What you stand to gain
        </h2>
        <p className="mt-2 text-gray-600 text-sm">
          Explore the many benefits available to you when you join Veriplot.
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3"
          >
            <div>
              <h3 className="font-semibold text-gray-800">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
