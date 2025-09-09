interface TestimonialCardProps {
  name: string;
  role: string;
  company?: string;
  avatar: string;
  rating: number;
  content: string;
  date: string;
}

export default function TestimonialCard({
  name,
  role, 
  company,
  avatar,
  rating,
  content,
  date
}: TestimonialCardProps) {
  return (
    <div className="h-full w-full">
      <div className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl p-4 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <img
            src={avatar}
            alt={`${name} avatar`}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <div className="font-medium text-gray-900 dark:text-white">
              {name}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {role} {company && `& ${company}`}
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill={i < rating ? "#FBBF24" : "none"}
              stroke={i < rating ? "none" : "currentColor"}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {content}
        </div>

        {/* Date */}
        <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          {date}
        </div>
      </div>
    </div>
  );
}