import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function BlogPreview({
  title,
  excerpt,
  date,
  readTime,
  slug,
  categories,
}) {
  return (
    <Card className="bg-amber-50 border-zinc-300 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex gap-2 mb-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="text-xs border-zinc-400"
            >
              {category}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-zinc-700 mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center text-sm text-zinc-600 gap-4">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
