import * as React from 'react';
import { cn } from '../../utils/cn';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'neutral' | 'current';
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = 'md', variant = 'primary', ...props }, ref) => {
    const sizes = {
      xs: 'h-3 w-3 border-[1.5px]',
      sm: 'h-4 w-4 border-2',
      md: 'h-6 w-6 border-2',
      lg: 'h-10 w-10 border-[3px]',
    };

    const variants = {
      primary: 'border-neutral-200 border-t-stone-900 dark:border-stone-800 dark:border-t-stone-100',
      neutral: 'border-stone-200 border-t-stone-500 dark:border-stone-800 dark:border-t-stone-400',
      current: 'border-current/25 border-t-current',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'animate-spin rounded-full border-solid',
          sizes[size],
          variants[variant],
          className
        )}
        role="status"
        aria-label="Loading"
        {...props}
      />
    );
  }
);

Spinner.displayName = 'Spinner';
