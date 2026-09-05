import { motion } from "framer-motion";
import { airlines } from "../../utils/constants";
import AirlineCard from "./AirlineCard";

function Airlines() {
  return (
  <section className="bg-white py-16 sm:py-20 lg:py-28">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm sm:text-base font-semibold text-blue-600">

            Trusted Airlines

          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">

            Fly With The

            <span className="text-blue-600">

              {" "}Best Airlines

            </span>

          </h2>

          <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">

            We partner with the world's most trusted airlines
            to provide you with safe, comfortable and affordable journeys.

          </p>

        </motion.div>

        {/* Airlines Grid */}

        <div
        className="
mt-12
sm:mt-16
grid
grid-cols-1
sm:grid-cols-2
md:grid-cols-3
lg:grid-cols-6
gap-5
sm:gap-6
"
        >

          {airlines.map((airline, index) => (

            <motion.div
              key={airline.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >

              <AirlineCard airline={airline} />

            </motion.div>

          ))}

        </div>

        {/* 👇👇 PART-2 ISKE NICHE START HOGA 👇👇 */}
                {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
         className="mt-12 sm:mt-16 flex justify-center"
        >
          <button
           className="
w-full
sm:w-auto
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
            View All Airlines
          </button>
        </motion.div>

      </div>

    </section>
  );
}

export default Airlines;