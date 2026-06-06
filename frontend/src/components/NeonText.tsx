import React from 'react';
import clsx from 'clsx';

interface NeonTextProps {
  children: React.ReactNode;
  color?: 'purple' | 'cyan' | 'pink' | 'green';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  glow?: boolean;
  className?: string;
}

const NeonText: React.FC<NeonTextProps> = ({
  children,
  color = 'purple',
  size = 'md',
  glow = false,
  className,
}) => {
  const colorClasses = {
    purple: 'text-purple-400',
    cyan: 'text-cyan-400',
    pink: 'text-pink-400',
    green: 'text-emerald-400',
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-2xl',
    xl: 'text-3xl',
    '2xl': 'text-4xl',
  };

  const glowClasses = {
    purple: 'drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]',
    cyan: 'drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]',
    pink: 'drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]',
    green: 'drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]',
  };

  return (
    <span
      className={clsx(
        colorClasses[color],
        sizeClasses[size],
        glow && glowClasses[color],
        'font-bold tracking-wider',
        className
      )}
    >
      {children}
    </span>
  );
};

export default NeonText;
