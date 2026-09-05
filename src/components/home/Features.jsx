import { motion } from "framer-motion";
import {
  Plane,
  CreditCard,
  Globe,
  Headphones,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

function Features() {
  const features = [
    {
      icon: <Plane size={30} />,
      title: "Best Flight Deals",
      description:
        "Find affordable domestic and international flights with exclusive discounts and offers.",
    },
    {
      icon: <CreditCard size={30} />,
      title: "Secure Payments",
      description:
        "Pay safely using trusted payment gateways with complete transaction security.",
    },
    {
      icon: <Globe size={30} />,
      title: "Worldwide Destinations",
      description:
        "Explore hundreds of destinations across the globe with one seamless booking experience.",
    },
    {
      icon: <Headphones size={30} />,
      title: "24/7 Customer Support",
      description:
        "Our support team is available anytime to help with bookings, cancellations and travel queries.",
    },
  ];

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-28">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >

          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">

            Why Choose Us

          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">

            Travel Smarter With

            <span className="text-blue-600">
              {" "}SkyBook
            </span>

          </h2>

          <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">

            Experience seamless booking, secure payments,
            premium support and unforgettable journeys
            with our modern flight booking platform.

          </p>

        </motion.div>

        {/* Features Grid */}

        <div
         className="
mt-12
sm:mt-16
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-2
xl:grid-cols-4
gap-5
sm:gap-6
lg:gap-8
"
        >

          {features.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >

              <FeatureCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />

            </motion.div>

          ))}

        </div>

        {/* 👇👇 PART-2 IS LINE KE NICHE START HOGA 👇👇 */}
                {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
         className="mt-14 sm:mt-16 lg:mt-20" 
        >
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 p-6 sm:p-8 md:p-12 shadow-2xl">

            <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-8 text-center lg:text-left">

              <div className="text-center lg:text-left">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  Ready For Your Next Adventure?
                </h2>

                <p className="mt-4 text-sm sm:text-base text-blue-100 max-w-2xl leading-6 sm:leading-7">
                  Book your flight in minutes, compare the best prices,
                  and travel with confidence anywhere in the world.
                </p>

              </div>

              <button
               className="
w-full
sm:w-auto
shrink-0
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
hover:shadow-xl
"
              >
                Book Your Flight
              </button>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Features;