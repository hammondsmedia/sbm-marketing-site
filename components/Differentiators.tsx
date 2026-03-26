const features = [
  {
    icon: '/icons/hmm-target-icon.svg',
    title: 'Hyper-Local Focus',
    description: "We specialize in Oklahoma small businesses and understand the local market. We're not a faceless agency — we're your neighbors.",
    color: '#3d7ef0',
  },
  {
    icon: '/icons/hmm-email-marketing-icon.svg',
    title: 'Education-First Approach',
    description: "We don't just do the work — we teach you what we're doing and why. You'll actually understand your marketing.",
    color: '#551344',
  },
  {
    icon: '/icons/hmm-social-media-icon.svg',
    title: 'Full-Service Under One Roof',
    description: 'Social media, SEO, email marketing, paid ads, and web design — all coordinated by one team that knows your brand.',
    color: '#f5b62f',
  },
  {
    icon: '/icons/hmm-data-analytics-icon.svg',
    title: 'Transparent, Proven Results',
    description: 'Clear monthly reports, no vanity metrics. We track what actually moves the needle for your business.',
    color: '#e36138',
  },
]

export default function Differentiators() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-site px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label-maroon mx-auto">Why HMM</div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4" style={{ color: '#1a2b4a' }}>
            Not Your Average{' '}
            <span className="gradient-text">Marketing Agency</span>
          </h2>
          <p className="text-ink-40 leading-relaxed">
            We built HMM Small Business Marketing specifically for local business owners who need
            real results, real communication, and real value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <div key={i} className="card-dark p-7 flex flex-col gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${feature.color}12`, border: `1px solid ${feature.color}22` }}
              >
                <img src={feature.icon} alt="" className="w-7 h-7 object-contain" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#1a2b4a' }}>{feature.title}</h3>
                <p className="text-sm text-ink-40 leading-relaxed">{feature.description}</p>
              </div>
              <div className="mt-auto h-0.5 rounded-full w-10" style={{ background: feature.color, opacity: 0.4 }} />
            </div>
          ))}
        </div>

        {/* Team illustration */}
        <div className="mt-16 flex justify-center">
          <img
            src="/illustrations/hmm-team-work-illustration.svg"
            alt=""
            className="w-full max-w-2xl h-auto opacity-90"
          />
        </div>
      </div>
    </section>
  )
}
