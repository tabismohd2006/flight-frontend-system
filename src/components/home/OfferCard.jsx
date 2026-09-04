import { ArrowRight } from "lucide-react";

function OfferCard({ offer }) {

  return (

    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      h-[450px]
      shadow-xl
      "
    >

      <img
        src={offer.image}
        alt={offer.title}
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        group-hover:scale-110
        duration-700
        "
      />

      <div
        className={`
        absolute
        inset-0
        bg-gradient-to-r
        ${offer.color}
        opacity-75
        `}
      ></div>

      <div
        className="
        absolute
        inset-0
        p-8
        flex
        flex-col
        justify-end
        text-white
        "
      >

        <span
          className="
          text-sm
          uppercase
          tracking-widest
          "
        >

          Limited Time

        </span>

        <h2
          className="
          text-4xl
          font-bold
          mt-3
          "
        >

          {offer.title}

        </h2>

        <h3
          className="
          text-2xl
          font-semibold
          mt-2
          "
        >

          {offer.subtitle}

        </h3>

        <p
          className="
          mt-5
          leading-7
          "
        >

          {offer.description}

        </p>

        {/* 👇👇 PART-2 YAHAN SE START HOGA 👇👇 */}
                <button
          className="
            mt-8
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-xl
            bg-white
            px-6
            py-3
            font-semibold
            text-gray-900
            transition-all
            duration-300
            hover:scale-105
            hover:gap-3
          "
        >
          {offer.button}

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

      </div>

    </div>

  );
}

export default OfferCard;