import * as React from 'react';
import { cn } from '../../utils/cn';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', title, children, ...props }, ref) => {
    const variants = {
      info: 'bg-blue-50/50 text-blue-900 border-blue-200/60 dark:bg-blue-950/20 dark:text-blue-200 dark:border-blue-900/40',
      success: 'bg-emerald-50/50 text-emerald-900 border-emerald-200/60 dark:bg-emerald-950/20 dark:text-emerald-200 dark:border-emerald-900/40',
      warning: 'bg-amber-50/50 text-amber-900 border-amber-200/60 dark:bg-amber-950/20 dark:text-amber-200 dark:border-amber-900/40',
      error: 'bg-red-50/50 text-red-900 border-red-200/60 dark:bg-red-950/20 dark:text-red-200 dark:border-red-900/40',
    };

    // Tiny vector icons built as SVG to keep the package light and dependency-free
    const icons = {
      info: (
        <svg className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.083.984l-.04.02-2.012 1.006a.75.75 0 01-1.083-.984l.012-.006 2.012-1.006zM12 7.5h.008v.008H12V7.5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      success: (
        <svg className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      warning: (
        <svg className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      ),
      error: (
        <svg className="h-4 w-4 shrink-0 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.03L3.07 19.5a1.5 1.5 0 001.27 2.25h15.32a1.5 1.5 0 001.27-2.25L12 2.72zM12 15.75h.008v.008H12v-.008z" />
        </svg>
      ),
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'flex gap-3 p-4 rounded-md border text-[13px] font-sans leading-relaxed transition-all',
          variants[variant],
          className
        )}
        {...props}
      >
        <div className="mt-0.5">{icons[variant]}</div>
        <div className="flex-1 flex flex-col space-y-1">
          {title && <span className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">{title}</span>}
          {children && <div className="text-neutral-600 dark:text-neutral-300">{children}</div>}
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';
