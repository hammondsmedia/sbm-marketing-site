import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#4a90e2' }}
    >
      {/* Subtle inner gradient for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 100% 80% at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Decorative circles — HMM brand palette */}
      <div className="absolute top-16 right-16 md:right-32 w-72 h-72 rounded-full border-2 animate-float pointer-events-none" style={{ animationDelay: '0s', borderColor: 'rgba(245,182,47,0.45)' }} />
      <div className="absolute bottom-24 left-12 md:left-28 w-48 h-48 rounded-full border-2 animate-float pointer-events-none" style={{ animationDelay: '1.8s', borderColor: 'rgba(0,197,100,0.40)' }} />
      <div className="absolute top-1/3 left-12 w-5 h-5 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(236,168,168,0.6)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(245,182,47,0.7)' }} />
      <div className="absolute top-2/3 right-16 w-2 h-2 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(85,19,68,0.55)' }} />

      {/* Content — two columns on large screens */}
      <div className="relative z-10 container-site px-6 lg:px-8 py-32 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Left: text + CTAs */}
          <div className="text-center lg:text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/30 bg-white/10 mb-8">
              HMM Small Business Marketing
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white">
              Marketing That{' '}
              <span className="italic font-black">Actually Works</span>
              <br />
              for Small Businesses
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              We help local business owners get seen online, attract more customers, and grow
              — without the guesswork or big-agency price tags.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold transition-all duration-200 shadow-xl hover:opacity-90"
                style={{ backgroundColor: '#00c564', color: '#1a2b4a' }}
              >
                See Our Packages
              </Link>
              <a
                href="https://www.hmm.agency/our-company/contact-us"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: '#f5b62f', color: '#1a2b4a' }}
              >
                Get a Free Consultation
              </a>
            </div>

            {/* Micro-stats */}
            <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-x-12 gap-y-4">
              {[
                { value: '5★', label: 'Client Reviews' },
                { value: '10+', label: 'Businesses Served' },
                { value: 'Local', label: 'Oklahoma-Based' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-xs font-semibold text-white/60 uppercase tracking-widest mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: illustration (desktop only) */}
          <div className="hidden lg:flex justify-center items-center">
            <img
              src="/illustrations/hmm-remote-work-illustration.svg"
              alt=""
              className="w-full max-w-lg h-auto"
            />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}
