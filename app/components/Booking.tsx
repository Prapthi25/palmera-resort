'use client'

import { useState } from 'react'
import { useScrollReveal } from '../hooks/Usescrollreveal'

// ─── Firebase Integration ────────────────────────────────────────────────────
// 1. npm install firebase
// 2. Create /lib/firebase.ts with your Firebase config
// 3. Replace the TODO below:
//
//    import { db } from '@/lib/firebase'
//    import { collection, addDoc, Timestamp } from 'firebase/firestore'
//
//    await addDoc(collection(db, 'bookings'), {
//      ...formData,
//      createdAt: Timestamp.now(),
//      status: 'pending',
//    })
// ─────────────────────────────────────────────────────────────────────────────

interface FormData {
  name: string
  phone: string
  email: string
  checkin: string
  checkout: string
  adults: string
  children: string
  roomType: string
  message: string
}

const roomTypes = ['Deluxe Room', 'Standard Cottage', 'Deluxe Villa', 'Premium Room']

export default function Booking() {
  const ref = useScrollReveal()
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', email: '',
    checkin: '', checkout: '',
    adults: '2', children: '0',
    roomType: 'Deluxe Room', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault()
    if (!form.name || !form.phone || !form.checkin || !form.checkout) {
      alert('Please fill in all required fields.')
      return
    }
    setStatus('sending')

    try {
      // TODO: Replace with Firebase write (see instructions above)
      console.log('Booking data:', form)
      await new Promise((r) => setTimeout(r, 1200)) // simulate async
      setStatus('success')
      setForm({ name: '', phone: '', email: '', checkin: '', checkout: '', adults: '2', children: '0', roomType: 'Deluxe Room', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const labelStyle = {
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '0.62rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    color: 'rgba(255,255,255,0.5)',
    display: 'block',
    marginBottom: '6px',
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '2px',
    padding: '0.75rem 1rem',
    color: '#fff',
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '0.85rem',
    fontWeight: 300,
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  return (
    <section id="booking" className="section-pad" style={{ background: 'var(--dark-soft)' }}>
      <div ref={ref} className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="reveal flex items-center justify-center gap-3">
            <span className="gold-divider" />
            <span className="label-tag" style={{ color: 'var(--gold-light)' }}>Reservations</span>
            <span className="gold-divider" />
          </div>
          <h2 className="heading-lg text-white reveal reveal-delay-1">
            Reserve Your Stay
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300, maxWidth: '30rem', margin: '0 auto' }}
          >
            Fill in your details and we will confirm your booking within a few hours.
            Or call us directly at{' '}
            <a href="tel:+919740796989" style={{ color: 'var(--gold-light)' }}>
              +91 97407 96989
            </a>
            .
          </p>
        </div>

        {/* Form */}
        {status === 'success' ? (
          <div
            className="text-center py-16 reveal"
            style={{ border: '1px solid rgba(197,149,42,0.3)', borderRadius: '4px' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌿</div>
            <h3 className="heading-md text-white mb-3">Booking Request Received</h3>
            <p style={{ fontFamily: 'var(--font-dm-sans)', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>
              We will reach out to confirm your reservation shortly.
            </p>
            <button className="btn-gold mt-6" onClick={() => setStatus('idle')}>
              Make Another Booking
            </button>
          </div>
        ) : (
          <div
            className="reveal reveal-delay-1 p-8 md:p-12 rounded-sm"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                />
              </div>

              {/* Phone */}
              <div>
                <label style={labelStyle}>Phone Number *</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                />
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email Address</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                />
              </div>

              {/* Room Type */}
              <div>
                <label style={labelStyle}>Room Type</label>
                <select name="roomType" value={form.roomType} onChange={handleChange} style={inputStyle}>
                  {roomTypes.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>

              {/* Check-in */}
              <div>
                <label style={labelStyle}>Check-in Date *</label>
                <input name="checkin" type="date" value={form.checkin} onChange={handleChange} style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                />
              </div>

              {/* Check-out */}
              <div>
                <label style={labelStyle}>Check-out Date *</label>
                <input name="checkout" type="date" value={form.checkout} onChange={handleChange} style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                />
              </div>

              {/* Adults */}
              <div>
                <label style={labelStyle}>Adults</label>
                <select name="adults" value={form.adults} onChange={handleChange} style={inputStyle}>
                  {['1','2','3','4','5','6'].map((n) => <option key={n} value={n}>{n} Adult{n !== '1' ? 's' : ''}</option>)}
                </select>
              </div>

              {/* Children */}
              <div>
                <label style={labelStyle}>Children</label>
                <select name="children" value={form.children} onChange={handleChange} style={inputStyle}>
                  {['0','1','2','3','4'].map((n) => <option key={n} value={n}>{n} {n === '0' ? '(none)' : `Child${n !== '1' ? 'ren' : ''}`}</option>)}
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label style={labelStyle}>Special Requests (optional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any dietary needs, room preferences, or special occasions..."
                  rows={3}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
              <button
                className="btn-gold"
                onClick={handleSubmit}
                disabled={status === 'sending'}
                style={{ opacity: status === 'sending' ? 0.7 : 1, minWidth: '180px', justifyContent: 'center' }}
              >
                {status === 'sending' ? 'Sending...' : 'Request Booking'}
              </button>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>
                We will confirm via phone or email within 2–4 hours.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}