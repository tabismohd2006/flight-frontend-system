import { Phone, Mail, MapPin } from "lucide-react";

function Contact() {
  return (
    <section className="min-h-screen bg-slate-100 pt-24 sm:pt-28 pb-10 sm:pb-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-5 text-slate-600 text-base sm:text-lg">
            We'd love to hear from you.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-16">

          {/* Contact Info */}

          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10">

            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <Phone
                  className="text-blue-600 shrink-0"
                  size={24}
                />

                <div>

                  <h3 className="font-bold">
                    Phone
                  </h3>

                  <p className="break-all">
                    +91 9876543210
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <Mail
                  className="text-green-600 shrink-0"
                  size={24}
                />

                <div>

                  <h3 className="font-bold">
                    Email
                  </h3>

                  <p className="break-all">
                    support@skybook.com
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <MapPin
                  className="text-red-600 shrink-0"
                  size={24}
                />

                <div>

                  <h3 className="font-bold">
                    Address
                  </h3>

                  <p>
                    Ranchi, Jharkhand, India
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10">

            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              Send Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl p-4 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-xl p-4 outline-none focus:border-blue-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-xl p-4 outline-none focus:border-blue-600"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border rounded-xl p-4 outline-none focus:border-blue-600 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition font-semibold"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;