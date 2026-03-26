import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a2b4a' }}>
      <div className="container-site section-pad">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="HMM Small Business Marketing"
                width={160}
                height={44}
                className="h-9 w-auto mb-4"
              />
            </Link>
            <div className="w-8 h-1 rounded-full mb-3" style={{ background: '#551344' }} />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Helping small businesses grow through smart, strategic, and
              results-driven digital marketing.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-4 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Contact', href: 'https://www.hmm.agency/contact', external: true },
              ].map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className="text-white/50 hover:text-white text-sm transition-colors">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-4 uppercase tracking-widest">
              Ready to grow?
            </h4>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Schedule a free discovery call and let&apos;s talk about your goals.
            </p>
            <a
              href="https://www.hmm.agency/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-blue-fill text-white hover:opacity-90 transition-opacity shadow-lg"
            >
              Get In Touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Hammonds Media. All rights reserved.</p>
          <a href="https://www.hmm.agency" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
            hmm.agency
          </a>
        </div>
      </div>
    </footer>
  )
}
