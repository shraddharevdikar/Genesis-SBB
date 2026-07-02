import * as React from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error = false, helperText, label, disabled, id, ...props }, ref) => {
    const inputId = id || React.useId();
    
    return (
      <div className="w-full flex flex-col space-y-1.5 font-sans" id={`input-container-${inputId}`}>
        {label && (
          <label 
            htmlFor={inputId}
            className="text-[10px] uppercase tracking-widest font-mono font-bold text-neutral-500 dark:text-neutral-400"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          ref={ref}
          disabled={disabled}
          className={cn(
            'flex h-10 w-full rounded border bg-[#FCFCFD] px-3.5 py-2 text-[13px] text-neutral-900 shadow-sm transition-all placeholder:text-neutral-400 focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[#09090A] dark:text-stone-100 dark:placeholder:text-stone-600',
            // Default State
            'border-neutral-200 focus:border-neutral-800 focus:ring-neutral-800 dark:border-neutral-800 dark:focus:border-stone-400 dark:focus:ring-stone-400',
            // Error State
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-900 dark:focus:border-red-500 dark:focus:ring-red-500',
            className
          )}
          {...props}
        />
        {helperText && (
          <p className={cn(
            'text-[10px] leading-tight font-sans',
            error ? 'text-red-500 dark:text-red-400' : 'text-neutral-500 dark:text-neutral-400'
          )}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
