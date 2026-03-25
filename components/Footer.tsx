import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-bg-border">
      <div className="container-site section-pad">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="HMM Small Business Marketing"
                width={160}
                height={44}
                className="h-9 w-auto mb-4"
              />
            </Link>
            <p className="text-ink-40 text-sm leading-relaxed max-w-xs">
              Helping small businesses grow through smart, strategic, and
              results-driven digital marketing.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
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
                      className="text-ink-40 hover:text-blue text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-ink-40 hover:text-blue text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
              Ready to grow?
            </h4>
            <p className="text-ink-40 text-sm leading-relaxed mb-5">
              Schedule a free discovery call and let&apos;s talk about your goals.
            </p>
            <a
              href="https://www.hmm.agency/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-blue text-bg hover:bg-blue-light transition-colors shadow-lg shadow-blue/20"
            >
              Get In Touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-bg-border flex flex-col sm:flex-row items-center justify-between gap-3 text-ink-40 text-xs">
          <p>© {new Date().getFullYear()} Hammonds Media. All rights reserved.</p>
          <a
            href="https://www.hmm.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue transition-colors"
          >
            hmm.agency
          </a>
        </div>
      </div>
    </footer>
  )
}
