import { Star } from "lucide-react";

function TestimonialCard({ testimonial }) {
  return (
    <div
      className="
        rounded-2xl
        sm:rounded-3xl
        bg-white
        p-5
        sm:p-6
        lg:p-8
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
      "
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg sm:text-xl font-bold">
            {testimonial.name}
          </h3>

          <p className="text-sm sm:text-base text-gray-500">
            {testimonial.city}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1 mt-5 sm:mt-6">
        {[...Array(testimonial.rating)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p
        className="
          mt-4
          sm:mt-5
          text-sm
          sm:text-base
          text-gray-600
          leading-6
          sm:leading-7
        "
      >
        "{testimonial.review}"
      </p>
    </div>
  );
}

export default TestimonialCard;