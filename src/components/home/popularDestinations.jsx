import { motion } from "framer-motion";
import DestinationCard from "./DestinationCard";
import { destinations } from "../../utils/constants";

function PopularDestinations() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold mb-4">

            Top Destinations

          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">

            Explore Amazing Places Around The World

          </h2>

          <p className="mt-6 text-gray-600 leading-8 text-lg">

            Discover the most loved travel destinations with
            affordable flight prices and unforgettable experiences.

          </p>

        </motion.div>

        {/* Grid */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {destinations.map((destination, index) => (

            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >

              <DestinationCard
                destination={destination}
              />

            </motion.div>

          ))}

        </div>

        {/* 👇👇 PART-2 IS LINE KE NICHE START HOGA 👇👇 */}
                {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <button
            className="
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-blue-600
              px-8
              py-4
              text-white
              font-semibold
              shadow-lg
              transition-all
              duration-300
              hover:bg-blue-700
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            View All Destinations
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default PopularDestinations;
