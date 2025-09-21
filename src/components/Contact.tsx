export default function Contact() {
  return (
    <section className="bg-[#FAFAFA] px-6 py-12 flex flex-col gap-6">
      {/* Section Heading */}
      <div>
        <h2 className="text-lg font-bold text-black">
          Get in touch with our team
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          You can always reach out to us through any of the channels provided
          here
        </p>
      </div>

      {/* Contact Cards */}
      <div className="flex flex-col gap-6">
        {/* Email Card */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-30">
          <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Email icon"
            >
              <path
                d="M2 11.5596V22.9996C2 24.0604 2.42143 25.0779 3.17157 25.828C3.92172 26.5781 4.93913 26.9996 6 26.9996H26C27.0609 26.9996 28.0783 26.5781 28.8284 25.828C29.5786 25.0779 30 24.0604 30 22.9996V11.5596L18.096 18.8836C17.4657 19.2714 16.7401 19.4767 16 19.4767C15.2599 19.4767 14.5343 19.2714 13.904 18.8836L2 11.5596Z"
                fill="black"
              />
              <path
                d="M30 9.21067V9C30 7.93913 29.5786 6.92172 28.8284 6.17157C28.0783 5.42143 27.0609 5 26 5H6C4.93913 5 3.92172 5.42143 3.17157 6.17157C2.42143 6.92172 2 7.93913 2 9V9.21067L14.952 17.1813C15.2672 17.3752 15.63 17.4779 16 17.4779C16.37 17.4779 16.7328 17.3752 17.048 17.1813L30 9.21067Z"
                fill="black"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-medium text-black">Email</h3>
            <p className="text-sm text-gray-500">
              Get the latest updates and offers.
            </p>
            <a
              href="mailto:info@veriplot.com"
              className="block mt-2 text-sm font-medium text-gray-900"
            >
              info@veriplot.com
            </a>
          </div>
        </div>

        {/* Address Card */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-30">
          <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center ">
            {/* Location icon */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Address icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.3867 29.8013L15.48 29.8547L15.5173 29.876C15.6654 29.9561 15.831 29.998 15.9993 29.998C16.1676 29.998 16.3333 29.9561 16.4813 29.876L16.5187 29.856L16.6133 29.8013C17.1348 29.4921 17.6437 29.1621 18.1387 28.812C19.4201 27.9073 20.6174 26.889 21.716 25.7693C24.308 23.116 27 19.1293 27 14C27 11.0826 25.8411 8.28473 23.7782 6.22183C21.7153 4.15893 18.9174 3 16 3C13.0826 3 10.2847 4.15893 8.22183 6.22183C6.15893 8.28473 5 11.0826 5 14C5 19.128 7.69333 23.116 10.284 25.7693C11.3822 26.8889 12.579 27.9072 13.86 28.812C14.3554 29.1621 14.8647 29.4921 15.3867 29.8013ZM16 18C17.0609 18 18.0783 17.5786 18.8284 16.8284C19.5786 16.0783 20 15.0609 20 14C20 12.9391 19.5786 11.9217 18.8284 11.1716C18.0783 10.4214 17.0609 10 16 10C14.9391 10 13.9217 10.4214 13.1716 11.1716C12.4214 11.9217 12 12.9391 12 14C12 15.0609 12.4214 16.0783 13.1716 16.8284C13.9217 17.5786 14.9391 18 16 18Z"
                fill="black"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-medium text-black">Address</h3>
            <p className="text-sm text-gray-500">
              21 Fewomi Crescent Phase 3 Kubwa Abuja, Nigeria
            </p>
            <a
              href="https://maps.google.com/?q=21+fewomi+crescent+phase+3+kubwa+Abuja+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-sm font-medium text-gray-900"
            >
              View on map
            </a>
          </div>
        </div>

        {/* Phone Card */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-30">
          <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center ">
            {/* Phone icon */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Phone icon"
            >
              <rect width="80" height="80" rx="20" fill="#F5F5F5" />
              <path
                d="M52.985 45.8852C52.7621 47.579 51.9303 49.1338 50.6449 50.2591C49.3595 51.3844 47.7084 52.0033 46 52.0002C36.075 52.0002 28 43.9252 28 34.0002C27.9969 32.2918 28.6159 30.6408 29.7412 29.3554C30.8665 28.0699 32.4212 27.2381 34.115 27.0152C34.5433 26.9629 34.9771 27.0506 35.3515 27.265C35.7259 27.4795 36.0209 27.8093 36.1925 28.2052L38.8325 34.099V34.114C38.9639 34.4171 39.0181 34.7479 38.9904 35.0771C38.9627 35.4062 38.8539 35.7234 38.6738 36.0002C38.6513 36.034 38.6275 36.0652 38.6025 36.0965L36 39.1815C36.9363 41.084 38.9263 43.0565 40.8538 43.9952L43.8963 41.4065C43.9261 41.3814 43.9574 41.358 43.99 41.3365C44.2666 41.152 44.5849 41.0394 44.916 41.0088C45.2471 40.9783 45.5806 41.0307 45.8863 41.1615L45.9025 41.169L51.7913 43.8077C52.1879 43.9787 52.5185 44.2735 52.7337 44.6479C52.9489 45.0224 53.037 45.4565 52.985 45.8852Z"
                fill="#222222"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-medium text-black">Phone</h3>
            <p className="text-sm text-gray-500">
              Speak to our team for support.
            </p>
            <a
              href="tel:+2347075103141"
              className="block mt-2 text-sm font-medium text-gray-900"
            >
              +234 707 510 3141
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
