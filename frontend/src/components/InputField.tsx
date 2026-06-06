import React from 'react';
import clsx from 'clsx';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  hint?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  icon,
  hint,
  className,
  id,
  ...props
}) => {
  const uniqueId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full space-y-2">
      {label && (
        <label
          htmlFor={uniqueId}
          className="block text-sm font-medium text-slate-200"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}
        <input
          id={uniqueId}
          className={clsx(
            'w-full px-4 py-3 rounded-lg',
            'bg-slate-900/50 border border-slate-700/50',
            'text-white placeholder-slate-400',
            'backdrop-blur-xl transition-all duration-200',
            'focus:outline-none focus:border-purple-400/50 focus:ring-1 focus:ring-purple-400/20',
            'hover:border-slate-600/50',
            error && 'border-red-400/50 focus:border-red-400/50 focus:ring-red-400/20',
            icon && 'pl-10',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      {hint && !error && <p className="text-sm text-slate-400">{hint}</p>}
    </div>
  );
};

export default InputField;
