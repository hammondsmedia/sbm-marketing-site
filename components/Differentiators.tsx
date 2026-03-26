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

export default function PainPointsSlider() {
  return (
    <section className="py-20 bg-[#f8fbff] overflow-hidden">
      {/* 1. Header Section - Defines the left alignment boundary */}
      <div className="container-site px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-blue-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600">We Get It</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-[#1a2b4a]">
            We Know What Keeps You <span className="text-blue-500">Up at Night</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            Sound familiar? You're not alone. These are the exact problems we 
            solve every day for small business owners like you.
          </p>
        </div>
      </div>

      {/* 2. Scroller Section */}
      {/* The '-mx-6' pulls the container to the screen edge.
          The 'px-6' pushes the content back in to match the header.
      */}
      <div className="container-site px-6 lg:px-8">
        <div className="-mx-6 px-6 lg:-mx-8 lg:px-8 overflow-visible">
          <div className="flex gap-6 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory">
            {painPoints.map((point, i) => (
              <div 
                key={i} 
                className="min-w-[300px] md:min-w-[350px] bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col snap-start"
              >
                {/* Icon Circle */}
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
                  style={{ background: `${point.color}10`, border: `1px solid ${point.color}20` }}
                >
                  {point.icon}
                </div>

                <h3 
                  className="text-xl font-bold mb-4 leading-snug"
                  style={{ color: point.color }}
                >
                  {point.title}
                </h3>

                <p className="text-slate-500 leading-relaxed mb-8">
                  {point.description}
                </p>

                <div className="mt-auto flex items-center gap-2 text-sm font-bold" style={{ color: point.color }}>
                  <span>✓</span>
                  <span>We solve this</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
