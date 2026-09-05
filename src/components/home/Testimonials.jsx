import { motion } from "framer-motion";
import { testimonials } from "../../utils/constants";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm sm:text-base font-semibold text-yellow-600">
            Testimonials
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            What Our
            <span className="text-blue-600"> Travelers Say</span>
          </h2>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-600 leading-7 sm:leading-8">
            Thousands of happy customers trust SkyBook for
            safe, affordable and seamless flight bookings.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
            mt-12
            sm:mt-16
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
            lg:gap-8
          "
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 sm:mt-16"
        >
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 p-6 sm:p-8 md:p-10 shadow-xl">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">

              <div className="text-center lg:text-left">

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  ⭐ 4.9 / 5 Customer Rating
                </h3>

                <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90">
                  Trusted by more than <strong>50,000+</strong> travelers
                  across India.
                </p>

              </div>

              <button
                className="
                  w-full
                  sm:w-auto
                  rounded-2xl
                  bg-white
                  px-6
                  sm:px-8
                  py-3
                  sm:py-4
                  font-semibold
                  text-orange-600
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-xl
                "
              >
                Read More Reviews
              </button>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Testimonials;