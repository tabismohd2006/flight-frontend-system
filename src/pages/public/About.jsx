import { Plane, ShieldCheck, Clock3, Globe } from "lucide-react";

function About() {

  return (

    <section className="min-h-screen bg-slate-100 pt-28 pb-16">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center">

          <h1 className="text-5xl font-bold">
            About SkyBook
          </h1>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            SkyBook is a modern flight booking platform that helps users
            search, compare and book flights easily with a secure and
            user-friendly experience.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

  <div className="bg-white p-8 rounded-2xl shadow-lg text-center">

    <Plane className="mx-auto text-blue-600" size={45} />

    <h2 className="mt-4 text-2xl font-bold">
      500+
    </h2>

    <p className="text-slate-500">
      Daily Flights
    </p>

  </div>

  <div className="bg-white p-8 rounded-2xl shadow-lg text-center">

    <ShieldCheck className="mx-auto text-green-600" size={45} />

    <h2 className="mt-4 text-2xl font-bold">
      Secure
    </h2>

    <p className="text-slate-500">
      Safe Payments
    </p>

  </div>

  <div className="bg-white p-8 rounded-2xl shadow-lg text-center">

    <Clock3 className="mx-auto text-orange-600" size={45} />

    <h2 className="mt-4 text-2xl font-bold">
      24×7
    </h2>

    <p className="text-slate-500">
      Customer Support
    </p>

  </div>

  <div className="bg-white p-8 rounded-2xl shadow-lg text-center">

    <Globe className="mx-auto text-purple-600" size={45} />

    <h2 className="mt-4 text-2xl font-bold">
      Worldwide
    </h2>

    <p className="text-slate-500">
      International Routes
    </p>

  </div>

</div>
{/* Mission Section */}

<div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">

  <div>

    <h2 className="text-4xl font-bold">
      Our Mission
    </h2>

    <p className="mt-6 text-slate-600 leading-8">

      Our mission is to make flight booking simple,
      fast and affordable for everyone. We connect
      travelers with trusted airlines while providing
      secure payments, transparent pricing and a smooth
      booking experience.

    </p>

    <p className="mt-4 text-slate-600 leading-8">

      Whether you're travelling for business,
      vacations or family trips, SkyBook helps you
      find the best flights at the best prices.

    </p>

  </div>

  <div className="bg-white rounded-3xl shadow-xl p-10">

    <h3 className="text-3xl font-bold mb-8">
      Why Choose Us?
    </h3>

    <div className="space-y-6">

      <div className="flex items-center gap-4">

        <Plane className="text-blue-600" />

        <span className="text-lg">
          Easy Flight Booking
        </span>

      </div>

      <div className="flex items-center gap-4">

        <ShieldCheck className="text-green-600" />

        <span className="text-lg">
          100% Secure Payments
        </span>

      </div>

      <div className="flex items-center gap-4">

        <Clock3 className="text-orange-600" />

        <span className="text-lg">
          Instant Booking Confirmation
        </span>

      </div>

      <div className="flex items-center gap-4">

        <Globe className="text-purple-600" />

        <span className="text-lg">
          Domestic & International Flights
        </span>

      </div>

    </div>

  </div>

</div>
{/* Team Section */}

<div className="mt-24">

  <h2 className="text-4xl font-bold text-center">
    Meet Our Team
  </h2>

  <p className="text-center text-slate-600 mt-4">
    Passionate people working to make travel easier.
  </p>

  <div className="grid md:grid-cols-3 gap-8 mt-12">

    <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

      <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600">
        A
      </div>

      <h3 className="mt-6 text-2xl font-bold">
         Mohd Mubbsir
      </h3>

      <p className="text-slate-500">
        Founder & CEO
      </p>

    </div>

    <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

      <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center text-3xl font-bold text-green-600">
        S
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        Mohd Gufran
      </h3>

      <p className="text-slate-500">
        Operations Manager
      </p>

    </div>

    <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

      <div className="w-24 h-24 mx-auto rounded-full bg-purple-100 flex items-center justify-center text-3xl font-bold text-purple-600">
        M
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        Nadim khan
      </h3>

      <p className="text-slate-500">
        Customer Success
      </p>

    </div>

  </div>

</div>

{/* CTA Section */}

<div className="mt-24 bg-blue-600 rounded-3xl text-white p-12 text-center">

  <h2 className="text-4xl font-bold">
    Ready For Your Next Journey?
  </h2>

  <p className="mt-5 text-lg">
    Book your next flight with SkyBook and enjoy a
    seamless travel experience.
  </p>

  <a
    href="/flights"
    className="inline-block mt-8 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-slate-100 transition"
  >
    Explore Flights
  </a>

</div>

        </div>

      </div>

    </section>

  );

}

export default About;