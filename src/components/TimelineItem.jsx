export function TimelineItem({ year, title, organization, description }) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-0 h-full border-l border-zinc-400"></div>
      <div className="absolute left-0 top-1 w-3 h-3 bg-zinc-800 rounded-full -translate-x-1.5"></div>
      <div className="font-bold text-lg">{year}</div>
      <div className="font-semibold">{title}</div>
      <div className="italic text-zinc-700">{organization}</div>
      <p className="mt-2 text-zinc-700">{description}</p>
    </div>
  )
}

