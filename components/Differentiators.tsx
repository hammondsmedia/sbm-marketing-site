const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Hyper-Local Focus',
    description: "We specialize in Oklahoma small businesses and understand the local market. We're not a faceless agency — we're your neighbors.",
    color: '#3d7ef0',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Education-First Approach',
    description: "We don't just do the work — we teach you what we're doing and why. You'll actually understand your marketing.",
    color: '#06c664',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Full-Service Under One Roof',
    description: 'Social media, SEO, email marketing, paid ads, and web design — all coordinated by one team that knows your brand.',
    color: '#f5b62f',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Transparent, Proven Results',
    description: 'Clear monthly reports, no vanity metrics. We track what actually moves the needle for your business.',
    color: '#e36138',
  },
]

export default function Differentiators() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-site px-6 lg:px-8">
        <div className="text-left max-w-2xl mb-14">
          <div className="section-label">Why HMM</div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4" style={{ color: '#1a2b4a' }}>
            Not Your Average{' '}
            <span className="gradient-text">Marketing Agency</span>
          </h2>
          <p className="text-ink-40 leading-relaxed">
            We built HMM Small Business Marketing specifically for local business owners who need
            real results, real communication, and real value.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, i) => (
              <div key={i} className="card-dark p-7 flex flex-col gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${feature.color}12`, color: feature.color, border: `1px solid ${feature.color}22` }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold mb-2" style={{ color: '#1a2b4a' }}>{feature.title}</h3>
                  <p className="text-sm text-ink-40 leading-relaxed">{feature.description}</p>
                </div>
                <div className="mt-auto h-0.5 rounded-full w-10" style={{ background: feature.color, opacity: 0.4 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
