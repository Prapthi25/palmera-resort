'use client'

import { useState } from 'react'
import { useScrollReveal } from '../hooks/Usescrollreveal'

const images = [
  { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80', alt: 'Misty Coorg hills', span: 'md:col-span-2 md:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80', alt: 'Resort pool', span: '' },
  { src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?w=600&q=80', alt: 'Nature trail', span: '' },
  { src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80', alt: 'Coffee estate', span: '' },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80', alt: 'Room interior', span: '' },
  { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80', alt: 'Restaurant', span: '' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Sunset hills', span: 'md:col-span-2' },
  { src: 'https://images.unsplash.com/photo-1475688621402-4257c812d6db?w=600&q=80', alt: 'Garden path', span: '' },
]

export default function Gallery() {
  const ref = useScrollReveal()
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section id="gallery" className="section-pad" style={{ background: 'var(--ivory)' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="reveal flex items-center justify-center gap-3">
            <span className="gold-divider" />
            <span className="label-tag">Visual Journey</span>
            <span className="gold-divider" />
          </div>
          <h2 className="heading-lg reveal reveal-delay-1" style={{ color: 'var(--dark)' }}>
            Through the Lens
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              fontWeight: 300,
              maxWidth: '36rem',
              margin: '0 auto',
            }}
          >
            Every corner of Palm Era tells a story of nature and luxury entwined.
          </p>
        </div>

        {/* Masonry Grid */}
        <div
          className="reveal grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-3"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden cursor-pointer group rounded-sm ${img.span}`}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(26,26,18,0.75) 0%, transparent 60%)' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    color: '#fff',
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    fontWeight: 400,
                  }}
                >
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Gallery fullscreen"
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
            style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}
          />
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  )
}