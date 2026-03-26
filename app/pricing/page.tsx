import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing | HMM Small Business Marketing',
  description:
    'Transparent pricing for small business marketing services — retainer packages, à la carte services, one-time projects, and add-ons.',
}

const packages = [
  {
    name: 'Starter',
    price: '$400',
    period: '/month',
    hours: '4–6 hrs/month',
    description: 'Perfect for businesses just beginning their digital marketing journey.',
    services: ['Single Platform Service (your choice)', 'Monthly Reporting'],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$1,200',
    period: '/month',
    hours: '12–16 hrs/month',
    description: 'The most popular choice for small businesses ready to expand their reach.',
    services: ['Social Media (2–3 platforms)', 'SEO Basics', 'Content Creation', 'Regular Communication'],
    featured: true,
  },
  {
    name: 'Premium',
    price: '$1,800',
    period: '/month',
    hours: '18–23 hrs/month',
    description: 'Full-service marketing for businesses serious about growth.',
    services: ['Social Media (3–4 platforms)', 'SEO', 'Email Marketing', 'Advertising (Optional)', 'Priority Communication'],
    featured: false,
  },
]

const alaCarte = [
  { service: 'Social Media Only', price: '$400/mo', hours: '4–6 hrs', notes: '2 platforms, 8 posts/month' },
  { service: 'Google Business Profile', price: '$300/mo', hours: '3–4 hrs', notes: 'Daily GBP management' },
  { service: 'Blog Writing', price: '$500/mo', hours: '6–8 hrs', notes: 'Blog posts OR newsletters' },
  { service: 'Email Marketing', price: '$350/mo', hours: '3–4 hrs', notes: 'Two campaigns per month' },
  { service: 'Paid Ads Campaign Setup', price: '$750', hours: '3–4 hrs', notes: '$500 ad spend minimum' },
  { service: 'Paid Ads Maintenance', price: '$500/mo', hours: '2–3 hrs', notes: 'Ongoing optimization' },
]

const projectBased = [
  {
    group: 'Web',
    items: [
      { service: 'Simple 5-Page Website (Go High Level)', price: '$1,500–$2,500', timeline: '2–3 weeks', notes: 'Includes setup, design, mobile optimization' },
      { service: 'Landing Page (Wix)', price: '$500', timeline: '3–5 days', notes: 'Single page with form/CTA' },
      { service: 'Website Audit & Recommendations', price: '$400', timeline: '1 week', notes: 'Comprehensive report with action items' },
      { service: 'Monthly Website Updates', price: '$150/month', timeline: 'Ongoing', notes: '2 hours of updates per month' },
    ],
  },
  {
    group: 'Strategy',
    items: [
      { service: 'Marketing Strategy Session', price: '$400', timeline: '2 hours', notes: 'Deep dive with action plan' },
      { service: 'Social Media Audit', price: '$300', timeline: '3–5 days', notes: 'Platform review with recommendations' },
      { service: 'Brand Voice/Messaging Guide', price: '$600', timeline: '1–2 weeks', notes: 'Complete brand guidelines document' },
      { service: 'Competitor Analysis', price: '$350', timeline: '1 week', notes: '3–5 competitors analyzed' },
    ],
  },
  {
    group: 'Content',
    items: [
      { service: 'Professional Blog Post (1,200+ words)', price: '$500', timeline: '3–5 days', notes: 'SEO optimized, researched' },
      { service: 'Case Study', price: '$400', timeline: '1–2 weeks', notes: 'Interview, writing, design' },
      { service: 'Email Sequence (5 emails)', price: '$500', timeline: '1 week', notes: 'Welcome or nurture sequence' },
      { service: 'Social Media Templates (10 designs)', price: '$300', timeline: '1 week', notes: 'Branded Canva templates' },
    ],
  },
]

const addOns = [
  { service: 'Additional Social Platform', price: '$100/month', notes: 'Per platform beyond package limit' },
  { service: 'Additional Blog Post', price: '$100–$200', notes: 'Per 500–800 word article' },
  { service: 'Graphic Design (beyond package)', price: '$50–$100', notes: 'Per custom graphic' },
  { service: 'Video Editing (advanced)', price: '$100–$200/hour', notes: 'Beyond basic Reels editing' },
  { service: 'Professional Content Shoot', price: '$500–$800', notes: 'Half-day on-location' },
  { service: 'Email Marketing Campaign', price: '$250', notes: 'One-off promotional campaign' },
  { service: 'Landing Page Design', price: '$500', notes: 'Single page with form' },
  { service: 'Social Media Ad Management', price: '$500 + 15% of ad spend', notes: 'Minimum $500 ad spend' },
]

function SectionHeader({ label, title, sub }: { label: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="text-center mb-12">
      <div className="section-label mx-auto">{label}</div>
      <h2 className="text-2xl md:text-4xl font-black leading-tight mb-3" style={{ color: '#1a2b4a' }}>{title}</h2>
      {sub && <p className="text-ink-40 max-w-xl mx-auto text-sm leading-relaxed">{sub}</p>}
    </div>
  )
}

export default function PricingPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero — bright blue fill */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-24 text-center overflow-hidden"
        style={{ backgroundColor: '#4a90e2' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 90% 70% at 60% 40%, rgba(255,255,255,0.07) 0%, transparent 60%)' }}
        />
        {/* Decorative circles */}
        <div className="absolute top-12 right-20 w-48 h-48 rounded-full border border-white/15 animate-float pointer-events-none" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-8 left-16 w-32 h-32 rounded-full border border-white/10 animate-float pointer-events-none" style={{ animationDelay: '1.5s' }} />

        <div className="relative z-10 container-site px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/30 bg-white/10 mb-6">
            Transparent Pricing
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
            Simple, Honest Pricing
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            No hidden fees. No surprise invoices. Just clear, straightforward pricing for
            marketing services that move the needle for your small business.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-white/70 font-semibold">
            {['✓ Month-to-month', '✓ No long-term contracts', '✓ Free discovery call'].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Retainer Packages */}
      <section className="section-pad bg-white">
        <div className="container-site px-6 lg:px-8">
          <SectionHeader
            label="Monthly Retainers"
            title={<>Retainer <span className="gradient-text">Packages</span></>}
            sub="Our most popular option — hands-off monthly marketing with consistent, predictable pricing."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  pkg.featured
                    ? 'border-blue-dark shadow-2xl shadow-blue/15 scale-[1.02]'
                    : 'border-bg-border hover:border-blue/50 hover:shadow-lg hover:shadow-blue/8'
                } bg-white`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-blue-dark text-white shadow-md">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-black mb-1" style={{ color: '#1a2b4a' }}>{pkg.name}</h3>
                  <p className="text-xs text-ink-40 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-blue-dark">{pkg.price}</span>
                    <span className="text-ink-40 text-sm">{pkg.period}</span>
                  </div>
                  <p className="text-xs text-ink-40 mt-1">{pkg.hours}</p>
                </div>

                <div className="flex-1">
                  <div className="h-px bg-bg-border mb-5" />
                  <ul className="space-y-3">
                    {pkg.services.map((s) => (
                      <li key={s} className="flex items-start gap-2.5 text-sm text-ink-40">
                        <svg className="w-4 h-4 text-blue-dark shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://www.hmm.agency/our-company/contact-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full py-3 rounded-full text-sm font-bold text-center transition-all duration-200 hover:opacity-90 ${
                    pkg.featured ? 'shadow-md' : 'border-2'
                  }`}
                  style={pkg.featured
                    ? { backgroundColor: '#00c564', color: '#1a2b4a' }
                    : { borderColor: '#00c564', color: '#00c564' }
                  }
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À La Carte */}
      <section className="section-pad bg-bg-surface">
        <div className="container-site px-6 lg:px-8">
          <SectionHeader
            label="À La Carte"
            title={<>Pick What You <span className="gradient-text">Need</span></>}
            sub="Not ready for a full package? Start with one service and build from there."
          />

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-bg-border overflow-hidden shadow-sm">
              <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-white border-b border-bg-border">
                <div className="col-span-5 text-xs font-bold uppercase tracking-widest text-ink-40">Service</div>
                <div className="col-span-2 text-xs font-bold uppercase tracking-widest text-ink-40">Price</div>
                <div className="col-span-2 text-xs font-bold uppercase tracking-widest text-ink-40">Hours</div>
                <div className="col-span-3 text-xs font-bold uppercase tracking-widest text-ink-40">Notes</div>
              </div>

              {alaCarte.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-bg-border last:border-0 hover:bg-bg-surface transition-colors bg-white"
                >
                  <div className="col-span-5 text-sm font-semibold" style={{ color: '#1a2b4a' }}>{row.service}</div>
                  <div className="col-span-2 text-sm font-bold text-blue-dark">{row.price}</div>
                  <div className="col-span-2 text-sm text-ink-40">{row.hours}</div>
                  <div className="col-span-3 text-xs text-ink-40 leading-relaxed">{row.notes}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project-Based */}
      <section className="section-pad bg-white">
        <div className="container-site px-6 lg:px-8">
          <SectionHeader
            label="One-Time Projects"
            title={<>Project-Based <span className="gradient-text">Services</span></>}
            sub="One-time investments with a defined scope, timeline, and deliverables."
          />

          <div className="max-w-5xl mx-auto space-y-8">
            {projectBased.map((group) => (
              <div key={group.group}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-dark">{group.group}</span>
                  <div className="flex-1 h-px bg-bg-border" />
                </div>

                <div className="rounded-2xl border border-bg-border overflow-hidden shadow-sm">
                  <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-bg-surface border-b border-bg-border">
                    <div className="col-span-4 text-xs font-bold uppercase tracking-widest text-ink-40">Service</div>
                    <div className="col-span-2 text-xs font-bold uppercase tracking-widest text-ink-40">Price</div>
                    <div className="col-span-2 text-xs font-bold uppercase tracking-widest text-ink-40">Timeline</div>
                    <div className="col-span-4 text-xs font-bold uppercase tracking-widest text-ink-40">Notes</div>
                  </div>

                  {group.items.map((row, i) => (
                    <div
                      key={i}
                      className="px-6 py-5 border-b border-bg-border last:border-0 hover:bg-bg-surface transition-colors bg-white md:grid md:grid-cols-12 md:gap-4 flex flex-col gap-1"
                    >
                      <div className="md:col-span-4 text-sm font-semibold" style={{ color: '#1a2b4a' }}>{row.service}</div>
                      <div className="md:col-span-2 text-sm font-bold text-blue-dark">{row.price}</div>
                      <div className="md:col-span-2 text-xs text-ink-40">{row.timeline}</div>
                      <div className="md:col-span-4 text-xs text-ink-40 leading-relaxed">{row.notes}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="section-pad bg-bg-surface">
        <div className="container-site px-6 lg:px-8">
          <SectionHeader
            label="Add-Ons"
            title={<>Enhance Any <span className="gradient-text">Package</span></>}
            sub="Stack these onto any retainer package or project for extra firepower."
          />

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addOns.map((item, i) => (
              <div key={i} className="card-dark p-5 flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-blue-light border border-blue/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-blue-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold mb-0.5" style={{ color: '#1a2b4a' }}>{item.service}</p>
                  <p className="text-sm font-bold text-blue-dark mb-1">{item.price}</p>
                  <p className="text-xs text-ink-40 leading-relaxed">{item.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — bright blue fill */}
      <section
        className="relative py-24 md:py-32 text-center overflow-hidden"
        style={{ backgroundColor: '#4a90e2' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,0.07) 0%, transparent 65%)' }}
        />
        <div className="relative z-10 container-site px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            Not Sure Where to Start?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Book a free 30-minute discovery call. We&apos;ll help you figure out exactly what services
            make sense for your business and budget.
          </p>
          <a
            href="https://www.hmm.agency/our-company/contact-us"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-base font-black transition-all duration-200 shadow-xl hover:opacity-90"
            style={{ backgroundColor: '#00c564', color: '#1a2b4a' }}
          >
            Book a Free Consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <div className="mt-6">
            <Link href="/" className="text-sm text-white/60 hover:text-white/90 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
