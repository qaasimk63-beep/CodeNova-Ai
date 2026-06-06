import React from 'react';
import clsx from 'clsx';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const GlassButton: React.FC<GlassButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  className,
  disabled,
  children,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-semibold backdrop-blur-md border transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

  const variants = {
    primary:
      'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 text-white hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-300/50 hover:shadow-glow focus:ring-purple-500/50',
    secondary:
      'bg-cyan-500/10 border-cyan-400/30 text-cyan-100 hover:bg-cyan-500/20 hover:border-cyan-300/50 hover:shadow-glow-neon focus:ring-cyan-500/50',
    danger:
      'bg-red-500/10 border-red-400/30 text-red-100 hover:bg-red-500/20 hover:border-red-300/50 hover:shadow-lg focus:ring-red-500/50',
    success:
      'bg-emerald-500/10 border-emerald-400/30 text-emerald-100 hover:bg-emerald-500/20 hover:border-emerald-300/50 hover:shadow-lg focus:ring-emerald-500/50',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
      {icon && icon}
      {loading ? <span className="animate-spin">⚙</span> : children}
    </button>
  );
};

export default GlassButton;
