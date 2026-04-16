'use client'

import { useScrollReveal } from '../hooks/Usescrollreveal'

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" className="section-pad" style={{ background: 'var(--cream)' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="reveal flex items-center justify-center gap-3">
            <span className="gold-divider" />
            <span className="label-tag">Get in Touch</span>
            <span className="gold-divider" />
          </div>
          <h2 className="heading-lg reveal reveal-delay-1" style={{ color: 'var(--dark)' }}>
            Find Us in Coorg
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-8 reveal">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-sm"
                  style={{ background: 'var(--forest)', fontSize: '1rem' }}
                >
                  📍
                </div>
                <div>
                  <p
                    className="font-display mb-1"
                    style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--dark)' }}
                  >
                    Address
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    Sunnadakere Road, Guddehosur,
                    <br />Kushalnagar, Madikeri,
                    <br />Karnataka 571234
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-sm"
                  style={{ background: 'var(--forest)', fontSize: '1rem' }}
                >
                  📞
                </div>
                <div>
                  <p
                    className="font-display mb-1"
                    style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--dark)' }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+919740796989"
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.9rem',
                      color: 'var(--forest)',
                      fontWeight: 400,
                    }}
                  >
                    +91 97407 96989
                  </a>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2 }}>
                    For Bookings & Enquiries
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-sm"
                  style={{ background: 'var(--forest)', fontSize: '1rem' }}
                >
                  ✉️
                </div>
                <div>
                  <p
                    className="font-display mb-1"
                    style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--dark)' }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:reservations@palmeracoorg.com"
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.82rem',
                      color: 'var(--forest)',
                      fontWeight: 300,
                      display: 'block',
                    }}
                  >
                    reservations@palmeracoorg.com
                  </a>
                  <a
                    href="mailto:palmeracoorg@gmail.com"
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.82rem',
                      color: 'var(--forest)',
                      fontWeight: 300,
                      display: 'block',
                      marginTop: 2,
                    }}
                  >
                    palmeracoorg@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-sm"
                  style={{ background: 'var(--forest)', fontSize: '1rem' }}
                >
                  🕐
                </div>
                <div>
                  <p
                    className="font-display mb-1"
                    style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--dark)' }}
                  >
                    Check-in / Check-out
                  </p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 300 }}>
                    Check-in: 12:00 Noon · Check-out: 11:00 AM
                  </p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2 }}>
                    Flexible timings on request
                  </p>
                </div>
              </div>
            </div>

            <a href="#booking" className="btn-gold inline-flex">
              Book a Room
            </a>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 reveal reveal-delay-2">
            <div className="relative rounded-sm overflow-hidden" style={{ boxShadow: '0 8px 40px rgba(43,74,43,0.15)' }}>
              <iframe
                title="Palm Era Coorg Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5082506734294!2d75.97239!3d12.45889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba510a95e8e8b2f%3A0x2f46b94c7dc63ba0!2sPalm%20Era%20Cottages!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}