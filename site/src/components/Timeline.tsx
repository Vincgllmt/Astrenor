interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  isLeft?: boolean;
}

export function TimelineEvent({ year, title, description, isLeft = true }: TimelineEventProps) {
  return (
    <div className={`flex items-center gap-8 ${isLeft ? '' : 'flex-row-reverse'}`}>
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-6 card-hover">
          <span className="text-primary font-bold">{year}</span>
          <h4 className="text-lg font-semibold text-foreground mt-1">{title}</h4>
          <p className="text-foreground/60 text-sm mt-2">{description}</p>
        </div>
      </div>
      
      {/* Dot */}
      <div className="w-4 h-4 rounded-full bg-primary border-4 border-background flex-shrink-0" />
      
      {/* Empty space for alignment */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

interface TimelineProps {
  children: React.ReactNode;
}

export default function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-dark to-transparent -translate-x-1/2 hidden md:block" />
      
      {/* Events */}
      <div className="space-y-8">
        {children}
      </div>
    </div>
  );
}
