import { cn } from "@/lib/utils"

export interface TestimonialAuthor {
  name: string
  title: string
  company: string
  avatar?: string
}

interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author, 
  text, 
  href, 
  className 
}: TestimonialCardProps) {
  const CardContent = () => (
    <div className={cn(
      "flex w-80 flex-col gap-4 rounded-2xl border border-white/20 bg-gradient-to-br from-[#16325B] to-[#1A2947] p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10",
      className
    )}>
      <div className="flex items-start gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="h-4 w-4 fill-yellow-400"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <blockquote className="text-sm leading-relaxed text-gray-300">
        "{text}"
      </blockquote>
      
      <div className="flex items-center gap-3 pt-2 border-t border-white/10">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 font-semibold">
          {author.avatar ? (
            <img 
              src={author.avatar} 
              alt={author.name}
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            author.name.split(' ').map(n => n[0]).join('').substring(0, 2)
          )}
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-white text-sm">
            {author.name}
          </div>
          <div className="text-xs text-gray-400">
            {author.title} at {author.company}
          </div>
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        <CardContent />
      </a>
    )
  }

  return <CardContent />
}