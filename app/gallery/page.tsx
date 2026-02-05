import Image from "next/image";

const previewImages = [
  {
    src: "/gallery/preview-hall.jpg",
    alt: "Proposed exhibition hall layout",
  },
  {
    src: "/gallery/preview-booths.jpg",
    alt: "Expected exhibitor booths and stalls",
  },
  {
    src: "/gallery/preview-stage.jpg",
    alt: "Planned stage and branding setup",
  },
  {
    src: "/gallery/preview-visitors.jpg",
    alt: "Expected visitor engagement and footfall",
  },
];

export default function GalleryPage() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Expo Preview
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Mama & Kids Expo 2026 is the first edition organized by
            Rigel Trade Fairs & Exhibitions. Below is a visual representation
            of what exhibitors and visitors can expect at the event.
          </p>
        </div>

        {/* NOTE */}
        <div className="max-w-3xl mx-auto text-center text-sm text-gray-500 mb-16">
          *Images shown are reference visuals for layout, scale and experience.
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {previewImages.map((image, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden shadow"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="object-cover w-full h-[260px]"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
