export default function BeyondLearning() {
  return (
    <section className="my-[60px]">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Opportunities beyond learning
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Recognition */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="https://cdn-gcp.extramarks.com/emcontent/uploads/Schools/gipImg.webp"
              alt="Recognition"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-sm font-semibold text-orange-500 mb-2">
                Recognition
              </h3>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                The Great Schools of India
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Showcasing the marvel of Indian Education.
              </p>
              <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                Explore Now
              </button>
            </div>
          </div>

          {/* Card 2 - Webinar */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="https://cdn-gcp.extramarks.com/emcontent/uploads/Schools/elevateImg.webp"
              alt="Webinar"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-sm font-semibold text-orange-500 mb-2">
                Webinar
              </h3>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Elevate</h2>
              <p className="text-gray-600 text-sm mb-4">
                Elevating minds, one webinar at a time.
              </p>
              <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                Explore Now
              </button>
            </div>
          </div>

          {/* Card 3 - Blog */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="https://cdn-gcp.extramarks.com/emcontent/uploads/Schools/chroniclesImg.webp"
              alt="Blog"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-sm font-semibold text-orange-500 mb-2">
                Blog
              </h3>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Chronicles
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Unlocking the Hidden Gems of Educational Wisdom.
              </p>
              <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                Read More
              </button>
            </div>
          </div>

          {/* Card 4 - Newsletter */}
          <a
            href="/digest-newsletter/"
            target="_blank"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow block"
          >
            <img
              src="https://www.extramarks.com/static/media/digestiveimg.edb36c5c.webp"
              alt="Newsletter"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-sm font-semibold text-orange-500 mb-2">
                NEWSLETTER
              </h3>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Digest</h2>
              <p className="text-gray-600 text-sm mb-4">
                Your weekly guide to education and tech brilliance
              </p>
              <span className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                Read More
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
