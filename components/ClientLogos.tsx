const clients = [
  { name: 'Revive Family Chiropractic', initials: 'RFC' },
  { name: 'Elise Stansel: All State', initials: 'ES' },
  { name: 'CertaPro Painters OKC-Edmond', initials: 'CP' },
  { name: 'Exterior Cleaning Professionals', initials: 'ECP' },
  { name: 'Cornerstone Civil Engineering', initials: 'CCE' },
  { name: 'Your Business Here', initials: '?' },
]

export default function ClientLogos() {
  return (
    <section className="py-16 md:py-24 bg-bg border-y border-bg-border">
      <div className="container-site px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-ink-40 mb-10">
          Trusted by local businesses
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {clients.map((client, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border transition-all duration-300 group ${
                client.name === 'Your Business Here'
                  ? 'border-dashed border-blue/20 bg-blue/3 hover:border-blue/40'
                  : 'border-bg-border bg-bg-card hover:border-blue/30 blue-glow-sm'
              }`}
            >
              {/* Logo placeholder */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black ${
                  client.name === 'Your Business Here'
                    ? 'border-2 border-dashed border-blue/30 text-blue/40'
                    : 'bg-blue/10 text-blue border border-blue/20'
                }`}
              >
                {client.initials}
              </div>
              <p
                className={`text-center text-[10px] font-semibold leading-tight ${
                  client.name === 'Your Business Here' ? 'text-blue/30' : 'text-ink-40'
                }`}
              >
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
