// 'use client'

// import { useEffect, useRef } from 'react'

// const splashImages = [
//   {
//     src: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1200&q=85',
//     alt: 'Misty Coorg hills at dawn',
//     tag: 'Kodagu, Karnataka',
//     headline: 'Where mist meets mountain.',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200&q=85',
//     alt: 'Ancient forest canopy',
//     tag: 'Western Ghats',
//     headline: 'Canopies older than memory.',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=85',
//     alt: 'Coffee plantation rows',
//     tag: 'Coffee Country',
//     headline: 'Born in a coffee estate.',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85',
//     alt: 'Waterfall in forest',
//     tag: 'Nature\'s Stage',
//     headline: 'Rivers begin here.',
//   },
// ]

// const seasons = [
//   {
//     icon: '☀',
//     period: 'Apr – Oct',
//     label: 'Peak Season',
//     note: 'Warm days, cool evenings. Maximum bloom.',
//     accent: '#C9A84C',
//   },
//   {
//     icon: '🌧',
//     period: 'Jun – Sep',
//     label: 'Monsoon',
//     note: 'Dramatic rainfall. The estate turns electric green.',
//     accent: '#4A7C59',
//   },
//   {
//     icon: '❄',
//     period: 'Nov – Jan',
//     label: 'Winter',
//     note: 'Crisp nights. Carry a shawl — worth every star.',
//     accent: '#5B7FA6',
//   },
// ]

// export default function DiscoverPalmEra() {
//   const parallaxRefs = useRef([])
//   const revealRefs = useRef([])

//   useEffect(() => {
//     const handleScroll = () => {
//       const y = window.scrollY
//       parallaxRefs.current.forEach((el) => {
//         if (el) el.style.transform = `translateY(${y * 0.18}px)`
//       })

//       revealRefs.current.forEach((el) => {
//         if (!el) return
//         const rect = el.getBoundingClientRect()
//         if (rect.top < window.innerHeight * 0.88) {
//           el.classList.add('is-visible')
//         }
//       })
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true })
//     handleScroll()
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const addReveal = (el) => {
//     if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
//   }

//   return (
//     <>
//       <style>{`
//         .dpe-reveal {
//           opacity: 0;
//           transform: translateY(32px);
//           transition: opacity 0.8s cubic-bezier(.22,1,.36,1), transform 0.8s cubic-bezier(.22,1,.36,1);
//         }
//         .dpe-reveal.is-visible {
//           opacity: 1;
//           transform: none;
//         }
//         .dpe-reveal-d1 { transition-delay: 0.1s; }
//         .dpe-reveal-d2 { transition-delay: 0.22s; }
//         .dpe-reveal-d3 { transition-delay: 0.36s; }
//         .dpe-reveal-d4 { transition-delay: 0.5s; }

//         .splash-card {
//           position: relative;
//           overflow: hidden;
//           cursor: default;
//         }
//         .splash-card img {
//           transition: transform 1.2s cubic-bezier(.22,1,.36,1);
//         }
//         .splash-card:hover img {
//           transform: scale(1.06);
//         }
//         .splash-tag {
//           font-family: var(--font-dm-sans, sans-serif);
//           letter-spacing: 0.14em;
//           font-size: 0.6rem;
//           text-transform: uppercase;
//           font-weight: 400;
//         }
//         .season-card {
//           border: 1px solid rgba(255,255,255,0.08);
//           transition: border-color 0.3s ease, transform 0.3s ease;
//         }
//         .season-card:hover {
//           border-color: rgba(201,168,76,0.4);
//           transform: translateY(-4px);
//         }
//         .gold-dot {
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           background: #C9A84C;
//           flex-shrink: 0;
//         }
//       `}</style>

//       <section
//         id="discover"
//         style={{
//           background: '#0F0F0A',
//           color: '#fff',
//           fontFamily: 'var(--font-dm-sans, sans-serif)',
//         }}
//       >
//         {/* ── HERO STRIP ── */}
//         <div
//           style={{
//             position: 'relative',
//             height: '92vh',
//             minHeight: 540,
//             overflow: 'hidden',
//             display: 'flex',
//             alignItems: 'flex-end',
//           }}
//         >
//           <div
//             ref={(el) => (parallaxRefs.current[0] = el)}
//             style={{ position: 'absolute', inset: '-10% 0', zIndex: 0 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=85"
//               alt="Coorg valley panorama"
//               style={{ width: '100%', height: '110%', objectFit: 'cover' }}
//             />
//             <div
//               style={{
//                 position: 'absolute',
//                 inset: 0,
//                 background:
//                   'linear-gradient(to top, #0F0F0A 8%, rgba(15,15,10,0.55) 55%, rgba(15,15,10,0.2) 100%)',
//               }}
//             />
//           </div>

//           <div
//             style={{
//               position: 'relative',
//               zIndex: 2,
//               maxWidth: 900,
//               margin: '0 auto',
//               padding: '0 1.5rem 5rem',
//               width: '100%',
//             }}
//           >
//             <p
//               className="splash-tag"
//               style={{ color: '#C9A84C', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: 10 }}
//             >
//               <span className="gold-dot" />
//               Discover Palm Era — Coorg, India
//             </p>
//             <h1
//               style={{
//                 fontFamily: 'Georgia, "Times New Roman", serif',
//                 fontSize: 'clamp(2.6rem, 6vw, 5.2rem)',
//                 fontWeight: 400,
//                 lineHeight: 1.1,
//                 letterSpacing: '-0.01em',
//                 margin: '0 0 1.5rem',
//               }}
//             >
//               India's finest secret.<br />
//               <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Cradled in the Ghats.</em>
//             </h1>
//             <p
//               style={{
//                 color: 'rgba(255,255,255,0.55)',
//                 maxWidth: 520,
//                 lineHeight: 1.75,
//                 fontSize: '1rem',
//                 fontWeight: 300,
//               }}
//             >
//               Coorg — or Kodagu — is a living tapestry of coffee estates, spice
//               groves, ancient rivers and mist-wrapped summits. Come once; return
//               forever.
//             </p>
//           </div>
//         </div>

//         {/* ── ABOUT COORG: PULL QUOTES ── */}
//         <div
//           style={{
//             maxWidth: 1200,
//             margin: '0 auto',
//             padding: '6rem 1.5rem 4rem',
//           }}
//         >
//           <div
//             ref={addReveal}
//             className="dpe-reveal"
//             style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: 12 }}
//           >
//             <div style={{ width: 40, height: 1, background: '#C9A84C' }} />
//             <span
//               className="splash-tag"
//               style={{ color: '#C9A84C' }}
//             >
//               About Coorg
//             </span>
//           </div>

//           <h2
//             ref={addReveal}
//             className="dpe-reveal dpe-reveal-d1"
//             style={{
//               fontFamily: 'Georgia, serif',
//               fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
//               fontWeight: 400,
//               lineHeight: 1.2,
//               maxWidth: 700,
//               marginBottom: '4rem',
//             }}
//           >
//             Time stands still in Coorg —<br />
//             <em style={{ color: 'rgba(255,255,255,0.45)', fontStyle: 'italic' }}>
//               nature breathes it alive.
//             </em>
//           </h2>

//           {/* Three-column highlights */}
//           <div
//             style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
//               gap: '3rem',
//             }}
//           >
//             {[
//               {
//                 num: '01',
//                 title: 'Land of the Cauvery',
//                 body: 'The sacred Cauvery river finds its origin in Coorgs peaks — a landscape revered for millennia.',
//               },
//               {
//                 num: '02',
//                 title: 'Spice & Coffee',
//                 body: 'Winding roads draped in coffee blossom and pepper vine. Every breath is an aroma.',
//               },
//               {
//                 num: '03',
//                 title: 'Fort, Forest & Faith',
//                 body: 'A monastery, a fort, cascading falls — history and wilderness share the same valley.',
//               },
//             ].map((item, i) => (
//               <div
//                 key={item.num}
//                 ref={addReveal}
//                 className={`dpe-reveal dpe-reveal-d${i + 1}`}
//                 style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}
//               >
//                 <span
//                   style={{
//                     fontFamily: 'Georgia, serif',
//                     fontSize: '0.75rem',
//                     color: '#C9A84C',
//                     letterSpacing: '0.1em',
//                     display: 'block',
//                     marginBottom: '0.75rem',
//                   }}
//                 >
//                   {item.num}
//                 </span>
//                 <h3
//                   style={{
//                     fontFamily: 'Georgia, serif',
//                     fontSize: '1.15rem',
//                     fontWeight: 400,
//                     marginBottom: '0.6rem',
//                   }}
//                 >
//                   {item.title}
//                 </h3>
//                 <p
//                   style={{
//                     color: 'rgba(255,255,255,0.45)',
//                     fontWeight: 300,
//                     lineHeight: 1.75,
//                     fontSize: '0.9rem',
//                   }}
//                 >
//                   {item.body}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ── SPLASH IMAGE GRID ── */}
//         <div
//           style={{
//             maxWidth: 1200,
//             margin: '2rem auto 0',
//             padding: '0 1.5rem',
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gridTemplateRows: 'auto auto',
//             gap: '1rem',
//           }}
//         >
//           {splashImages.map((img, i) => (
//             <div
//               key={img.alt}
//               ref={addReveal}
//               className={`dpe-reveal splash-card dpe-reveal-d${(i % 4) + 1}`}
//               style={{
//                 borderRadius: 4,
//                 aspectRatio: i === 0 ? '16/10' : i === 3 ? '16/10' : '4/3',
//                 gridColumn: i === 0 ? '1 / 3' : 'auto',
//               }}
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
//               />
//               <div
//                 style={{
//                   position: 'absolute',
//                   inset: 0,
//                   background: 'linear-gradient(to top, rgba(15,15,10,0.8) 0%, transparent 55%)',
//                 }}
//               />
//               <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '1.5rem' }}>
//                 <p className="splash-tag" style={{ color: '#C9A84C', marginBottom: '0.4rem' }}>
//                   {img.tag}
//                 </p>
//                 <p
//                   style={{
//                     fontFamily: 'Georgia, serif',
//                     fontSize: i === 0 ? '1.5rem' : '1.1rem',
//                     fontWeight: 400,
//                     lineHeight: 1.2,
//                     margin: 0,
//                   }}
//                 >
//                   {img.headline}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ── SEASONS STRIP ── */}
//         <div
//           style={{
//             maxWidth: 1200,
//             margin: '0 auto',
//             padding: '7rem 1.5rem 5rem',
//           }}
//         >
//           <div
//             ref={addReveal}
//             className="dpe-reveal"
//             style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: 12 }}
//           >
//             <div style={{ width: 40, height: 1, background: '#C9A84C' }} />
//             <span className="splash-tag" style={{ color: '#C9A84C' }}>
//               Seasons in Coorg
//             </span>
//           </div>

//           <h2
//             ref={addReveal}
//             className="dpe-reveal dpe-reveal-d1"
//             style={{
//               fontFamily: 'Georgia, serif',
//               fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
//               fontWeight: 400,
//               marginBottom: '3rem',
//               maxWidth: 560,
//             }}
//           >
//             900m above sea level.{' '}
//             <em style={{ color: 'rgba(255,255,255,0.4)' }}>Always pleasant.</em>
//           </h2>

//           <div
//             style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
//               gap: '1.25rem',
//             }}
//           >
//             {seasons.map((s, i) => (
//               <div
//                 key={s.label}
//                 ref={addReveal}
//                 className={`dpe-reveal dpe-reveal-d${i + 1} season-card`}
//                 style={{
//                   background: 'rgba(255,255,255,0.03)',
//                   borderRadius: 6,
//                   padding: '2rem 1.75rem',
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: '1.5rem',
//                     marginBottom: '1rem',
//                     lineHeight: 1,
//                   }}
//                 >
//                   {s.icon}
//                 </div>
//                 <p
//                   style={{
//                     fontFamily: 'Georgia, serif',
//                     fontSize: '0.75rem',
//                     color: s.accent,
//                     letterSpacing: '0.12em',
//                     textTransform: 'uppercase',
//                     marginBottom: '0.35rem',
//                   }}
//                 >
//                   {s.period}
//                 </p>
//                 <h3
//                   style={{
//                     fontFamily: 'Georgia, serif',
//                     fontSize: '1.2rem',
//                     fontWeight: 400,
//                     marginBottom: '0.65rem',
//                   }}
//                 >
//                   {s.label}
//                 </h3>
//                 <p
//                   style={{
//                     color: 'rgba(255,255,255,0.45)',
//                     fontSize: '0.88rem',
//                     lineHeight: 1.7,
//                     fontWeight: 300,
//                     margin: 0,
//                   }}
//                 >
//                   {s.note}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Fine-print tip */}
//           <p
//             ref={addReveal}
//             className="dpe-reveal dpe-reveal-d4"
//             style={{
//               marginTop: '2.5rem',
//               color: 'rgba(255,255,255,0.3)',
//               fontSize: '0.78rem',
//               letterSpacing: '0.06em',
//               borderLeft: '2px solid #C9A84C',
//               paddingLeft: '1rem',
//               maxWidth: 480,
//               lineHeight: 1.7,
//             }}
//           >
//             Peak tourist season runs April to December. Weekends draw visitors from
//             Bangalore — plan ahead. Pack a warm layer for November–January nights.
//           </p>
//         </div>

//         {/* ── CTA FULL-BLEED ── */}
//         <div
//           style={{
//             position: 'relative',
//             overflow: 'hidden',
//             height: 420,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             textAlign: 'center',
//           }}
//         >
//           <div
//             ref={(el) => (parallaxRefs.current[1] = el)}
//             style={{ position: 'absolute', inset: '-12% 0', zIndex: 0 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=85"
//               alt="Palm Era resort at dusk"
//               style={{ width: '100%', height: '120%', objectFit: 'cover' }}
//             />
//             <div
//               style={{
//                 position: 'absolute',
//                 inset: 0,
//                 background: 'rgba(15,15,10,0.68)',
//               }}
//             />
//           </div>

//           <div style={{ position: 'relative', zIndex: 2, padding: '0 1.5rem' }}>
//             <p className="splash-tag" style={{ color: '#C9A84C', marginBottom: '1rem' }}>
//               5 minutes from Nisargadhama
//             </p>
//             <h2
//               style={{
//                 fontFamily: 'Georgia, serif',
//                 fontSize: 'clamp(1.8rem, 4vw, 3rem)',
//                 fontWeight: 400,
//                 marginBottom: '2rem',
//                 lineHeight: 1.2,
//               }}
//             >
//               Your estate awaits.
//             </h2>
//             <a
//               href="#booking"
//               style={{
//                 display: 'inline-block',
//                 border: '1px solid #C9A84C',
//                 color: '#C9A84C',
//                 padding: '0.85rem 2.5rem',
//                 fontSize: '0.75rem',
//                 letterSpacing: '0.16em',
//                 textTransform: 'uppercase',
//                 textDecoration: 'none',
//                 fontFamily: 'var(--font-dm-sans, sans-serif)',
//                 transition: 'background 0.3s, color 0.3s',
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = '#C9A84C'
//                 e.currentTarget.style.color = '#0F0F0A'
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = 'transparent'
//                 e.currentTarget.style.color = '#C9A84C'
//               }}
//             >
//               Reserve Your Stay
//             </a>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }



'use client'

import { useEffect, useRef } from 'react'

const seasons = [
  {
    tag: 'Peak Season',
    period: 'Apr – Dec',
    icon: '☀',
    headline: 'When Coorg Comes Alive',
    body: 'The estate hums with colour, birdsong, and harvest energy. Book early — weekends fill fast.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    accent: '#C9A84C',
  },
  {
    tag: 'Winter Nights',
    period: 'Nov – Jan',
    icon: '❄',
    headline: 'Cool Mist, Warm Fires',
    body: 'Nights turn deliciously chilly at 900 m. Pack a layer — mornings reward you with pristine fog.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=85',
    accent: '#8EC5D6',
  },
  {
    tag: 'Always Pleasant',
    period: 'Year-Round',
    icon: '🌿',
    headline: 'A Climate Like No Other',
    body: 'Elevation keeps the air cool and crisp every month. Nature\'s air-conditioning, perfected.',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=900&q=85',
    accent: '#7AAF72',
  },
]

const splashImages = [
  {
    src: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1200&q=90',
    label: 'Coorg Highlands',
  },
  {
    src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=90',
    label: 'Morning Mist',
  },
  {
    src: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&q=90',
    label: 'Forest Walk',
  },
]

export default function DiscoverPalmEra() {
  const parallaxRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!parallaxRef.current) return
      const y = window.scrollY * 0.35
      parallaxRef.current.style.transform = `translateY(${y}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('.d-reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('d-visible')),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <style>{`
        :root {
          --gold: #C9A84C;
          --gold-light: #E2C77A;
          --dark: #0F0F0A;
          --dark-2: #1A1A12;
          --dark-3: #22221A;
        }
        .d-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.75s ease, transform 0.75s ease; }
        .d-visible { opacity: 1; transform: none; }
        .d-d1.d-visible { transition-delay: 0.12s; }
        .d-d2.d-visible { transition-delay: 0.24s; }
        .d-d3.d-visible { transition-delay: 0.36s; }

        .hero-discover {
          position: relative; height: 92vh; min-height: 600px;
          overflow: hidden; display: flex; align-items: flex-end;
          background: #0F0F0A;
        }
        .hero-bg {
          position: absolute; inset: -15%;
          background-image: url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1800&q=90');
          background-size: cover; background-position: center 30%; will-change: transform;
        }
        .hero-vignette {
          position: absolute; inset: 0;
          background: linear-gradient(to top, #0F0F0A 0%, rgba(15,15,10,0.55) 45%, rgba(15,15,10,0.1) 100%);
        }
        .hero-content { position: relative; z-index: 2; padding: 0 6vw 7vh; max-width: 860px; }

        .discover-tag {
          font-family: 'DM Sans', sans-serif; font-size: 0.65rem;
          letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold); display: inline-block; margin-bottom: 1rem;
        }
        .gold-line { width: 48px; height: 1px; background: var(--gold); margin: 0.5rem 0 1.5rem; }

        .display-xl {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(3rem, 7vw, 6.5rem); font-weight: 300; line-height: 1.05; color: #fff; letter-spacing: -0.01em;
        }
        .display-xl em { font-style: italic; color: var(--gold-light); }

        .section-dark { background: var(--dark-2); color: #fff; padding: 6rem 6vw; }
        .section-darker { background: var(--dark); color: #fff; padding: 6rem 6vw; }

        .section-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 4vw, 3.4rem); font-weight: 300; color: #fff; line-height: 1.15;
        }
        .section-heading em { font-style: italic; color: var(--gold-light); }
        .body-text { font-family: 'DM Sans', sans-serif; font-weight: 300; line-height: 1.85; color: rgba(255,255,255,0.55); max-width: 52ch; }

        .splash-grid { display: grid; grid-template-columns: 1.6fr 1fr; grid-template-rows: auto auto; gap: 6px; margin-top: 3.5rem; }
        .splash-grid .cell-main { grid-row: 1 / 3; }
        .splash-cell { position: relative; overflow: hidden; border-radius: 2px; }
        .splash-cell img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.7s ease; }
        .splash-cell:hover img { transform: scale(1.04); }
        .cell-label {
          position: absolute; bottom: 0.8rem; left: 1rem;
          font-family: 'DM Sans', sans-serif; font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(255,255,255,0.7); background: rgba(0,0,0,0.35); padding: 0.3rem 0.6rem;
          backdrop-filter: blur(4px); border-radius: 1px;
        }
        .cell-main { height: 540px; }
        .cell-sm { height: 267px; }

        .season-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-top: 3.5rem; }
        .season-card { position: relative; overflow: hidden; height: 520px; }
        .season-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s ease; filter: brightness(0.55); }
        .season-card:hover img { transform: scale(1.06); filter: brightness(0.7); }
        .season-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,10,6,0.92) 0%, transparent 55%); }
        .season-body { position: absolute; bottom: 0; left: 0; right: 0; padding: 2rem 1.6rem; }
        .season-icon { font-size: 1.6rem; margin-bottom: 0.8rem; display: block; }
        .season-period { font-family: 'DM Sans', sans-serif; font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 0.5rem; }
        .season-heading { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.55rem; font-weight: 400; color: #fff; line-height: 1.2; margin-bottom: 0.75rem; }
        .season-text { font-family: 'DM Sans', sans-serif; font-size: 0.82rem; font-weight: 300; line-height: 1.7; color: rgba(255,255,255,0.55); }
        .season-divider { width: 32px; height: 1px; margin: 0.75rem 0; }

        .elev-strip {
          background: var(--dark-3); border-top: 1px solid rgba(201,168,76,0.15); border-bottom: 1px solid rgba(201,168,76,0.15);
          padding: 3.5rem 6vw; display: flex; align-items: center; gap: 6vw; overflow: hidden;
        }
        .elev-number {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(4rem, 10vw, 9rem); font-weight: 300; color: var(--gold);
          line-height: 1; white-space: nowrap; flex-shrink: 0; opacity: 0.18;
        }
        .elev-text { border-left: 1px solid rgba(201,168,76,0.3); padding-left: 4vw; }



        .proximity-row { display: flex; gap: 3rem; margin-top: 3rem; flex-wrap: wrap; }
        .prox-item { display: flex; flex-direction: column; }
        .prox-value { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 2.2rem; font-weight: 300; color: var(--gold-light); line-height: 1; }
        .prox-label { font-family: 'DM Sans', sans-serif; font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-top: 0.3rem; }

        @media (max-width: 768px) {
          .splash-grid { grid-template-columns: 1fr; }
          .splash-grid .cell-main { grid-row: auto; }
          .cell-main, .cell-sm { height: 280px; }
          .season-grid { grid-template-columns: 1fr; }
          .season-card { height: 380px; }
          .elev-strip { flex-direction: column; align-items: flex-start; gap: 1.5rem; }
          .elev-text { border-left: none; border-top: 1px solid rgba(201,168,76,0.3); padding-left: 0; padding-top: 1.5rem; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero-discover">
        <div className="hero-bg" ref={parallaxRef} />
        <div className="hero-vignette" />
        <div className="hero-content">
          <p className="discover-tag d-reveal">Discover</p>
          <div className="gold-line d-reveal" />
          <h1 className="display-xl d-reveal d-d1">
            Palm Era,<br /><em>Kushalnagar.</em>
          </h1>
          <p className="d-reveal d-d2" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: 'rgba(255,255,255,0.55)', marginTop: '1.2rem', fontSize: '1rem', lineHeight: 1.75, maxWidth: '46ch' }}>
            200 metres from the highway. A world away from everything else.
          </p>
        </div>
      </section>

      {/* ELEVATION STRIP */}
      <div className="elev-strip">
        <div className="elev-number">900m</div>
        <div className="elev-text">
          <p className="discover-tag">Elevation</p>
          <p className="section-heading d-reveal" style={{ fontSize: '1.7rem' }}>
            Pleasantly cool.<br /><em>All year long.</em>
          </p>
          <p className="body-text d-reveal d-d1" style={{ marginTop: '0.8rem', fontSize: '0.88rem' }}>
            Perched high in the Western Ghats, Palm Era enjoys a rare microclimate —
            crisp mornings, temperate afternoons, and evenings made for open verandas.
          </p>
          <div className="proximity-row d-reveal d-d2">
            {[
              { v: '5 min', l: 'from Nisargadhama' },
              { v: '200m', l: 'from highway' },
              { v: '3 hr', l: 'from Bengaluru' },
            ].map((p) => (
              <div key={p.l} className="prox-item">
                <span className="prox-value">{p.v}</span>
                <span className="prox-label">{p.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SPLASH GRID */}
      <section className="section-darker" style={{ paddingBottom: 0 }}>
        <div className="d-reveal">
          <span className="discover-tag">The Landscape</span>
          <div className="gold-line" />
        </div>
        <div className="d-reveal d-d1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 className="section-heading">Coffee, Pepper &amp; <em>Open Sky.</em></h2>
          <p className="body-text" style={{ maxWidth: '36ch', fontSize: '0.85rem' }}>
            A working estate full of texture, scent, and light — yours to wander at will.
          </p>
        </div>
        <div className="splash-grid d-reveal d-d2">
          <div className="splash-cell cell-main">
            <img src={splashImages[0].src} alt={splashImages[0].label} />
            <span className="cell-label">{splashImages[0].label}</span>
          </div>
          <div className="splash-cell cell-sm">
            <img src={splashImages[1].src} alt={splashImages[1].label} />
            <span className="cell-label">{splashImages[1].label}</span>
          </div>
          <div className="splash-cell cell-sm">
            <img src={splashImages[2].src} alt={splashImages[2].label} />
            <span className="cell-label">{splashImages[2].label}</span>
          </div>
        </div>
      </section>

      {/* SEASONS */}
      <section className="section-dark">
        <div className="d-reveal">
          <span className="discover-tag">When to Visit</span>
          <div className="gold-line" />
        </div>
        <h2 className="section-heading d-reveal d-d1">Every Season Has <em>Its Magic.</em></h2>
        <p className="body-text d-reveal d-d2" style={{ marginTop: '0.75rem' }}>
          Peak season runs April to December. Weekends bustle with life —<br />
          winter nights whisper. Bring a warm layer for November to January.
        </p>
        <div className="season-grid">
          {seasons.map((s, i) => (
            <div key={s.tag} className={`season-card d-reveal d-d${i + 1}`}>
              <img src={s.image} alt={s.headline} />
              <div className="season-overlay" />
              <div className="season-body">
                <span className="season-icon">{s.icon}</span>
                <p className="season-period" style={{ color: s.accent }}>{s.period}</p>
                <div className="season-divider" style={{ background: s.accent }} />
                <h3 className="season-heading">{s.headline}</h3>
                <p className="season-text">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="d-reveal d-d3" style={{ textAlign: 'center', paddingTop: '1rem' }}>
          <a href="#booking" className="btn-gold">Reserve Your Stay</a>
        </div>
      </section>
    </>
  )
}