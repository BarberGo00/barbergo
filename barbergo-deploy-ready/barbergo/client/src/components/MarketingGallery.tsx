export default function MarketingGallery() {
  const marketingImages = [
    {
      id: 1,
      image: "/marketing-1.jpg",
      alt: "Corte e Barba Premium 1"
    },
    {
      id: 2,
      image: "/marketing-2.jpg",
      alt: "Corte e Barba Premium 2"
    },
    {
      id: 3,
      image: "/marketing-3.jpg",
      alt: "Corte e Barba Premium 3"
    }
  ];

  return (
    <section id="galeria-marketing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Marketing Gallery Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketingImages.map((item) => (
              <div
                key={item.id}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
