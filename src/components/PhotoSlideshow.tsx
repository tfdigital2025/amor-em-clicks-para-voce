
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const PhotoSlideshow = () => {
  // Suas fotos reais do casal - sequência invertida
  const photos = [
    {
      src: "/lovable-uploads/9c95d158-2190-4f7f-a3f4-74dc7ab33749.png",
      caption: "Sorrisos que guardarei pra sempre 🌟"
    },
    {
      src: "/lovable-uploads/c8534bed-be13-4005-9222-55e7d2f179c6.png",
      caption: "Nossas aventuras especiais 😊"
    },
    {
      src: "/lovable-uploads/2a73e674-d220-4098-8ee2-95900a8173dc.png", 
      caption: "Sempre felizes ao seu lado 🥰"
    },
    {
      src: "/lovable-uploads/c8176e5c-a1a4-4938-9c40-11eb2d11654f.png",
      caption: "Momentos únicos juntos 💕"
    }
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [photos.length]);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <Camera size={20} className="text-romantic-rose sm:w-6 sm:h-6" />
        <h2 className="dancing-text text-2xl sm:text-3xl text-romantic-deep">
          Nossas Memórias
        </h2>
      </div>

      <div className="relative aspect-[3/4] max-h-[70vh] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-white/50">
        <div className="relative w-full h-full">
          <img
            src={photos[currentPhotoIndex].src}
            alt={photos[currentPhotoIndex].caption}
            className="w-full h-full object-contain bg-gradient-to-br from-romantic-light to-white transition-all duration-500"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          
          {/* Caption */}
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
            <p className="dancing-text text-white text-base sm:text-xl font-bold text-center drop-shadow-lg">
              {photos[currentPhotoIndex].caption}
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevPhoto}
          className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 
                   bg-white/80 backdrop-blur-sm p-1.5 sm:p-2 rounded-full 
                   shadow-lg hover:bg-white transition-all duration-200"
        >
          <ChevronLeft size={16} className="text-romantic-deep sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={nextPhoto}
          className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 
                   bg-white/80 backdrop-blur-sm p-1.5 sm:p-2 rounded-full 
                   shadow-lg hover:bg-white transition-all duration-200"
        >
          <ChevronRight size={16} className="text-romantic-deep sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Photo indicators */}
      <div className="flex justify-center mt-3 sm:mt-4 gap-1.5 sm:gap-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPhotoIndex(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
              index === currentPhotoIndex
                ? 'bg-romantic-rose shadow-lg'
                : 'bg-romantic-rose/30 hover:bg-romantic-rose/50'
            }`}
          />
        ))}
      </div>

      <div className="mt-3 sm:mt-4 text-center">
        <p className="text-romantic-deep/70 text-xs sm:text-sm">
          📸 Nossas memórias mais especiais!
        </p>
      </div>
    </div>
  );
};

export default PhotoSlideshow;
