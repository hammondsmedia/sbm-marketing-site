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
    <section className="py-14 md:py-20 bg-white border-y border-bg-border">
      <div className="container-site px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-ink-40 mb-10">
          Trusted by local businesses
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {clients.map((client, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border transition-all duration-300 ${
                client.name === 'Your Business Here'
                  ? 'border-dashed border-blue/40 bg-bg-surface hover:border-blue-dark/40'
                  : 'border-bg-border bg-white hover:border-blue shadow-sm hover:shadow-md'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black ${
                  client.name === 'Your Business Here'
                    ? 'border-2 border-dashed border-blue/30 text-blue/50'
                    : 'bg-blue-light text-blue-dark border border-blue/20'
                }`}
              >
                {client.initials}
              </div>
              <p
                className={`text-center text-[10px] font-semibold leading-tight ${
                  client.name === 'Your Business Here' ? 'text-blue/40' : 'text-ink-40'
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
