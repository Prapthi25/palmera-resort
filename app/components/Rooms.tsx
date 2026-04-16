'use client'

import { useScrollReveal } from '../hooks/Usescrollreveal'

const rooms = [
  {
    name: 'Deluxe Room',
    tag: 'Most Popular',
    price: '₹4,500',
    unit: 'per night',
    description:
      'Spacious air-conditioned rooms with modern furnishings, garden-facing windows, and warm earthy interiors that bring the outdoors in.',
    features: ['King Bed', 'Garden View', 'En-suite Bath', 'Tea & Coffee'],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=85',
  },
  {
    name: 'Standard Cottage',
    tag: 'Private & Cosy',
    price: '₹5,500',
    unit: 'per night',
    description:
      'A standalone cottage enveloped in greenery — your own private sanctuary with a sit-out verandah and views of the coffee estate.',
    features: ['Private Verandah', 'Estate View', 'Bathtub', 'Complimentary Breakfast'],
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=700&q=85',
  },
  {
    name: 'Deluxe Villa',
    tag: 'Premium Experience',
    price: '₹8,000',
    unit: 'per night',
    description:
      'The pinnacle of Palm Era luxury. Expansive interiors, a private sit-out, premium bath amenities, and panoramic views of the misty Western Ghats.',
    features: ['Suite Layout', 'Panoramic View', 'Rain Shower', 'Minibar + Butler'],
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=700&q=85',
  },
  {
    name: 'Premium Room',
    tag: 'New Addition',
    price: '₹6,500',
    unit: 'per night',
    description:
      'Thoughtfully designed for comfort seekers — premium bedding, contemporary décor, and the tranquil sounds of the estate at your window.',
    features: ['Queen Bed', 'Nature View', 'Work Desk', 'Premium Toiletries'],
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=700&q=85',
  },
]

export default function Rooms() {
  const ref = useScrollReveal()

  return (
    <section id="rooms" className="section-pad" style={{ background: 'var(--cream)' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="reveal flex items-center justify-center gap-3">
            <span className="gold-divider" />
            <span className="label-tag">Accommodation</span>
            <span className="gold-divider" />
          </div>
          <h2 className="heading-lg reveal reveal-delay-1" style={{ color: 'var(--dark)' }}>
            Rooms & Cottages
          </h2>
          <p
            className="reveal reveal-delay-2 max-w-xl mx-auto"
            style={{
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 300,
              lineHeight: 1.8,
              fontSize: '0.95rem',
            }}
          >
            Four distinct ways to experience Coorg — each thoughtfully crafted to offer privacy,
            comfort, and an intimate connection with nature.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {rooms.map((room, i) => (
            <div
              key={room.name}
              className={`reveal reveal-delay-${i + 1} group flex flex-col bg-white overflow-hidden rounded-sm`}
              style={{
                boxShadow: '0 4px 24px rgba(43,74,43,0.08)',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(43,74,43,0.16)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(43,74,43,0.08)'
              }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A12]/40 to-transparent" />
                {/* Tag */}
                <span
                  className="absolute top-4 left-4 px-3 py-1"
                  style={{
                    background: 'var(--gold)',
                    color: '#fff',
                    fontSize: '0.6rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 500,
                  }}
                >
                  {room.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 space-y-3">
                <div>
                  <h3
                    className="font-display text-[#1A1A12]"
                    style={{ fontSize: '1.4rem', fontWeight: 500 }}
                  >
                    {room.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span
                      style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--gold)' }}
                    >
                      {room.price}
                    </span>
                    <span
                      style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}
                    >
                      {room.unit}
                    </span>
                  </div>
                </div>

                <p
                  className="flex-1"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {room.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5">
                  {room.features.map((f) => (
                    <span
                      key={f}
                      className="px-2 py-1"
                      style={{
                        background: 'var(--cream)',
                        color: 'var(--forest)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-dm-sans)',
                        fontWeight: 500,
                        borderRadius: '2px',
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#booking"
                  className="btn-gold w-full justify-center mt-2"
                  style={{ fontSize: '0.65rem', padding: '0.7rem 1rem' }}
                >
                  Book This Room
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}