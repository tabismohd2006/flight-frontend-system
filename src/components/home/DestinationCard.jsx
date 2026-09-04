import { ArrowRight, Star } from "lucide-react";

function DestinationCard({ destination }) {

  return (

    <div
      className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl duration-300"
    >

      <div className="relative overflow-hidden h-72">

        <img
          src={destination.image}
          alt={destination.city}
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="absolute bottom-5 left-5 text-white">

          <h3 className="text-3xl font-bold">

            {destination.city}

          </h3>

          <p>

            {destination.country}

          </p>

        </div>

      </div>

      {/* 👇👇 PART-2 YAHAN SE START HOGA 👇👇 */}
            <div className="p-5">

        <div className="flex items-center justify-between mb-5">

          <div className="flex items-center gap-2">

            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="font-semibold text-gray-700">
              {destination.rating}
            </span>

          </div>

          <h4 className="text-xl font-bold text-blue-600">
            {destination.price}
          </h4>

        </div>

        <button
          className="
            w-full
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-3
            font-semibold
            transition-all
            duration-300
            flex
            items-center
            justify-center
            gap-2
            group
          "
        >
          Explore Destination

          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 duration-300"
          />

        </button>

      </div>

    </div>

  );

}

export default DestinationCard;