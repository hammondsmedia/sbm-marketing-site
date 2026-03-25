'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How long does it take to see results?',
    a: 'Marketing timelines vary by channel. Social media and Google Business Profile improvements can be seen in 30–60 days. SEO typically takes 3–6 months to show significant results. We\'ll set clear expectations from day one and give you honest milestones.',
  },
  {
    q: 'Do I need to sign a long-term contract?',
    a: 'No lengthy commitments required. We work on a month-to-month basis for retainer packages because we believe our results should speak for themselves. One-time project services are billed per project.',
  },
  {
    q: 'What makes you different from a big agency?',
    a: 'You won\'t get handed off to a junior account manager. Garrett and Grace work directly with every client. We\'re local, personal, and genuinely invested in your growth — not just hitting billable hours.',
  },
  {
    q: 'Can I start with just one service?',
    a: 'Absolutely. Many clients start with a single service (social media only, or Google Business Profile management) and expand as they see results. Our à la carte options are designed exactly for this.',
  },
  {
    q: 'What social media platforms do you manage?',
    a: 'We work across Facebook, Instagram, LinkedIn, Google Business Profile, and TikTok. The Starter package covers one platform, Growth covers 2–3, and Premium covers 3–4. We\'ll help you determine where your audience actually is.',
  },
  {
    q: 'Do you work with any type of small business?',
    a: 'Yes — we\'ve worked with chiropractors, insurance agents, painters, cleaning companies, engineering firms, and more. If you serve local customers, we can help you reach more of them.',
  },
  {
    q: 'How do we communicate and how often?',
    a: 'We\'re big on transparency and regular communication. Expect monthly reports, recurring check-in calls, and prompt responses via email or phone. You\'ll never be left wondering what\'s going on with your marketing.',
  },
  {
    q: 'What does the onboarding process look like?',
    a: 'We start with a discovery call to understand your business, goals, and current marketing situation. From there, we put together a strategy, get access to your accounts, and begin execution. Most clients are fully onboarded within 1–2 weeks.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-bg-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left bg-bg-card hover:bg-bg-card/80 transition-colors"
      >
        <span className="text-sm md:text-base font-semibold text-white leading-snug">{q}</span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full border border-bg-border flex items-center justify-center transition-all duration-300 ${
            open ? 'bg-blue/15 border-blue/30 rotate-45' : ''
          }`}
        >
          <svg
            className={`w-4 h-4 transition-colors duration-300 ${open ? 'text-blue' : 'text-ink-40'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-6 pt-0">
          <div className="h-px bg-bg-border mb-5" />
          <p className="text-sm text-ink-40 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-bg">
      <div className="container-site px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label mx-auto">FAQ</div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
            Got Questions?{' '}
            <span className="gradient-text">We Have Answers.</span>
          </h2>
          <p className="text-ink-40 leading-relaxed">
            The most common things small business owners ask us before getting started.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
