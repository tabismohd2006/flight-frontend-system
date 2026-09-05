import { ArrowRight } from "lucide-react";

function FeatureCard({ icon, title, description }) {

  return (

    <div
     className="
group
rounded-2xl
sm:rounded-3xl
bg-white
p-5
sm:p-6
lg:p-8
shadow-md
hover:shadow-2xl
transition-all
duration-500
hover:-translate-y-2
border
border-gray-100
"
    >

      <div
       className="
w-14
h-14
sm:w-16
sm:h-16
rounded-xl
sm:rounded-2xl
bg-blue-100
flex
items-center
justify-center
text-blue-600
mb-5
sm:mb-6
group-hover:bg-blue-600
group-hover:text-white
transition-all
duration-300
"
      >

        {icon}

      </div>

      <h3
      className="
text-xl
sm:text-2xl
font-bold
text-gray-900
"
      >

        {title}

      </h3>

      <p
       className="
mt-3
sm:mt-4
text-sm
sm:text-base
text-gray-600
leading-6
sm:leading-7
"
      >

        {description}

      </p>

      {/* 👇 PART-2 YAHAN SE START HOGA */}
            <button
        className="
mt-5
sm:mt-6
inline-flex
items-center
gap-2
text-sm
sm:text-base
font-semibold
text-blue-600
transition-all
duration-300
group-hover:gap-3
"
      >
        Learn More

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

    </div>

  );
}

export default FeatureCard;