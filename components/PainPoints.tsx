'use client'

import { useRef } from 'react'

const painPoints = [
  {
    icon: '/icons/hmm-target-icon.svg',
    pain: '"I don\'t have time for marketing."',
    solution:
      'We handle everything — content creation, scheduling, analytics, and reporting — so you can focus on running your business.',
    color: '#3d7ef0',
  },
  {
    icon: '/icons/hmm-data-analytics-icon.svg',
    pain: '"I don\'t know if my marketing is actually working."',
    solution:
      'You get clear, jargon-free monthly reports that show exactly what\'s happening and why it matters for your business.',
    color: '#06c664',
  },
  {
    icon: '/icons/hmm-crm-icon.svg',
    pain: '"I\'ve wasted money on ads with no results."',
    solution:
      'We build campaigns on proven strategy, not guesswork. Every ad dollar is tracked and optimized — no more money down the drain.',
    color: '#f5b62f',
  },
  {
    icon: '/icons/hmm-search-icon.svg',
    pain: '"My competitors are outranking me on Google."',
    solution:
      'Our SEO and Google Business Profile work puts your business where customers are already searching — right in front of them.',
    color: '#e36138',
  },
  {
    icon: '/icons/hmm-ai-icon.svg',
    pain: '"I don\'t know where to even start."',
    solution:
      'We start with a strategy session to understand your goals, then lay out a clear, step-by-step marketing roadmap tailored to you.',
    color: '#551344',
  },
  {
    icon: '/icons/hmm-social-media-icon.svg',
    pain: '"My social media is all over the place."',
    solution:
      'We build a consistent brand voice and content calendar that keeps your audience engaged and your feed looking professional — every week.',
    color: '#9ac3fa',
  },
]

export default function PainPoints() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = 340
    scrollRef.current.scrollBy({ left: direction === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <section className="py-20 md:py-28 bg-bg-surface overflow-hidden">
      <div className="container-site px-6 lg:px-8">
        <div className="section-label">We Get It</div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight max-w-xl" style={{ color: '#1a2b4a' }}>
              We Know What Keeps You{' '}
              <span className="gradient-text">Up at Night</span>
            </h2>
            <p className="mt-4 text-ink-40 max-w-lg leading-relaxed">
              Sound familiar? You&apos;re not alone. These are the exact problems we solve every day for
              small business owners like you.
            </p>
          </div>

          {/* Scroll controls */}
          <div className="hidden md:flex gap-3 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-gray-200 text-gray-400 hover:border-blue-dark hover:text-blue-dark transition-all flex items-center justify-center"
              aria-label="Scroll left"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-gray-200 text-gray-400 hover:border-blue-dark hover:text-blue-dark transition-all flex items-center justify-center"
              aria-label="Scroll right"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable card row — outer div owns overflow, inner div owns padding-left alignment */}
      <div ref={scrollRef} className="mt-10 overflow-x-auto no-scrollbar scroll-snap-x pb-4">
        <div
          className="flex gap-5"
          style={{ paddingLeft: 'max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem))' }}
        >
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="shrink-0 w-[300px] md:w-[320px] card-dark p-7 flex flex-col gap-5"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
              >
                <img src={item.icon} alt="" className="w-8 h-8 object-contain" />
              </div>

              {/* Pain */}
              <div>
                <p className="text-base font-bold leading-snug mb-3" style={{ color: item.color }}>
                  {item.pain}
                </p>
                <div className="w-8 h-0.5 rounded-full mb-3" style={{ background: item.color, opacity: 0.3 }} />
                <p className="text-sm text-ink-40 leading-relaxed">{item.solution}</p>
              </div>

              {/* Check */}
              <div className="mt-auto flex items-center gap-2 text-xs font-semibold" style={{ color: item.color }}>
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                We solve this
              </div>
            </div>
          ))}
          <div className="shrink-0 w-6 lg:w-8" />
        </div>
      </div>

      <div className="md:hidden text-center mt-4 text-xs text-ink-40 flex items-center justify-center gap-2">
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        Swipe to see more
      </div>
    </section>
  )
}
