import {
  Plane,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <Link
              to="/"
              className="flex items-center gap-3 justify-center sm:justify-start"
            >
              <Plane
                className="text-blue-400"
                size={34}
              />

              <h2 className="text-2xl sm:text-3xl font-bold">
                SkyBook
              </h2>

            </Link>

            <p
              className="
              mt-6
              text-gray-400
              leading-7
              text-center
              sm:text-left
              "
            >
              Book flights with confidence.
              Compare airlines, grab amazing
              deals and enjoy hassle-free
              travel worldwide.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3
              className="
              text-xl
              sm:text-2xl
              font-bold
              mb-6
              text-center
              sm:text-left
              "
            >
              Quick Links
            </h3>

            <ul
              className="
              space-y-4
              text-gray-400
              text-center
              sm:text-left
              "
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/flights">Flights</Link></li>
              <li><Link to="/offers">Offers</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Destinations */}

          <div>

            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
              Popular Destinations
            </h3>

            <ul className="space-y-4 text-gray-400 text-center sm:text-left">
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Goa</li>
              <li>Dubai</li>
              <li>Singapore</li>
              <li>Paris</li>
            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
              Contact Us
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex items-start justify-center sm:justify-start gap-3">

                <MapPin
                  className="text-blue-400 mt-1 shrink-0"
                  size={20}
                />

                <p>
                  Lucknow, Uttar Pradesh, India
                </p>

              </div>

              <div className="flex items-center justify-center sm:justify-start gap-3">

                <Phone
                  className="text-blue-400 shrink-0"
                  size={20}
                />

                <p>+91 98765 43210</p>

              </div>

              <div className="flex items-center justify-center sm:justify-start gap-3">

                <Mail
                  className="text-blue-400 shrink-0"
                  size={20}
                />

                <p className="break-all">
                  support@skybook.com
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div
          className="
            mt-12
            border-t
            border-slate-700
            pt-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-5
          "
        >

          <p className="text-gray-400 text-center text-sm sm:text-base">
            © 2026 SkyBook. All Rights Reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              w-full
              sm:w-auto
              rounded-full
              bg-blue-600
              px-6
              py-3
              text-sm
              font-semibold
              transition-all
              duration-300
              hover:bg-blue-700
            "
          >
            ↑ Back to Top
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;