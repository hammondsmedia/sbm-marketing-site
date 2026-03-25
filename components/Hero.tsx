import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg">
      {/* Background glow layers */}
      <div className="absolute inset-0 bg-blue-glow pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(153,195,251,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-10 md:right-24 w-64 h-64 rounded-full border border-bg-border opacity-30 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/4 left-10 md:left-24 w-40 h-40 rounded-full border border-blue/20 opacity-40 animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-blue opacity-60" style={{ animation: 'glowPulse 2.5s ease-in-out infinite' }} />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-green opacity-60" style={{ animation: 'glowPulse 3.5s ease-in-out infinite' }} />

      {/* Content */}
      <div className="relative z-10 container-site px-6 lg:px-8 py-32 text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-blue border border-blue/30 bg-blue/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue" />
          HMM Small Business Marketing
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 max-w-4xl mx-auto">
          Marketing That{' '}
          <span className="gradient-text">Actually Works</span>
          <br />
          for Small Businesses
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-ink-40 max-w-2xl mx-auto mb-10 leading-relaxed">
          We help local business owners get seen online, attract more customers, and grow
          — without the guesswork or big-agency price tags.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/pricing"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold bg-blue text-bg hover:bg-blue-light transition-all duration-200 shadow-xl shadow-blue/25"
          >
            See Our Packages
          </Link>
          <a
            href="https://www.hmm.agency/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold border border-blue/40 text-blue hover:bg-blue/10 transition-all duration-200"
          >
            Get a Free Consultation
          </a>
        </div>

        {/* Social proof micro-stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4">
          {[
            { value: '5★', label: 'Client Reviews' },
            { value: '10+', label: 'Businesses Served' },
            { value: 'Local', label: 'Oklahoma-Based' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-black text-blue">{stat.value}</div>
              <div className="text-xs font-medium text-ink-40 uppercase tracking-widest mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-ink-40">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ink-40/50 to-transparent" />
      </div>
    </section>
  )
}
