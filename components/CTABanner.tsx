export default function CTABanner() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#4a90e2' }}
    >
      {/* Subtle radial highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 30% 50%, rgba(255,255,255,0.07) 0%, transparent 65%)',
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-8 left-12 w-40 h-40 rounded-full border border-white/15 animate-float pointer-events-none" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-8 left-1/3 w-56 h-56 rounded-full border border-white/10 animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-white/30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 w-3 h-3 rounded-full bg-white/20 pointer-events-none" />

      <div className="relative z-10 container-site px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          {/* Left: text + CTAs */}
          <div className="flex-1 text-center lg:text-left">
            <div className="section-label-white lg:justify-start mb-6">Take the next step</div>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 max-w-3xl mx-auto lg:mx-0">
              Ready to Grow Your Business?
            </h2>

            <p className="text-lg text-white/80 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Schedule a free discovery call. We&apos;ll learn about your business, your goals, and put
              together a marketing plan that actually fits your budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://www.hmm.agency/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-base font-black transition-all duration-200 shadow-xl hover:opacity-90"
                style={{ backgroundColor: '#00c564', color: '#1a2b4a' }}
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
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-base font-bold transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: '#f5b62f', color: '#1a2b4a' }}
              >
                View Pricing First
              </a>
            </div>

            {/* Trust bar */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 text-xs text-white/70 font-medium">
              {[
                '✓ No long-term contracts',
                '✓ Month-to-month retainers',
                '✓ Free discovery call',
                '✓ Real people, real results',
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          {/* Right: illustration (desktop only) */}
          <div className="hidden lg:flex shrink-0 justify-center items-center mt-0">
            <img
              src="/illustrations/hmm-shaking-hands-illustration.svg"
              alt=""
              className="w-72 h-auto opacity-85"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
