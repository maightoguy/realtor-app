const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur. Pretium felis ullamcorper ut tempor. Aliquet tempus erat arcu sed. Mauris tincidunt commodo eget odio.",
    name: "Kponane Amakiri",
    avatar: "src/assets/Profile 1.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Ut odio eleifend dui diam semper. Lorem vivamus pulvinar dui duis vulputate quis.",
    name: "Opuene Awolowo",
    avatar: "src/assets/Profile 2.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Ultrices tincidunt mauris consequat et. Nisl faucibus dictum et dui nulla condimentum.",
    name: "Aliyu Nasiru",
    avatar: "src/assets/Profile 3.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Pharetra fringilla ut elit purus fermentum proin.",
    name: "Firdausi Maiwada",
    avatar: "src/assets/Profile 4.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Massa viverra lectus erat arcu dignissim sed.",
    name: "Ifedolapo Kolapo",
    avatar: "src/assets/Profile 5.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#F0E6F7] px-6 py-16 flex flex-col gap-12 md:px-20 lg:px-32">
      {/* Heading */}
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Our customer reviews
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-xl">
          See what designers and developers are saying about their experience
          with Palm UI.
        </p>
      </div>

      {/* Cards: always horizontal scroll */}
      <div
        className="
          flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4
          scrollbar-hide
        "
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="
              bg-white rounded-2xl p-6 flex flex-col justify-between
              min-w-[300px] max-w-[320px] snap-start
              flex-shrink-0
            "
          >
            <p className="text-gray-600 text-base leading-6">{t.text}</p>
            <div className="flex items-center gap-3 mt-6">
              <img
                src={t.avatar}
                alt={`${t.name} profile picture`}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-black font-medium text-base">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
