import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get in touch with Rigel Trade Fairs & Exhibitions for exhibitor
            enquiries, partnerships, sponsorships or general information.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* CONTACT INFO */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Rigel Trade Fairs & Exhibitions
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We organize professionally managed trade fairs and exhibitions
              across India, connecting brands, buyers and communities through
              well-curated platforms.
            </p>

            <div className="space-y-5 text-sm">
              <p>
                📍 <strong>Location:</strong><br />
                Bangalore, Karnataka, India
              </p>

              <p>
                📞 <strong>Phone:</strong><br />
                +91 99160 02229<br />
                +91 93802 43993
              </p>

              <p>
                ✉️ <strong>Email:</strong><br />
                info@rigeltradefairs.com
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91"
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us how we can help you"
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
