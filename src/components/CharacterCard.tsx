interface CharacterCardProps {
  name: string;
  title: string;
  description: string;
  symbol?: string;
  quote?: string;
}

export default function CharacterCard({ name, title, description, symbol, quote }: CharacterCardProps) {
  return (
    <div className="bg-black/40 border border-primary-dark/50 rounded-xl p-6 card-hover">
      {/* Symbol */}
      {symbol && (
        <div className="text-3xl mb-3">{symbol}</div>
      )}
      
      {/* Name & Title */}
      <h4 className="text-xl font-bold text-primary mb-1">{name}</h4>
      <p className="text-sm text-foreground/50 mb-3 italic">{title}</p>
      
      {/* Quote */}
      {quote && (
        <blockquote className="text-foreground/70 italic border-l-2 border-primary/50 pl-4 mb-4 text-sm">
          &ldquo;{quote}&rdquo;
        </blockquote>
      )}
      
      {/* Description */}
      <p className="text-foreground/60 text-sm">
        {description}
      </p>
    </div>
  );
}
