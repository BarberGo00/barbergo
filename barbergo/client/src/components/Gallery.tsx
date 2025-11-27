import { useState } from "react";
import { X } from "lucide-react";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: "/gallery-1.jpg",
      title: "Corte completo",
      category: "Corte",
    },
    {
      id: 2,
      image: "/gallery-2.jpg",
      title: "Barba completa",
      category: "Barba",
    },
    {
      id: 3,
      image: "/gallery-3.jpg",
      title: "Corte Textured Crop",
      category: "Corte",
    },
    {
      id: 4,
      image: "/gallery-4.jpg",
      title: "Pacote Completo",
      category: "Pacote",
    },
    {
      id: 5,
      image: "/gallery-5.jpg",
      title: "Pompadour Clássico",
      category: "Corte",
    },
  ];

  const categories = ["Todos", ...Array.from(new Set(galleryItems.map((item) => item.category)))];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground" style={{display: 'none'}}>
            Nossa Galeria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada corte é uma obra de arte personalizada para o seu estilo.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  <div className="w-full p-6 text-white translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-semibold text-primary mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center" style={{display: 'none'}}>
          <p className="text-lg text-muted-foreground mb-6">
            Gostou de algum estilo? Agende seu atendimento agora!
          </p>
          <a
            href="https://wa.me/5512991084481?text=Olá,%20gostaria%20de%20agendar%20um%20corte%20premium%20a%20domicílio%20em%20Ilhabela%20com%20a%20BarberGo%20?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-all"
          >
            Agendar via WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition z-10"
              aria-label="Close"
            >
              <X size={24} className="text-black" />
            </button>

            {/* Image */}
            <img
              src={galleryItems.find((item) => item.id === selectedImage)?.image}
              alt="Gallery"
              className="w-full h-auto rounded-lg"
            />

            {/* Image Info */}
            <div className="mt-4 text-white text-center">
              <p className="text-sm text-primary font-semibold">
                {galleryItems.find((item) => item.id === selectedImage)?.category}
              </p>
              <h3 className="text-2xl font-bold">
                {galleryItems.find((item) => item.id === selectedImage)?.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
