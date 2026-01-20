import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Upload } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';

// Placeholder photos - these would be replaced with actual uploaded photos
const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
    alt: 'Sample photo 1',
    caption: 'Conference presentation',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=600&fit=crop',
    alt: 'Sample photo 2',
    caption: 'Lab work',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop',
    alt: 'Sample photo 3',
    caption: 'Research equipment',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop',
    alt: 'Sample photo 4',
    caption: 'Computational visualization',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop',
    alt: 'Sample photo 5',
    caption: 'Technology',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=600&fit=crop',
    alt: 'Sample photo 6',
    caption: 'Science visualization',
  },
];

const PhotosSection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (photo: typeof photos[0], index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  return (
    <section id="photos" className="section-container">
      <div className="animate-fade-up">
        <h2 className="section-title flex items-center gap-3">
          <Camera className="text-primary" size={32} />
          Photos
        </h2>
        <p className="section-subtitle">
          Moments captured from conferences, labs, and life
        </p>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-up stagger-1">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="photo-grid-item"
            onClick={() => openLightbox(photo, index)}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <p className="text-white text-sm font-medium">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Upload prompt */}
      <div className="mt-8 p-8 border-2 border-dashed border-border rounded-xl text-center animate-fade-up stagger-2">
        <Upload className="mx-auto mb-4 text-muted-foreground" size={32} />
        <p className="text-muted-foreground">
          Photos can be uploaded and managed through the site admin
        </p>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => closeLightbox()}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none shadow-none">
          <div className="lightbox-overlay" onClick={closeLightbox}>
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/50 text-foreground hover:bg-background/80 transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/50 text-foreground hover:bg-background/80 transition-colors"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/50 text-foreground hover:bg-background/80 transition-colors"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image */}
            {selectedPhoto && (
              <div 
                className="relative flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedPhoto.src.replace('w=600&h=600', 'w=1200&h=1200')}
                  alt={selectedPhoto.alt}
                  className="lightbox-image"
                />
                {selectedPhoto.caption && (
                  <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-center">{selectedPhoto.caption}</p>
                  </div>
                )}
                {/* Dot indicators - below caption */}
                <div className="flex gap-2 mt-4">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(index);
                        setSelectedPhoto(photos[index]);
                      }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-primary' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PhotosSection;
