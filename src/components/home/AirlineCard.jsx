function AirlineCard({ airline }) {

  return (

 <div
  className="
  relative
  bg-white
  rounded-3xl
  shadow-md
  hover:shadow-xl
  transition-all
  duration-300
  p-8
  flex
  items-center
  justify-center
  h-40
  group
  overflow-hidden
  "
>

      <img
        src={airline.logo}
        alt={airline.name}
        className="
        max-h-16
        object-contain
        grayscale
        group-hover:grayscale-0
        transition-all
        duration-500
        "
      />

      {/* 👇👇 PART-2 ISKE NICHE START HOGA 👇👇 */}
            <div className="absolute bottom-5 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-all duration-500">

        <h3 className="text-gray-800 font-semibold">
          {airline.name}
        </h3>

      </div>

    </div>

  );
}

export default AirlineCard;