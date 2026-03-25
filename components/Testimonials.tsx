const testimonials = [
  {
    quote: 'Garrett and Grace have been unbelievable to work with. They have quickly found key issues in our system and gotten them resolved. We have already seen a big change in our online visibility in our community. Could not recommend them more!!',
    name: 'Dr. Jordan Edwards',
    title: 'Owner',
    company: 'Revive Family Chiropractic',
  },
  {
    quote: 'Garrett is great to work with! He is extremely knowledgeable and has a creative mindset.',
    name: 'Elise Stansel',
    title: 'Owner',
    company: 'Elise Stansel: All State',
  },
  {
    quote: "Incredibly knowledgeable and experts in their field. It's always refreshing to speak with somebody who is able to teach on stuff I have no idea about, especially when it comes to social media and Google. That is like a foreign language to me and Mr. Hammonds really has it down!",
    name: 'Robert Norris',
    title: 'Owner',
    company: 'CertaPro Painters® of OKC-Edmond, OK',
  },
  {
    quote: "Hammonds Media is simply amazing. My wife and I are so grateful to have crossed paths with Garrett and Grace. They laid out clear and defined objectives over the course of several months for our small business, and we were thoroughly impressed by their attention to detail. You can genuinely feel their passion, even through a screen during meetings. Garrett's breakdown of marketing strategies and tiers introduced us to concepts we didn't even know existed! He takes an education-first approach, and we've been blown away by his industry knowledge and expertise. I can't recommend Hammonds Media enough for all your digital needs.",
    name: 'Rob Hair',
    title: 'Owner',
    company: 'Exterior Cleaning Professionals',
  },
  {
    quote: 'Without Hammonds Media, Cornerstone Civil Engineering would not be where it is today! Their industry experience, cooperative collaboration and guidance helped us create our logo and brand identity. They created our website and provide exceptional support while we worked our way through opening our company. We are thankful for them and continue to call on Hammonds Media with all of our marketing and SEO needs!',
    name: 'Hollis Allen',
    title: 'Founder & Principle',
    company: 'Cornerstone Civil Engineering',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-bg-surface">
      <div className="container-site px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label mx-auto">Testimonials</div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4" style={{ color: '#1a2b4a' }}>
            Real Businesses.{' '}
            <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="text-ink-40 leading-relaxed">
            Don&apos;t take our word for it — here&apos;s what our clients say.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <div key={i} className="card-dark p-7 break-inside-avoid flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-ink-40 leading-relaxed italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-2 border-t border-bg-border">
                <div className="w-9 h-9 rounded-full bg-blue-light border border-blue/30 flex items-center justify-center text-xs font-bold text-blue-dark shrink-0">
                  {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: '#1a2b4a' }}>{t.name}</p>
                  <p className="text-xs text-ink-40">{t.title}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
