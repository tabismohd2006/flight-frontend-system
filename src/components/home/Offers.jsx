import { motion } from "framer-motion";
import { offers } from "../../utils/constants";
import OfferCard from "./OfferCard";

function Offers() {

  return (

    <section className="py-20 lg:py-28 bg-gray-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.7 }}
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
            font-semibold
            "
          >

            Special Offers

          </span>

          <h2
            className="
            mt-5
            text-4xl
            md:text-5xl
            font-bold
            "
          >

            Save More On

            <span className="text-blue-600">

              {" "}Every Journey

            </span>

          </h2>

          <p
            className="
            mt-6
            text-lg
            text-gray-600
            leading-8
            "
          >

            Grab exclusive travel offers and book your
            flights at unbeatable prices.

          </p>

        </motion.div>

        {/* Grid */}

        <div
          className="
          mt-16
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          "
        >

          {offers.map((offer,index)=>(

            <motion.div
              key={offer.id}
              initial={{ opacity:0,y:50 }}
              whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true }}
              transition={{
                duration:.6,
                delay:index*.15
              }}
            >

              <OfferCard offer={offer}/>

            </motion.div>

          ))}

        </div>

        {/* 👇👇 PART-2 ISKE NICHE START HOGA 👇👇 */}
                {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex justify-center"
        >
          <button
            className="
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
            Explore All Offers
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default Offers;