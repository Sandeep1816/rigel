export default function WhyUs() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          Why Choose Rigel?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Experienced Exhibition Team",
            "Strong Marketing Reach",
            "Quality Exhibitors & Visitors",
            "Professional On-Ground Execution",
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
    </section>
  );
}
