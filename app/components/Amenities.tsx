// 'use client'

// import { useScrollReveal } from '../hooks/Usescrollreveal'

// const amenities = [
//   { icon: '🌊', label: 'Swimming Pool' },
//   { icon: '🍳', label: 'Restaurant & Room Service' },
//   { icon: '🥐', label: 'Complimentary Breakfast' },
//   { icon: '📶', label: 'Free Wi-Fi' },
//   { icon: '🚗', label: 'Free Parking' },
//   { icon: '🔥', label: 'Camp-fire on Demand' },
//   { icon: '🥩', label: 'Barbecue Nights' },
//   { icon: '🎾', label: 'Badminton Court' },
//   { icon: '🏓', label: 'Table Tennis' },
//   { icon: '🌿', label: 'Spacious Gardens' },
//   { icon: '♨️', label: '24/7 Hot Water' },
//   { icon: '🧳', label: 'Travel Desk' },
//   { icon: '☕', label: 'Tea & Coffee Maker' },
//   { icon: '🚿', label: 'Daily Housekeeping' },
//   { icon: '🕐', label: 'Flexible Check-in/out' },
//   { icon: '🚌', label: 'Airport Pickup (on request)' },
// ]

// const nearby = [
//   { distance: '5 min', place: 'Nisargadhama Deer Park' },
//   { distance: '15 min', place: 'Harangi Dam' },
//   { distance: '17 min', place: 'Dubare Elephant Camp' },
//   { distance: '18 min', place: 'Golden Temple (Bylakuppe)' },
//   { distance: '18 min', place: 'Chiklihole Dam' },
// ]

// export default function Amenities() {
//   const ref = useScrollReveal()

//   return (
//     <section id="amenities" className="section-pad" style={{ background: 'var(--forest)' }}>
//       <div ref={ref} className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <div className="text-center mb-16 space-y-4">
//           <div className="reveal flex items-center justify-center gap-3">
//             <span className="gold-divider" />
//             <span className="label-tag" style={{ color: 'var(--gold-light)' }}>What We Offer</span>
//             <span className="gold-divider" />
//           </div>
//           <h2 className="heading-lg text-white reveal reveal-delay-1">
//             Amenities & Experiences
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

//           {/* Amenities Grid */}
//           <div className="lg:col-span-2">
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
//               {amenities.map((a, i) => (
//                 <div
//                   key={a.label}
//                   className={`reveal reveal-delay-${(i % 4) + 1} flex flex-col items-center gap-3 p-5 text-center group`}
//                   style={{ background: 'var(--forest)', transition: 'background 0.25s ease' }}
//                   onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--forest-light)')}
//                   onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--forest)')}
//                 >
//                   <span style={{ fontSize: '1.6rem' }}>{a.icon}</span>
//                   <span
//                     style={{
//                       fontFamily: 'var(--font-dm-sans)',
//                       fontSize: '0.65rem',
//                       letterSpacing: '0.08em',
//                       textTransform: 'uppercase',
//                       color: 'rgba(255,255,255,0.65)',
//                       fontWeight: 400,
//                       lineHeight: 1.4,
//                     }}
//                   >
//                     {a.label}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Nearby Attractions */}
//           <div className="reveal reveal-delay-2">
//             <h3
//               className="font-display text-white mb-6"
//               style={{ fontSize: '1.5rem', fontWeight: 400 }}
//             >
//               Nearby Attractions
//             </h3>
//             <div className="space-y-0 border-t border-white/10">
//               {nearby.map((n) => (
//                 <div
//                   key={n.place}
//                   className="flex items-center justify-between py-4 border-b border-white/10"
//                 >
//                   <span
//                     style={{
//                       fontFamily: 'var(--font-dm-sans)',
//                       fontSize: '0.82rem',
//                       color: 'rgba(255,255,255,0.7)',
//                       fontWeight: 300,
//                     }}
//                   >
//                     {n.place}
//                   </span>
//                   <span
//                     style={{
//                       fontFamily: 'var(--font-dm-sans)',
//                       fontSize: '0.65rem',
//                       color: 'var(--gold-light)',
//                       letterSpacing: '0.1em',
//                       fontWeight: 500,
//                     }}
//                   >
//                     {n.distance}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Season info */}
//             <div
//               className="mt-8 p-5 rounded-sm"
//               style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
//             >
//               <h4
//                 className="font-display text-white mb-2"
//                 style={{ fontSize: '1.1rem', fontWeight: 400 }}
//               >
//                 Best Time to Visit
//               </h4>
//               <p
//                 style={{
//                   fontFamily: 'var(--font-dm-sans)',
//                   fontSize: '0.78rem',
//                   color: 'rgba(255,255,255,0.55)',
//                   lineHeight: 1.7,
//                   fontWeight: 300,
//                 }}
//               >
//                 Peak season runs April–December. The climate at 900m is pleasant year-round.
//                 Carry warm clothes for chilly winter nights (Nov–Jan).
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

import { useScrollReveal } from '../hooks/Usescrollreveal'

const amenities = [
  { icon: '🌊', label: 'Swimming Pool' },
  { icon: '🍳', label: 'Restaurant & Room Service' },
  { icon: '🥐', label: 'Complimentary Breakfast' },
  { icon: '📶', label: 'Free Wi-Fi' },
  { icon: '🚗', label: 'Free Parking' },
  { icon: '🔥', label: 'Camp-fire on Demand' },
  { icon: '🥩', label: 'Barbecue Nights' },
  { icon: '🎾', label: 'Badminton Court' },
  { icon: '🏓', label: 'Table Tennis' },
  { icon: '🌿', label: 'Spacious Gardens' },
  { icon: '♨️', label: '24/7 Hot Water' },
  { icon: '🧳', label: 'Travel Desk' },
  { icon: '☕', label: 'Tea & Coffee Maker' },
  { icon: '🚿', label: 'Daily Housekeeping' },
  { icon: '🕐', label: 'Flexible Check-in/out' },
  { icon: '🚌', label: 'Airport Pickup (on request)' },
]

const nearby = [
  { distance: '5 min', place: 'Nisargadhama Deer Park' },
  { distance: '15 min', place: 'Harangi Dam' },
  { distance: '17 min', place: 'Dubare Elephant Camp' },
  { distance: '18 min', place: 'Golden Temple (Bylakuppe)' },
  { distance: '18 min', place: 'Chiklihole Dam' },
]

/* Featured amenities get a larger spotlight card */
const featured = amenities.slice(0, 2)
const rest = amenities.slice(2)

export default function Amenities() {
  const ref = useScrollReveal()

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes lineDraw {
          from { height: 0; }
          to   { height: 100%; }
        }

        .am-section {
          position: relative;
          overflow: hidden;
          background: var(--forest);
        }

        /* Radial glow behind the hero area */
        .am-section::before {
          content: '';
          position: absolute;
          top: -10%;
          left: 50%;
          transform: translateX(-50%);
          width: 80vw;
          height: 60vh;
          background: radial-gradient(ellipse at center, rgba(180,140,60,0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* Grain overlay */
        .am-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          pointer-events: none;
          z-index: 0;
        }

        .am-inner {
          position: relative;
          z-index: 1;
        }

        /* ── Label tag ── */
        .am-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-dm-sans);
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold-light);
          font-weight: 500;
          animation: fadeIn 0.8s ease both;
          animation-delay: 0.1s;
        }
        .am-label-line {
          display: block;
          width: 36px;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--gold-light));
        }
        .am-label-line.right {
          background: linear-gradient(to left, transparent, var(--gold-light));
        }

        /* ── Section heading ── */
        .am-heading {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 300;
          color: #fff;
          letter-spacing: -0.01em;
          line-height: 1.1;
          animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both;
          animation-delay: 0.2s;
        }
        .am-heading em {
          font-style: italic;
          background: linear-gradient(135deg, var(--gold-light) 30%, #e8c97a 70%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        /* ── Bento grid ── */
        .am-bento {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: auto;
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.05);
        }

        /* Featured cards: 2-col wide */
        .am-card-featured {
          grid-column: span 2;
          padding: 2.2rem 1.8rem;
          display: flex;
          align-items: flex-end;
          gap: 1.2rem;
          background: var(--forest);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: background 0.3s ease;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .am-card-featured::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 2px;
          background: linear-gradient(to right, var(--gold-light), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .am-card-featured:hover {
          background: rgba(255,255,255,0.03);
        }
        .am-card-featured:hover::before {
          opacity: 1;
        }
        .am-card-featured-icon {
          font-size: 2.4rem;
          line-height: 1;
          flex-shrink: 0;
        }
        .am-card-featured-label {
          font-family: var(--font-display, serif);
          font-size: 1.25rem;
          font-weight: 300;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.01em;
          line-height: 1.2;
        }

        /* Regular amenity card */
        .am-card {
          padding: 1.5rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.7rem;
          text-align: center;
          background: var(--forest);
          transition: background 0.25s ease;
          cursor: default;
          position: relative;
        }
        .am-card:hover {
          background: rgba(255,255,255,0.035);
        }
        .am-card:hover .am-card-dot {
          opacity: 1;
        }
        .am-card-dot {
          position: absolute;
          bottom: 10px; right: 10px;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--gold-light);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .am-card-icon {
          font-size: 1.5rem;
          line-height: 1;
        }
        .am-card-label {
          font-family: var(--font-dm-sans);
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          font-weight: 400;
          line-height: 1.5;
        }

        /* Animate each card */
        .am-card, .am-card-featured {
          animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both;
        }

        /* ── Right column ── */
        .am-right {
          animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both;
          animation-delay: 0.3s;
        }

        /* Section sub-label */
        .am-sub-label {
          font-family: var(--font-dm-sans);
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold-light);
          font-weight: 500;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .am-sub-label::before {
          content: '';
          display: block;
          width: 18px;
          height: 1px;
          background: var(--gold-light);
          opacity: 0.6;
        }

        /* ── Timeline ── */
        .am-timeline {
          position: relative;
          padding-left: 1.5rem;
        }
        .am-timeline-line {
          position: absolute;
          left: 5px;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background: linear-gradient(to bottom, var(--gold-light), transparent);
        }
        .am-timeline-item {
          position: relative;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding: 0.85rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .am-timeline-item:last-child {
          border-bottom: none;
        }
        .am-timeline-dot {
          position: absolute;
          left: -1.5rem;
          top: 50%;
          transform: translateY(-50%);
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: 1px solid var(--gold-light);
          background: var(--forest);
          box-shadow: 0 0 0 3px rgba(180,140,60,0.12);
        }
        .am-timeline-place {
          font-family: var(--font-dm-sans);
          font-size: 0.82rem;
          color: rgba(255,255,255,0.72);
          font-weight: 300;
          flex: 1;
          padding-right: 1rem;
        }
        .am-timeline-badge {
          font-family: var(--font-dm-sans);
          font-size: 0.58rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--forest, #0d2010);
          background: var(--gold-light);
          padding: 3px 8px;
          border-radius: 2px;
          white-space: nowrap;
          font-weight: 600;
        }

        /* ── Season card ── */
        .am-season {
          margin-top: 1.8rem;
          padding: 1.6rem;
          border: 1px solid rgba(255,255,255,0.08);
          position: relative;
          background: rgba(255,255,255,0.02);
        }
        .am-season::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 40px; height: 2px;
          background: var(--gold-light);
          opacity: 0.7;
        }
        .am-season-title {
          font-family: var(--font-display, serif);
          font-size: 1.05rem;
          font-weight: 300;
          color: rgba(255,255,255,0.9);
          margin-bottom: 0.6rem;
          letter-spacing: 0.02em;
        }
        .am-season-text {
          font-family: var(--font-dm-sans);
          font-size: 0.78rem;
          color: rgba(255,255,255,0.48);
          line-height: 1.75;
          font-weight: 300;
        }
        .am-season-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 1rem;
        }
        .am-season-pill {
          font-family: var(--font-dm-sans);
          font-size: 0.58rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 4px 10px;
          border-radius: 1px;
        }
        .am-season-pill.highlight {
          color: var(--gold-light);
          border-color: rgba(180,140,60,0.3);
          background: rgba(180,140,60,0.06);
        }

        /* ── Count badge ── */
        .am-count {
          font-family: var(--font-display, serif);
          font-size: 6rem;
          font-weight: 300;
          color: rgba(255,255,255,0.03);
          line-height: 1;
          position: absolute;
          top: -1rem;
          right: 0;
          pointer-events: none;
          user-select: none;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .am-layout { flex-direction: column; }
          .am-right { animation-delay: 0.5s; }
        }
        @media (max-width: 640px) {
          .am-bento { grid-template-columns: repeat(2, 1fr); }
          .am-card-featured { grid-column: span 1; }
          .am-card-featured-label { font-size: 1rem; }
        }
      `}</style>

      <section id="amenities" className="am-section section-pad">
        <div ref={ref} className="am-inner max-w-7xl mx-auto px-4 sm:px-6">

          {/* ── Header ── */}
          <div className="text-center mb-16 relative">
            <span className="am-count">16</span>
            <div className="am-label justify-center mb-4">
              <span className="am-label-line" />
              What We Offer
              <span className="am-label-line right" />
            </div>
            <h2 className="am-heading">
              Amenities &amp; <em>Experiences</em>
            </h2>
          </div>

          {/* ── Main layout ── */}
          <div
            className="am-layout"
            style={{
              display: 'flex',
              gap: '3rem',
              alignItems: 'flex-start',
            }}
          >
            {/* Left: Bento grid */}
            <div style={{ flex: '1 1 60%', minWidth: 0 }}>
              <div className="am-bento">
                {/* Featured row */}
                {featured.map((a, i) => (
                  <div
                    key={a.label}
                    className="am-card-featured"
                    style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                  >
                    <span className="am-card-featured-icon">{a.icon}</span>
                    <span className="am-card-featured-label">{a.label}</span>
                  </div>
                ))}

                {/* Regular cards */}
                {rest.map((a, i) => (
                  <div
                    key={a.label}
                    className="am-card"
                    style={{ animationDelay: `${0.2 + i * 0.04}s` }}
                  >
                    <span className="am-card-icon">{a.icon}</span>
                    <span className="am-card-label">{a.label}</span>
                    <span className="am-card-dot" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Nearby + Season */}
            <div className="am-right" style={{ flex: '0 0 300px' }}>
              {/* Nearby */}
              <div className="am-sub-label">Nearby Attractions</div>
              <div className="am-timeline">
                <div className="am-timeline-line" />
                {nearby.map((n) => (
                  <div key={n.place} className="am-timeline-item">
                    <span className="am-timeline-dot" />
                    <span className="am-timeline-place">{n.place}</span>
                    <span className="am-timeline-badge">{n.distance}</span>
                  </div>
                ))}
              </div>

              {/* Season */}
              <div className="am-season">
                <div className="am-season-title">Best Time to Visit</div>
                <p className="am-season-text">
                  Peak season runs April–December. At 900 m elevation the climate
                  is pleasant year-round — carry warm layers for chilly winter nights.
                </p>
                <div className="am-season-pills">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
                    <span
                      key={m}
                      className={`am-season-pill ${['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].includes(m) ? 'highlight' : ''}`}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}