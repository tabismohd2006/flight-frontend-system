import { Star } from "lucide-react";

function TestimonialCard({ testimonial }) {
  return (
    <div
      className="
        rounded-3xl
        bg-white
        p-8
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
      "
    >
      <div className="flex items-center gap-4">

        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>

          <h3 className="font-bold text-xl">
            {testimonial.name}
          </h3>

          <p className="text-gray-500">
            {testimonial.city}
          </p>

        </div>

      </div>

      {/* 👇 PART-2 YAHAN SE START HOGA */}
            <div className="flex items-center gap-1 mt-6">

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
          mt-5
          text-gray-600
          leading-7
        "
      >
        "{testimonial.review}"
      </p>

    </div>
  );
}

export default TestimonialCard;