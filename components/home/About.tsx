export default function AboutHome() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Rigel Trade Fairs & Exhibitions
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Rigel Trade Fairs & Exhibitions is a professional exhibition
            organizer focused on creating well-curated trade platforms
            that connect brands, buyers and communities.
          </p>

          <p className="text-gray-600">
            We specialize in consumer and business exhibitions with
            strong planning, marketing reach and on-ground execution.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow">
          <ul className="space-y-4 text-gray-700">
            <li>• Professionally managed exhibitions</li>
            <li>• High-quality exhibitors & visitors</li>
            <li>• Strong promotion & branding</li>
            <li>• End-to-end execution</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
