import Image from "next/image";
import Link from "next/link";

const exhibitions = [
  {
    name: "Mama & Kids Expo",
    year: "2026",
    location: "Bangalore",
    description:
      "A premium exhibition focused on kids, toys, learning, baby products and modern parenting.",
    image: "/exhibitions/mama-kids.jpg",
    website: "https://mamankidsexpo.com",
  },
  {
    name: "Food & Hospitality Expo",
    year: "2026",
    location: "India",
    description:
      "A professional B2B exhibition showcasing food, beverages, hospitality brands, equipment, packaging and supply-chain innovations.",
    image: "/exhibitions/food-expo.jpg",
    website: "#",
  },
];

export default function ExhibitionsPage() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Exhibitions
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Rigel Trade Fairs & Exhibitions organizes premium exhibitions
            designed to connect brands, buyers and communities across India.
          </p>
        </div>

        {/* EXHIBITIONS GRID */}
        <div className="grid md:grid-cols-2 gap-14">

          {exhibitions.map((expo) => (
            <div
              key={expo.name}
              className="group border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <Image
                  src={expo.image}
                  alt={expo.name}
                  width={800}
                  height={500}
                  className="object-cover w-full h-[260px] group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">
                  {expo.name} {expo.year}
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  {expo.location}
                </p>

                <p className="text-gray-600 mb-6">
                  {expo.description}
                </p>

                {expo.website !== "#" && (
                  <Link
                    href={expo.website}
                    target="_blank"
                    className="inline-block text-sm font-semibold border-b border-black pb-1 hover:text-black"
                  >
                    Visit Website →
                  </Link>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
