'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


const links = [
  { label: 'About', href: '/about' },
  { label: 'Rooms', href: '/#rooms' },
  { label: 'Amenities', href: '/#amenities' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState('')
  const pathname = usePathname()

  /* entrance */
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* active section tracking */
  useEffect(() => {
    if (pathname !== '/') {
      setActive(pathname.slice(1)) // e.g., 'about'
      return
    }

    const ids = links.filter(l => l.href.includes('#')).map(l => l.href.split('#')[1])
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { threshold: 0.35 }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [pathname])

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
          } ${scrolled
            ? 'py-3 bg-[#12120C]/92 backdrop-blur-xl shadow-[0_1px_0_rgba(201,169,110,0.15),0_8px_32px_rgba(0,0,0,0.45)]'
            : 'py-6 bg-transparent'
          }`}
      >
        {/* thin gold top-border that appears on scroll */}
        <div
          className="absolute top-0 left-0 right-0 h-px transition-opacity duration-700"
          style={{
            background: 'linear-gradient(90deg, transparent, #C9A96E 30%, #C9A96E 70%, transparent)',
            opacity: scrolled ? 0.6 : 0,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="overflow-hidden transition-all duration-500"
              style={{
                padding: scrolled ? '2px 4px' : '3px 5px',
                background: 'rgba(255,255,255,0.92)',
              }}
            >
              <Image
                src="https://res.cloudinary.com/dk05wqwo1/image/upload/q_auto/f_auto/v1775755634/palm_era_logo_sjl38s.png"
                alt="Palm Era Coorg"
                width={120}
                height={44}
                className="object-contain transition-all duration-500"
                style={{ height: scrolled ? '36px' : '44px', width: 'auto' }}
                priority
              />
            </div>

            <div className="flex flex-col leading-none">
              <span
                className="text-white transition-all duration-500"
                style={{
                  fontFamily: 'var(--font-cormorant, serif)',
                  fontSize: scrolled ? '1.2rem' : '1.35rem',
                  fontWeight: 400,
                  letterSpacing: '0.06em',
                }}
              >
                Palm Era
              </span>
              <span
                style={{
                  color: '#C9A96E',
                  fontSize: '0.58rem',
                  letterSpacing: '0.38em',
                  marginTop: '3px',
                  fontFamily: 'var(--font-dm-sans)',
                  textTransform: 'uppercase',
                }}
              >
                Coorg
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l, i) => {
              const linkHash = l.href.includes('#') ? l.href.split('#')[1] : l.href.slice(1)
              const isActive = active === linkHash
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative group py-1 transition-colors duration-300 ${isActive ? 'text-[#C9A96E]' : 'text-white/75 hover:text-white'
                    }`}
                  style={{
                    fontSize: '0.67rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-dm-sans)',
                  }}
                >
                  {l.label}
                  {/* animated underline */}
                  <span
                    className="absolute bottom-0 left-0 h-px"
                    style={{
                      background: 'linear-gradient(90deg, #C9A96E, #E8C97A)',
                      width: isActive ? '100%' : '0%',
                      transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1)',
                    }}
                  />
                  <span
                    className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full"
                    style={{
                      background: 'rgba(201,169,110,0.5)',
                      transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
                      display: isActive ? 'none' : 'block',
                    }}
                  />
                </Link>
              )
            })}

            {/* vertical divider */}
            <div className="w-px h-5 bg-white/15" />

            <Link
              href="/#booking"
              className="btn-gold"
            >
              Book Now
            </Link>
          </nav>

          {/* ── Mobile Hamburger ── */}
          <button
            className="md:hidden flex flex-col justify-center items-end gap-[5px] w-10 h-10"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span
              className="block h-px bg-white transition-all duration-400 origin-right"
              style={{
                width: menuOpen ? '24px' : '24px',
                transform: menuOpen ? 'rotate(-45deg) translateY(0px)' : 'none',
                transformOrigin: 'right center',
              }}
            />
            <span
              className="block h-px bg-[#C9A96E] transition-all duration-300"
              style={{
                width: '16px',
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)',
              }}
            />
            <span
              className="block h-px bg-white transition-all duration-400 origin-right"
              style={{
                width: menuOpen ? '24px' : '20px',
                transform: menuOpen ? 'rotate(45deg) translateY(0px)' : 'none',
                transformOrigin: 'right center',
              }}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-500"
        style={{
          background: 'rgba(10,10,8,0.7)',
          backdropFilter: menuOpen ? 'blur(4px)' : 'blur(0px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
        onClick={close}
      />

      {/* Drawer panel */}
      <div
        className="fixed top-0 right-0 bottom-0 z-50 md:hidden flex flex-col"
        style={{
          width: 'min(320px, 85vw)',
          background: 'linear-gradient(160deg, #1A1A10 0%, #12120A 60%, #0E0E08 100%)',
          borderLeft: '1px solid rgba(201,169,110,0.15)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: menuOpen ? '-12px 0 40px rgba(0,0,0,0.6)' : 'none',
        }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-7 pt-7 pb-6 border-b border-white/8">
          <div className="flex flex-col">
            <span style={{ fontFamily: 'var(--font-cormorant, serif)', fontSize: '1.25rem', color: '#fff', fontWeight: 400, letterSpacing: '0.06em' }}>
              Palm Era
            </span>
            <span style={{ color: '#C9A96E', fontSize: '0.55rem', letterSpacing: '0.38em', marginTop: '3px', fontFamily: 'var(--font-dm-sans)' }}>
              COORG
            </span>
          </div>
          <button
            onClick={close}
            className="w-9 h-9 flex items-center justify-center"
            style={{ border: '1px solid rgba(201,169,110,0.25)', color: 'rgba(255,255,255,0.6)' }}
            aria-label="Close menu"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" strokeWidth="1.5" />
              <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col px-7 pt-8 gap-1 flex-1">
          {links.map((l, i) => {
            const linkHash = l.href.includes('#') ? l.href.split('#')[1] : l.href.slice(1)
            const isActive = active === linkHash
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="flex items-center gap-4 py-4 group"
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
                  transition: `opacity 0.4s ease ${0.15 + i * 0.07}s, transform 0.4s ease ${0.15 + i * 0.07}s`,
                  textDecoration: 'none',
                }}
              >
                <span
                  className="h-px transition-all duration-300"
                  style={{
                    width: isActive ? '20px' : '10px',
                    background: isActive ? '#C9A96E' : 'rgba(255,255,255,0.2)',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    color: isActive ? '#C9A96E' : 'rgba(255,255,255,0.65)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-dm-sans)',
                    transition: 'color 0.2s',
                  }}
                >
                  {l.label}
                </span>
              </Link>
            )
          })}
        </nav>

        {/* Drawer CTA */}
        <div
          className="px-7 pb-10 pt-6"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.4s ease 0.55s, transform 0.4s ease 0.55s',
          }}
        >
          {/* decorative gold rule */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[rgba(201,169,110,0.3)]" />
            <div className="w-1 h-1 rounded-full bg-[#C9A96E] opacity-60" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[rgba(201,169,110,0.3)]" />
          </div>
          <Link
            href="/#booking"
            onClick={close}
            className="btn-gold w-full justify-center"
          >
            Reserve Your Stay
          </Link>
          <p
            className="text-center mt-4"
            style={{
              color: 'rgba(255,255,255,0.25)',
              fontSize: '0.58rem',
              letterSpacing: '0.12em',
              fontFamily: 'var(--font-dm-sans)',
            }}
          >
            Kushalnagar · Coorg · Karnataka
          </p>
        </div>
      </div>
    </>
  )
}