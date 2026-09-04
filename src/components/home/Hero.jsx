import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Plane, ArrowRight } from "lucide-react";

function Hero() {
  const navigate = useNavigate();

const [from, setFrom] = useState("");
const [to, setTo] = useState("");
const [date, setDate] = useState("");
const [travellers, setTravellers] = useState("1");

const searchFlights = () => {
  navigate(
    `/flights?from=${from}&to=${to}&date=${date}&travellers=${travellers}`
  );
};

  return (

  <section
  className="relative min-h-screen flex items-center overflow-x-hidden pt-20"
>

      {/* Background */}

      <img
        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
        alt="Flight"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left */}

          <motion.div className="text-center lg:text-left"
            initial={{ opacity:0,y:40 }}
            animate={{ opacity:1,y:0 }}
            transition={{ duration:.8 }}
          >

            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white mb-6">

              <Plane size={18} />

              <span>
                Best Flight Deals 2026
              </span>

            </div>

            <h1 className="text-white font-bold leading-tight text-5xl sm:text-6xl xl:text-7xl">

              Book Your

              <span className="text-blue-400">

                {" "}Dream Journey

              </span>

            </h1>

            <p className="text-gray-200 mt-6 text-lg max-w-xl leading-8">

              Find affordable flights, discover amazing destinations,
              and travel comfortably with trusted airlines across the globe.

            </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">

              <button
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold flex items-center gap-2"
              >

                Book Now

                <ArrowRight size={20}/>

              </button>

              <button
                className="px-8 py-4 rounded-xl border border-white text-white hover:bg-white hover:text-black transition"
              >

                Explore Flights

              </button>

            </div>

         <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-14 text-center lg:text-left">

              <div>

                <h2 className="text-white font-bold text-3xl">

                  50K+

                </h2>

                <p className="text-gray-300">

                  Happy Travelers

                </p>

              </div>

              <div>

                <h2 className="text-white font-bold text-3xl">

                  500+

                </h2>

                <p className="text-gray-300">

                  Destinations

                </p>

              </div>

              <div>

                <h2 className="text-white font-bold text-3xl">

                  100+

                </h2>

                <p className="text-gray-300">

                  Airlines

                </p>

              </div>

            </div>

          </motion.div>

          {/* =========================== */}

          {/* PART-2 ISKE NICHE START HOGA */}
                    {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
           className="w-full flex justify-center lg:justify-end"
          >

          <div className="w-full max-w-lg bg-white/15 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">

              <h2 className="text-2xl font-bold text-white mb-6">
                Search Flights
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* From */}

                <div>
                  <label className="block text-white mb-2">
                    From
                  </label>

                 <input
  type="text"
  placeholder="Lucknow"
  value={from}
  onChange={(e) => setFrom(e.target.value)}
  className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-3 text-white placeholder:text-gray-200 outline-none focus:border-blue-400"
/>
                </div>

                {/* To */}

                <div>
                  <label className="block text-white mb-2">
                    To
                  </label>

                <input
  type="text"
  placeholder="Delhi"
  value={to}
  onChange={(e) => setTo(e.target.value)}
  className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-3 text-white placeholder:text-gray-200 outline-none focus:border-blue-400"
/>
                </div>

                {/* Departure */}

                <div>
                  <label className="block text-white mb-2">
                    Departure
                  </label>

                 <input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-3 text-white outline-none focus:border-blue-400"
/>
                </div>

                {/* Travellers */}

                <div>
                  <label className="block text-white mb-2">
                    Travellers
                  </label>

                 <select
  value={travellers}
  onChange={(e) => setTravellers(e.target.value)}
  className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-3 text-white outline-none focus:border-blue-400"
>
  <option className="text-black" value="1">1 Traveller</option>
  <option className="text-black" value="2">2 Travellers</option>
  <option className="text-black" value="3">3 Travellers</option>
  <option className="text-black" value="4">4 Travellers</option>
  <option className="text-black" value="5">5+ Travellers</option>
</select>
                </div>

              </div>

             <button
  onClick={searchFlights}
  className="mt-8 w-full bg-blue-600 hover:bg-blue-700 transition rounded-xl py-4 text-lg font-semibold text-white flex items-center justify-center gap-2"
>
                <Plane size={20} />

                Search Flights
              </button>

            </div>

          </motion.div>

          {/* =========================== */}

          {/* 👇👇 PART-3 ISKE NICHE START HOGA 👇👇 */}
                  </div>
      </div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

    </section>

  );
}

export default Hero;