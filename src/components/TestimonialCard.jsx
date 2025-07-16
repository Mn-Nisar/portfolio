import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function TestimonialCard({ quote, name, title, organization, avatarUrl }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <Card className="bg-amber-50 border-zinc-300">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <div className="text-4xl text-zinc-300 absolute -top-2 -left-2">"</div>
            <p className="text-zinc-700 italic relative z-10 pl-4">{quote}</p>
            <div className="text-4xl text-zinc-300 absolute -bottom-6 right-0">"</div>
          </div>

          <div className="flex items-center gap-4 mt-4 pt-2 border-t border-zinc-200">
            <Avatar className="h-12 w-12 border border-zinc-300">
              <AvatarImage src={avatarUrl} alt={name} />
              <AvatarFallback className="bg-zinc-200 text-zinc-800">{initials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{name}</div>
              <div className="text-sm text-zinc-600">
                {title}, {organization}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

