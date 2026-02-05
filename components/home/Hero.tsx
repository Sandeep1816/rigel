import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h1 className="text-5xl font-bold mb-6">
            Creating World-Class Trade Fairs & Exhibitions
          </h1>

          <p className="text-gray-600 text-lg max-w-xl">
            Rigel Trade Fairs & Exhibitions organizes premium exhibitions
            connecting brands, buyers, and communities across India.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/gallery/expo-crowd.jpg"
            alt="Trade fair"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
