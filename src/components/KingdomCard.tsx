import Link from 'next/link';

interface KingdomCardProps {
  name: string;
  description: string;
  href: string;
  icon: string;
  color: 'meltoria' | 'sylvestri' | 'anduin';
  features: string[];
}

export default function KingdomCard({ name, description, href, icon, color, features }: KingdomCardProps) {
  const colorClasses = {
    meltoria: 'border-meltoria/50 hover:border-meltoria hover:shadow-meltoria/20',
    sylvestri: 'border-sylvestri/50 hover:border-sylvestri hover:shadow-sylvestri/20',
    anduin: 'border-anduin/50 hover:border-anduin hover:shadow-anduin/20',
  };

  const textColorClasses = {
    meltoria: 'text-meltoria',
    sylvestri: 'text-sylvestri',
    anduin: 'text-anduin',
  };

  const bgGradients = {
    meltoria: 'from-meltoria/10 to-transparent',
    sylvestri: 'from-sylvestri/10 to-transparent',
    anduin: 'from-anduin/10 to-transparent',
  };

  return (
    <Link href={href} className="block group">
      <div className={`
        relative overflow-hidden rounded-xl border-2 p-6 
        bg-gradient-to-br ${bgGradients[color]} bg-black/40
        ${colorClasses[color]}
        card-hover cursor-pointer
      `}>
        {/* Icon */}
        <div className="text-5xl mb-4">{icon}</div>
        
        {/* Title */}
        <h3 className={`text-2xl font-bold mb-3 ${textColorClasses[color]}`}>
          {name}
        </h3>
        
        {/* Description */}
        <p className="text-foreground/70 mb-4 line-clamp-3">
          {description}
        </p>
        
        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-foreground/60">
              <span className={`mr-2 ${textColorClasses[color]}`}>◆</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Hover Arrow */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className={`text-2xl ${textColorClasses[color]}`}>→</span>
        </div>
      </div>
    </Link>
  );
}
