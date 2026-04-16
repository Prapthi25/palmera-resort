// 'use client'

// import { useScrollReveal } from '../hooks/Usescrollreveal'

// const testimonials = [
//   {
//     name: 'Priya R.',
//     origin: 'Bangalore',
//     rating: 5,
//     text: 'Walking through the coffee estate in the morning mist was magical. The cottage was spotless, the food was delicious, and the staff went above and beyond. Easily the best resort stay we have had in Coorg.',
//   },
//   {
//     name: 'Arun & Kavya',
//     origin: 'Mysore',
//     rating: 5,
//     text: 'Palm Era felt like a well-kept secret — quiet, immaculately maintained, and surrounded by nature. The complimentary breakfast and campfire in the evening made our anniversary trip truly special.',
//   },
//   {
//     name: 'Rohan M.',
//     origin: 'Hyderabad',
//     rating: 5,
//     text: 'The Deluxe Villa exceeded our expectations in every way. The view from the sit-out, the premium bath amenities, the warmth of the staff — we are already planning our return trip.',
//   },
//   {
//     name: 'Sindhu & Family',
//     origin: 'Chennai',
//     rating: 5,
//     text: 'Took the family for a week-long stay. Kids loved the pool and badminton; we loved the peace and the proximity to Dubare Elephant Camp. Palm Era is a rare gem.',
//   },
// ]

// function Stars({ n }: { n: number }) {
//   return (
//     <div className="flex gap-1">
//       {Array.from({ length: n }).map((_, i) => (
//         <span key={i} style={{ color: 'var(--gold)', fontSize: '0.75rem' }}>★</span>
//       ))}
//     </div>
//   )
// }

// export default function Testimonials() {
//   const ref = useScrollReveal()

//   return (
//     <section id="testimonials" className="section-pad" style={{ background: 'var(--cream-dark)' }}>
//       <div ref={ref} className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <div className="text-center mb-14 space-y-4">
//           <div className="reveal flex items-center justify-center gap-3">
//             <span className="gold-divider" />
//             <span className="label-tag">Guest Stories</span>
//             <span className="gold-divider" />
//           </div>
//           <h2 className="heading-lg reveal reveal-delay-1" style={{ color: 'var(--dark)' }}>
//             Words from Our Guests
//           </h2>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
//           {testimonials.map((t, i) => (
//             <div
//               key={t.name}
//               className={`reveal reveal-delay-${i + 1} flex flex-col p-7 rounded-sm`}
//               style={{
//                 background: 'var(--ivory)',
//                 boxShadow: '0 2px 16px rgba(43,74,43,0.07)',
//                 border: '1px solid rgba(197,149,42,0.1)',
//               }}
//             >
//               {/* Quote mark */}
//               <div
//                 className="font-display mb-4"
//                 style={{ fontSize: '3rem', lineHeight: 1, color: 'var(--gold)', opacity: 0.4 }}
//               >
//                 "
//               </div>

//               <p
//                 className="flex-1 mb-5"
//                 style={{
//                   fontFamily: 'var(--font-dm-sans)',
//                   fontSize: '0.82rem',
//                   color: 'var(--text-muted)',
//                   lineHeight: 1.8,
//                   fontWeight: 300,
//                 }}
//               >
//                 {t.text}
//               </p>

//               <div className="flex items-center justify-between pt-4 border-t border-black/8">
//                 <div>
//                   <p
//                     className="font-display"
//                     style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--dark)' }}
//                   >
//                     {t.name}
//                   </p>
//                   <p
//                     style={{
//                       fontFamily: 'var(--font-dm-sans)',
//                       fontSize: '0.62rem',
//                       color: 'var(--text-muted)',
//                       letterSpacing: '0.1em',
//                       textTransform: 'uppercase',
//                     }}
//                   >
//                     {t.origin}
//                   </p>
//                 </div>
//                 <Stars n={t.rating} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { useScrollReveal } from '../hooks/Usescrollreveal'

const testimonials = [
  {
    name: 'Priya R.',
    origin: 'Bangalore',
    rating: 5,
    text: 'Walking through the coffee estate in the morning mist was magical. The cottage was spotless, the food was delicious, and the staff went above and beyond. Easily the best resort stay we have had in Coorg.',
    stay: 'Cottage Stay',
  },
  {
    name: 'Arun & Kavya',
    origin: 'Mysore',
    rating: 5,
    text: 'Palm Era felt like a well-kept secret — quiet, immaculately maintained, and surrounded by nature. The complimentary breakfast and campfire in the evening made our anniversary trip truly special.',
    stay: 'Anniversary Trip',
  },
  {
    name: 'Rohan M.',
    origin: 'Hyderabad',
    rating: 5,
    text: 'The Deluxe Villa exceeded our expectations in every way. The view from the sit-out, the premium bath amenities, the warmth of the staff — we are already planning our return trip.',
    stay: 'Deluxe Villa',
  },
  {
    name: 'Sindhu & Family',
    origin: 'Chennai',
    rating: 5,
    text: 'Took the family for a week-long stay. Kids loved the pool and badminton; we loved the peace and the proximity to Dubare Elephant Camp. Palm Era is a rare gem.',
    stay: 'Family Week',
  },
]

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} style={{ color: 'var(--gold)', fontSize: '0.7rem', lineHeight: 1 }}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useScrollReveal()

  return (
    <>
      <style>{`
        @keyframes tmFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes tmFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes tmFloat {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50%       { transform: translateY(-8px) rotate(-6deg); }
        }

        .tm-section {
          position: relative;
          overflow: hidden;
          background: var(--cream-dark);
        }

        /* Large decorative background text */
        .tm-bg-word {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-display, serif);
          font-size: clamp(8rem, 18vw, 18rem);
          font-weight: 700;
          font-style: italic;
          color: transparent;
          -webkit-text-stroke: 1px rgba(43,74,43,0.06);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.04em;
          line-height: 1;
        }

        /* Floating quote decoration */
        .tm-float-quote {
          position: absolute;
          top: 6%;
          right: 6%;
          font-family: var(--font-display, serif);
          font-size: 22rem;
          line-height: 1;
          color: rgba(197,149,42,0.05);
          pointer-events: none;
          user-select: none;
          animation: tmFloat 9s ease-in-out infinite;
        }

        .tm-inner {
          position: relative;
          z-index: 1;
        }

        /* ── Label ── */
        .tm-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-dm-sans);
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
          animation: tmFadeIn 0.8s ease both;
        }
        .tm-label-line {
          display: block;
          width: 32px;
          height: 1px;
          background: var(--gold);
          opacity: 0.5;
        }

        /* ── Heading ── */
        .tm-heading {
          font-family: var(--font-display, serif);
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 300;
          color: var(--dark);
          letter-spacing: -0.01em;
          line-height: 1.15;
          animation: tmFadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both;
          animation-delay: 0.15s;
        }

        /* ── Stats row ── */
        .tm-stats {
          display: flex;
          align-items: center;
          gap: 2rem;
          justify-content: center;
          animation: tmFadeIn 1s ease both;
          animation-delay: 0.35s;
        }
        .tm-stat-divider {
          width: 1px;
          height: 28px;
          background: rgba(43,74,43,0.15);
        }
        .tm-stat-number {
          font-family: var(--font-display, serif);
          font-size: 1.8rem;
          font-weight: 300;
          color: var(--dark);
          line-height: 1;
        }
        .tm-stat-label {
          font-family: var(--font-dm-sans);
          font-size: 0.58rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 400;
          margin-top: 3px;
        }

        /* ── Card grid ── */
        .tm-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border: 1px solid rgba(197,149,42,0.12);
        }

        /* ── Card ── */
        .tm-card {
          display: flex;
          flex-direction: column;
          padding: 2.2rem 1.8rem;
          background: var(--ivory);
          border-right: 1px solid rgba(197,149,42,0.1);
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease, transform 0.3s ease;
          animation: tmFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both;
          cursor: default;
        }
        .tm-card:last-child {
          border-right: none;
        }
        .tm-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 3px;
          background: linear-gradient(to right, var(--gold), transparent);
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .tm-card:hover {
          background: #fffdf7;
        }
        .tm-card:hover::before {
          opacity: 1;
        }

        /* Stay tag */
        .tm-stay-tag {
          display: inline-block;
          font-family: var(--font-dm-sans);
          font-size: 0.56rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold);
          border: 1px solid rgba(197,149,42,0.3);
          padding: 3px 9px;
          border-radius: 1px;
          margin-bottom: 1.5rem;
          font-weight: 500;
          width: fit-content;
        }

        /* Opening quote */
        .tm-open-quote {
          font-family: var(--font-display, serif);
          font-size: 4.5rem;
          line-height: 0.6;
          color: var(--gold);
          opacity: 0.22;
          margin-bottom: 1rem;
          display: block;
          font-style: italic;
        }

        /* Quote text */
        .tm-text {
          font-family: var(--font-dm-sans);
          font-size: 0.83rem;
          color: var(--text-muted);
          line-height: 1.85;
          font-weight: 300;
          flex: 1;
        }

        /* Footer */
        .tm-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1.8rem;
          padding-top: 1.2rem;
          border-top: 1px solid rgba(43,74,43,0.08);
        }
        .tm-name {
          font-family: var(--font-display, serif);
          font-size: 1rem;
          font-weight: 500;
          color: var(--dark);
          line-height: 1.2;
          letter-spacing: 0.01em;
        }
        .tm-origin {
          font-family: var(--font-dm-sans);
          font-size: 0.58rem;
          color: var(--text-muted);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-top: 3px;
        }

        /* Decorative index number */
        .tm-index {
          position: absolute;
          bottom: 1.2rem;
          right: 1.4rem;
          font-family: var(--font-display, serif);
          font-size: 4rem;
          font-weight: 700;
          color: rgba(43,74,43,0.04);
          line-height: 1;
          user-select: none;
          pointer-events: none;
          font-style: italic;
        }

        /* ── Bottom strip ── */
        .tm-strip {
          margin-top: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          animation: tmFadeIn 1.2s ease both;
          animation-delay: 0.5s;
        }
        .tm-strip-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-dm-sans);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 400;
        }
        .tm-strip-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--gold);
          opacity: 0.6;
        }
        .tm-strip-divider {
          width: 1px;
          height: 16px;
          background: rgba(43,74,43,0.15);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .tm-grid { grid-template-columns: repeat(2, 1fr); }
          .tm-card:nth-child(2) { border-right: none; }
          .tm-card:nth-child(1),
          .tm-card:nth-child(2) { border-bottom: 1px solid rgba(197,149,42,0.1); }
        }
        @media (max-width: 640px) {
          .tm-grid { grid-template-columns: 1fr; }
          .tm-card { border-right: none; border-bottom: 1px solid rgba(197,149,42,0.1); }
          .tm-card:last-child { border-bottom: none; }
          .tm-stats { gap: 1.2rem; }
        }
      `}</style>

      <section id="testimonials" className="tm-section section-pad">
        {/* Decorative background word */}
        <div className="tm-bg-word" aria-hidden>Guests</div>
        {/* Floating large quote */}
        <div className="tm-float-quote" aria-hidden>"</div>

        <div ref={ref} className="tm-inner max-w-7xl mx-auto px-4 sm:px-6">

          {/* ── Header ── */}
          <div className="text-center mb-14">
            <div className="tm-label justify-center mb-5">
              <span className="tm-label-line" />
              Guest Stories
              <span className="tm-label-line" />
            </div>
            <h2 className="tm-heading mb-8">
              Words from Our Guests
            </h2>

            {/* Stats */}
            <div className="tm-stats">
              <div className="text-center">
                <div className="tm-stat-number">4.9</div>
                <div className="tm-stat-label">Avg Rating</div>
              </div>
              <div className="tm-stat-divider" />
              <div className="text-center">
                <div className="tm-stat-number">500+</div>
                <div className="tm-stat-label">Happy Guests</div>
              </div>
              <div className="tm-stat-divider" />
              <div className="text-center">
                <div className="tm-stat-number">100%</div>
                <div className="tm-stat-label">Would Return</div>
              </div>
            </div>
          </div>

          {/* ── Cards ── */}
          <div className="tm-grid">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="tm-card"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                {/* Stay tag */}
                <span className="tm-stay-tag">{t.stay}</span>

                {/* Opening quote */}
                <span className="tm-open-quote" aria-hidden>"</span>

                {/* Text */}
                <p className="tm-text">{t.text}</p>

                {/* Footer */}
                <div className="tm-footer">
                  <div>
                    <div className="tm-name">{t.name}</div>
                    <div className="tm-origin">{t.origin}</div>
                  </div>
                  <Stars n={t.rating} />
                </div>

                {/* Ghost index */}
                <span className="tm-index" aria-hidden>{String(i + 1).padStart(2, '0')}</span>
              </div>
            ))}
          </div>

          {/* ── Bottom trust strip ── */}
          <div className="tm-strip">
            {['Verified Guest Reviews', 'No Paid Promotions', 'Google & Booking.com Rated'].map((item, i, arr) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div className="tm-strip-item">
                  <span className="tm-strip-dot" />
                  {item}
                </div>
                {i < arr.length - 1 && <div className="tm-strip-divider" />}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}