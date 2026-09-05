import { motion } from "framer-motion";
import { offers } from "../../utils/constants";
import OfferCard from "./OfferCard";

function Offers() {
  return (
    <section className="py-14 sm:py-16 lg:py-28 bg-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span
            className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-orange-100
              text-orange-600
              text-sm
              sm:text-base
              font-semibold
            "
          >
            Special Offers
          </span>

          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              leading-tight
            "
          >
            Save More On

            <span className="text-blue-600">
              {" "}Every Journey
            </span>
          </h2>

          <p
            className="
              mt-5
              text-base
              sm:text-lg
              text-gray-600
              leading-7
              sm:leading-8
            "
          >
            Grab exclusive travel offers and book your
            flights at unbeatable prices.
          </p>
        </motion.div>

        {/* Grid */}

        <div
          className="
            mt-12
            sm:mt-16
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
            lg:gap-8
          "
        >
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <OfferCard offer={offer} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <button
            className="
              w-full
              sm:w-auto
              rounded-xl
              sm:rounded-2xl
              bg-blue-600
              px-6
              sm:px-8
              py-3
              sm:py-4
              text-sm
              sm:text-base
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
            Explore All Offers
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Offers;