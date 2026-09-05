import { ArrowRight } from "lucide-react";

function OfferCard({ offer }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        sm:rounded-3xl
        h-[380px]
        sm:h-[420px]
        lg:h-[450px]
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
          transition-transform
          duration-700
          group-hover:scale-110
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
          p-5
          sm:p-6
          lg:p-8
          flex
          flex-col
          justify-end
          text-white
        "
      >
        <span
          className="
            text-xs
            sm:text-sm
            uppercase
            tracking-widest
          "
        >
          Limited Time
        </span>

        <h2
          className="
            mt-2
            text-2xl
            sm:text-3xl
            lg:text-4xl
            font-bold
            leading-tight
          "
        >
          {offer.title}
        </h2>

        <h3
          className="
            mt-2
            text-lg
            sm:text-xl
            lg:text-2xl
            font-semibold
          "
        >
          {offer.subtitle}
        </h3>

        <p
          className="
            mt-4
            text-sm
            sm:text-base
            leading-6
            sm:leading-7
          "
        >
          {offer.description}
        </p>

        <button
          className="
            mt-6
            sm:mt-8
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-xl
            bg-white
            px-5
            sm:px-6
            py-3
            text-sm
            sm:text-base
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