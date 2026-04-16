
'use client'

import { useEffect, useState, useRef } from 'react'

const SLIDES = [
  {
    // Luxury resort villa with pool
    src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=85&auto=format&fit=crop',
    position: 'center 55%',
  },
  {
    // Fire camp / bonfire at resort
    src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&q=85&auto=format&fit=crop',
    position: 'center 50%',
  },
  {
    // Tropical resort with lush greenery
    src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=85&auto=format&fit=crop',
    position: 'center 60%',
  },
]

const SLIDE_DURATION = 2500   // ms each slide stays visible
const FADE_DURATION  = 600    // ms crossfade

export default function Hero() {
  const [loaded,   setLoaded]   = useState(false)
  const [current,  setCurrent]  = useState(0)
  const [fading,   setFading]   = useState(false)   // true during crossfade
  const [next,     setNext]     = useState(1)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* initial entrance animation */
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  /* auto-advance slideshow */
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      const nextIdx = (current + 1) % SLIDES.length
      setNext(nextIdx)
      setFading(true)

      setTimeout(() => {
        setCurrent(nextIdx)
        setFading(false)
      }, FADE_DURATION)
    }, SLIDE_DURATION)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [current])

  /* dot navigation */
  const goTo = (idx: number) => {
    if (idx === current || fading) return
    setNext(idx)
    setFading(true)
    setTimeout(() => {
      setCurrent(idx)
      setFading(false)
    }, FADE_DURATION)
  }

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

      {/* ── Slide stack ── */}
      {SLIDES.map((slide, i) => {
        const isCurrent = i === current
        const isNext    = i === next && fading

        return (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-no-repeat scale-105"
            style={{
              backgroundImage:    `url('${slide.src}')`,
              backgroundPosition: slide.position,
              opacity:   isNext ? 1 : isCurrent && fading ? 0 : isCurrent ? 1 : 0,
              transition: `opacity ${FADE_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              zIndex:    isNext ? 2 : isCurrent ? 1 : 0,
            }}
          />
        )
      })}

      {/* ── Layered Overlays ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/25 to-black/75" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      <div className="absolute inset-0 z-10 bg-[#1A2E1A]/15" />

      {/* ── Grain texture overlay ── */}
      <div
        className="absolute inset-0 z-10 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      />

      {/* ── Main Content ── */}
      <div className="relative z-20 text-center text-white px-8 max-w-6xl mx-auto">

        {/* Location tag */}
        <div
          className={`flex items-center justify-center gap-4 mb-10 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <span className="gold-divider" />
          <span
            className="label-tag"
            style={{ fontSize: '0.85rem', letterSpacing: '0.25em' }}
          >
            Kushalnagar · Coorg · Karnataka
          </span>
          <span className="gold-divider" />
        </div>

        {/* Headline */}
        <h1
          className={`text-white transition-all ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '0.35s',
            transitionDuration: '1s',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            fontFamily: 'var(--font-cormorant, serif)',
            fontSize: 'clamp(3rem, 7vw, 6.5rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}
        >
          Where Luxury Meets
          <br />
          <span className="italic" style={{ color: 'var(--gold-light)' }}>
            The Heart of Coorg
          </span>
        </h1>

        {/* Thin gold rule */}
        <div
          className={`flex items-center justify-center gap-5 mt-9 transition-all duration-700 ${
            loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[var(--gold-light,#C9A96E)]" />
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: 'var(--gold-light, #C9A96E)' }}
          />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[var(--gold-light,#C9A96E)]" />
        </div>

        {/* Subtext */}
        <p
          className={`mt-8 text-white/70 leading-relaxed max-w-xl mx-auto transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{
            transitionDelay: '0.55s',
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '1.15rem',
            fontWeight: 300,
            letterSpacing: '0.03em',
          }}
        >
          Luxury cottages nestled in a working coffee estate. 200 metres from
          the highway, a world away from everything else.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-5 mt-12 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.7s' }}
        >
          <a href="#booking" className="btn-gold">
            Reserve Your Stay
          </a>
          <a href="#rooms" className="btn-outline">
            Explore Rooms
          </a>
        </div>
      </div>

      {/* ── Slide Dots ── */}
      <div
        className={`absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 transition-all duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1s' }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width:           i === current ? '28px' : '6px',
              height:          '6px',
              borderRadius:    '3px',
              background:      i === current
                ? 'var(--gold-light, #C9A96E)'
                : 'rgba(255,255,255,0.35)',
              border:          'none',
              cursor:          'pointer',
              padding:         0,
              transition:      'all 0.4s cubic-bezier(0.4,0,0.2,1)',
            }}
          />
        ))}
      </div>

      {/* ── Scroll Indicator ── */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 z-20 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1.1s' }}
      >
        <span
          className="text-white/40"
          style={{
            fontSize:        '0.6rem',
            letterSpacing:   '0.22em',
            textTransform:   'uppercase',
            fontFamily:      'var(--font-dm-sans)',
          }}
        >
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}