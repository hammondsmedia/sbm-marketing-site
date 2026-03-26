import { getClientLogos } from '@/lib/contentful'

export default async function ClientLogos() {
  const logos = await getClientLogos()
  const track = [...logos, ...logos] // duplicate for seamless infinite loop

  return (
    <section className="py-12 md:py-16 bg-white border-y border-bg-border">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-ink-40 mb-10">
        Trusted by local businesses
      </p>

      {logos.length > 0 ? (
        <div className="marquee-outer">
          <div className="marquee-track flex items-center gap-16 w-max px-8">
            {track.map((logo, i) => (
              <img
                key={i}
                src={logo.url}
                alt={logo.title}
                className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-xs text-ink-40">Client logos coming soon.</p>
      )}
    </section>
  )
}
