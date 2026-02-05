import Link from "next/link";
import Image from "next/image";

const exhibitions = [
  {
    id: 1,
    name: "Mama & Kids Expo 2026",
    location: "Bangalore",
    category: "Kids, Toys, Learning & Parenting",
    image: "/exhibitions/mama-kids.jpg",
    url: "https://mamankidsexpo.com",
  },
  {
    id: 2,
    name: "Food & Hospitality Expo 2026",
    location: "India",
    category: "Food, Beverages, Hospitality & Equipment",
    image: "/exhibitions/food-expo.jpg",
    url: "#",
    comingSoon: true,
  },
];

export default function ExhibitionsHome() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-end mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Exhibitions
          </h2>

          <Link
            href="/exhibitions"
            className="text-sm font-semibold border-b border-black"
          >
            View All →
          </Link>
        </div>

        {/* EXHIBITIONS GRID */}
        <div className="grid md:grid-cols-2 gap-12">
          {exhibitions.map((expo) => (
            <div
              key={expo.id}
              className="group rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="relative">
                <Image
                  src={expo.image}
                  alt={expo.name}
                  width={700}
                  height={450}
                  className="object-cover w-full h-[260px] group-hover:scale-105 transition duration-500"
                />

                {expo.comingSoon && (
                  <span className="absolute top-4 right-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {expo.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  {expo.location}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {expo.category}
                </p>

                {!expo.comingSoon && (
                  <Link
                    href={expo.url}
                    target="_blank"
                    className="text-sm font-semibold border-b border-black"
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
