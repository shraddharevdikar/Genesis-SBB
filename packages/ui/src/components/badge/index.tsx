import * as React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'success' | 'warning' | 'destructive' | 'info';
  pill?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', pill = false, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 border select-none transition-all';
    
    const variants = {
      default: 'bg-stone-900 text-stone-100 border-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:border-stone-200',
      secondary: 'bg-stone-100 text-stone-800 border-stone-200 dark:bg-stone-900 dark:text-stone-200 dark:border-stone-800',
      outline: 'bg-transparent text-stone-900 border-stone-200 dark:text-stone-100 dark:border-stone-800',
      success: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30',
      warning: 'bg-amber-500/10 text-amber-700 border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30',
      destructive: 'bg-red-500/10 text-red-700 border-red-500/20 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30',
      info: 'bg-blue-500/10 text-blue-700 border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30'
    };

    return (
      <span
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          pill ? 'rounded-full' : 'rounded-sm',
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
