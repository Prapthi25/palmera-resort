'use client'

import { useScrollReveal } from '../hooks/Usescrollreveal'

const stats = [
  { value: '4', label: 'Room Types' },
  { value: '900m', label: 'Above Sea Level' },
  { value: '5 min', label: 'From Nisargadhama' },
  { value: '24/7', label: 'Room Service' },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="section-pad bg-[#1A1A12] text-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image collage */}
          <div className="reveal relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=85"
                alt="Palm Era Coorg resort exterior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A12]/40 to-transparent" />
            </div>

            {/* Floating inset */}
            <div
              className="absolute -bottom-6 -right-4 w-2/5 aspect-square rounded-sm overflow-hidden border-4 border-[#1A1A12]"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=85"
                alt="Coffee estate view"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gold accent bar */}
            <div
              className="absolute top-8 -left-3 w-1 h-24"
              style={{ background: 'var(--gold)' }}
            />
          </div>

          {/* Right: Text */}
          <div className="lg:pl-8 space-y-7">
            <div className="reveal">
              <span className="label-tag block mb-3">Our Story</span>
              <div className="gold-divider" />
            </div>

            <h2 className="heading-lg text-white reveal reveal-delay-1">
              Hidden in a Coffee Estate.{' '}
              <span className="italic" style={{ color: 'var(--gold-light)' }}>
                Found by the Soul.
              </span>
            </h2>

            <p
              className="text-white/60 leading-relaxed reveal reveal-delay-2"
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, lineHeight: 1.8 }}
            >
              Just 200 metres from the highway, yet a world apart — Palm Era
              Coorg is a boutique retreat cradled within a working coffee estate
              laced with pepper vines and orange groves. Coorg's mist-wrapped
              hills, the fragrance of spice, and a silence broken only by birdsong
              await you here.
            </p>

            <p
              className="text-white/60 leading-relaxed reveal reveal-delay-2"
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, lineHeight: 1.8 }}
            >
              Perched at 900 metres above sea level, the climate is pleasantly
              cool year-round. Whether you seek a rejuvenating weekend or a
              week-long immersion in nature, Palm Era offers the perfect balance
              of modern comfort and untouched wilderness.
            </p>

            <div className="reveal reveal-delay-3">
              <a href="#booking" className="btn-gold">
                Plan Your Escape
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-white/10 reveal reveal-delay-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="font-display text-white"
                    style={{ fontSize: '1.6rem', fontWeight: 500, color: 'var(--gold-light)' }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-white/40 mt-1"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}