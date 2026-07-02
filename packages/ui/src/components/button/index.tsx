import * as React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading = false, disabled, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-sans font-medium rounded transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]';
    
    const variants = {
      primary: 'bg-stone-900 text-stone-100 hover:bg-stone-800 border border-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 dark:border-stone-200 shadow-sm focus-visible:ring-stone-500',
      secondary: 'bg-stone-100 text-stone-900 hover:bg-stone-200 border border-stone-200 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800 dark:border-stone-800 focus-visible:ring-stone-400',
      outline: 'bg-transparent text-stone-900 hover:bg-stone-100 border border-stone-200 dark:text-stone-100 dark:hover:bg-stone-900 dark:border-stone-800 focus-visible:ring-stone-500',
      ghost: 'bg-transparent text-stone-700 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-300 dark:hover:bg-stone-900 dark:hover:text-stone-100',
      danger: 'bg-red-600 text-white hover:bg-red-700 border border-red-700 dark:bg-red-900/40 dark:text-red-200 dark:hover:bg-red-950 dark:border-red-900 focus-visible:ring-red-500'
    };

    const sizes = {
      sm: 'h-8 px-3 text-[11px] gap-1.5',
      md: 'h-10 px-4 text-[13px] gap-2',
      lg: 'h-12 px-6 text-[15px] gap-2.5'
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" 
            fill="none" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
