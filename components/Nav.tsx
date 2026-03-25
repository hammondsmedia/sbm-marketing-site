'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: 'https://www.hmm.agency/contact', external: true },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-md border-b border-bg-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-site px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.svg"
              alt="HMM Small Business Marketing"
              width={180}
              height={50}
              className="h-9 md:h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white/70 hover:text-blue transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-white/70 hover:text-blue transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://www.hmm.agency/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2.5 rounded-full text-sm font-bold bg-blue text-bg hover:bg-blue-light transition-colors duration-200 shadow-lg shadow-blue/20"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-blue transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-bg-surface border-t border-bg-border px-6 py-4 flex flex-col gap-4">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-white/80 hover:text-blue transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-semibold text-white/80 hover:text-blue transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://www.hmm.agency/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-5 py-3 rounded-full text-center text-sm font-bold bg-blue text-bg hover:bg-blue-light transition-colors shadow-lg shadow-blue/20"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}
