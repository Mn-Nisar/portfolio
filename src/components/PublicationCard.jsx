import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function PublicationCard({
  title,
  journal,
  year,
  authors,
  doi,
  abstract,
  tags,
}) {
  return (
    <Card className="bg-amber-50 border-zinc-300 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-sm text-zinc-600 mb-3">
          <p className="italic">
            {journal}, {year}
          </p>
          <p>{authors}</p>
        </div>
        <p className="text-zinc-700 mb-4 line-clamp-3">{abstract}</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-zinc-200 text-zinc-800 hover:bg-zinc-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <a
            href={doi}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm hover:underline"
          >
            DOI:
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
