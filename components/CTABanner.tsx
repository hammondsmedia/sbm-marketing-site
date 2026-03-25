export default function CTABanner() {
  return (
    <section className="py-20 md:py-28 bg-bg-surface relative overflow-hidden">
      {/* Blue glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(153,195,251,0.1) 0%, transparent 65%)',
        }}
      />

      {/* Decorative ring */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-blue/8 pointer-events-none"
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-blue/12 pointer-events-none"
      />

      <div className="relative z-10 container-site px-6 lg:px-8 text-center">
        <div className="section-label mx-auto mb-6">Take the next step</div>

        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 max-w-3xl mx-auto">
          Ready to Grow{' '}
          <span className="gradient-text">Your Business?</span>
        </h2>

        <p className="text-lg text-ink-40 max-w-xl mx-auto mb-10 leading-relaxed">
          Schedule a free discovery call. We&apos;ll learn about your business, your goals, and put
          together a marketing plan that actually fits your budget.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.hmm.agency/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-base font-black bg-blue text-bg hover:bg-blue-light transition-all duration-200 shadow-2xl shadow-blue/30"
          >
            Book a Free Call
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-base font-bold border border-blue/30 text-blue hover:bg-blue/10 transition-all duration-200"
          >
            View Pricing First
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-ink-40">
          {[
            '✓ No long-term contracts',
            '✓ Month-to-month retainers',
            '✓ Free discovery call',
            '✓ Real people, real results',
          ].map((item) => (
            <span key={item} className="font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
