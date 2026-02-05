export default function AboutPage() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* INTRO */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Rigel Trade Fairs & Exhibitions
          </h1>

          <p className="text-gray-700 text-lg max-w-3xl">
            Rigel Trade Fairs & Exhibitions is a professional exhibition
            organizer dedicated to creating high-quality trade platforms
            that connect brands, businesses and consumers.
          </p>
        </div>

        {/* VISION / MISSION */}
        <div className="grid md:grid-cols-2 gap-14 mb-20">

          <div className="bg-white p-10 rounded-3xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become a trusted exhibition organizer delivering impactful,
              well-curated trade fairs that drive business growth and
              meaningful engagement across industries.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To design and execute professionally managed exhibitions
              that provide value to exhibitors, visitors, sponsors and
              partners through strong planning and execution.
            </p>
          </div>

        </div>

        {/* WHY RIGEL */}
        <div>
          <h3 className="text-3xl font-semibold mb-10">
            Why Choose Rigel?
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Experienced Exhibition Team",
              "Strong Marketing & Promotion",
              "Quality Visitors & Buyers",
              "End-to-End Event Execution",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-8 rounded-2xl shadow text-center"
              >
                <p className="font-medium text-gray-800">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
