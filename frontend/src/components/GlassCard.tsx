import React from 'react';
import clsx from 'clsx';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  neon?: 'purple' | 'cyan' | 'pink' | 'none';
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hover = true,
  neon = 'purple',
  onClick,
}) => {
  const neonClasses = {
    purple: hover
      ? 'hover:shadow-glow hover:border-purple-300/50'
      : 'shadow-glow border-purple-300/30',
    cyan: hover
      ? 'hover:shadow-glow-neon hover:border-cyan-300/50'
      : 'shadow-glow-neon border-cyan-300/30',
    pink: hover
      ? 'hover:shadow-glow-pink hover:border-pink-300/50'
      : 'shadow-glow-pink border-pink-300/30',
    none: '',
  };

  return (
    <div
      onClick={onClick}
      className={clsx(
        'relative rounded-2xl border backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent',
        'transition-all duration-300 overflow-hidden',
        neon && neonClasses[neon],
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5" />
      <div className="relative z-10 p-6">{children}</div>
    </div>
  );
};

export default GlassCard;
