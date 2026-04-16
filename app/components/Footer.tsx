'use client'

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Rooms', href: '/#rooms' },
  { label: 'Amenities', href: '/#amenities' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark)' }} className="text-white">

      {/* Top strip */}
      <div
        className="py-3 text-center"
        style={{ background: 'var(--gold)', fontFamily: 'var(--font-dm-sans)', fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#fff' }}
      >
        📞 Best Price Guaranteed When You Book Direct · +91 97407 96989
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <span
                className="font-display block text-white"
                style={{ fontSize: '1.6rem', fontWeight: 400, letterSpacing: '0.04em' }}
              >
                Palm Era
              </span>
              <span
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}
              >
                Coorg
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.8,
                fontWeight: 300,
                maxWidth: '22rem',
              }}
            >
              A boutique nature retreat nestled in a coffee estate in the heart
              of Coorg, Karnataka — where luxury and wilderness coexist.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '1.25rem',
              }}
            >
              Quick Links
            </p>
            <ul className="space-y-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.45)',
                      fontWeight: 300,
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Snippet */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '1.25rem',
              }}
            >
              Contact
            </p>
            <div
              className="space-y-3"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300, lineHeight: 1.7 }}
            >
              <p>Sunnadakere Road, Guddehosur,<br />Kushalnagar, Karnataka 571234</p>
              <p>
                <a href="tel:+919740796989" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  +91 97407 96989
                </a>
              </p>
              <p>
                <a href="mailto:reservations@palmeracoorg.com" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  reservations@palmeracoorg.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.06em' }}>
            © {new Date().getFullYear()} Palm Era Coorg. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.06em' }}>
            Sunnadakere Road · Kushalnagar · Madikeri · Karnataka
          </p>
        </div>
      </div>
    </footer>
  )
}