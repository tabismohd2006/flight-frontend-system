import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function Newsletter() {
  return (
    <section className="py-14 sm:py-16 lg:py-28 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            rounded-2xl
            sm:rounded-[32px]
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            p-6
            sm:p-8
            md:p-14
            text-center
            shadow-2xl
          "
        >
          <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/20">
            <Mail className="text-white" size={32} />
          </div>

          <h2 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Stay Updated
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-blue-100 max-w-2xl mx-auto">
            Subscribe to receive exclusive flight deals,
            travel offers and exciting destination updates.
          </p>

          <form className="mt-8 sm:mt-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="
                  w-full
                  flex-1
                  rounded-xl
                  sm:rounded-2xl
                  border
                  border-white/20
                  bg-white
                  px-5
                  sm:px-6
                  py-3
                  sm:py-4
                  text-sm
                  sm:text-base
                  text-gray-800
                  placeholder:text-gray-500
                  outline-none
                  focus:ring-4
                  focus:ring-white/30
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  sm:w-auto
                  rounded-xl
                  sm:rounded-2xl
                  bg-white
                  px-6
                  sm:px-8
                  py-3
                  sm:py-4
                  text-sm
                  sm:text-base
                  font-semibold
                  text-blue-600
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-gray-100
                "
              >
                Subscribe
              </button>
            </div>
          </form>

          <p className="mt-6 sm:mt-8 text-sm sm:text-base text-blue-100 leading-6">
            Join <span className="font-bold text-white">50,000+</span> travelers
            and never miss the latest flight deals, discounts and travel updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Newsletter;