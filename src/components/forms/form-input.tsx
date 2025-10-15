'use client';

import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label htmlFor={props.id} className="text-foreground block text-sm font-medium">
            {label}
            {props.required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={`border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring w-full rounded-lg border px-4 py-2 transition-colors focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? 'border-destructive focus:ring-destructive' : ''
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="text-destructive text-sm" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && <p className="text-muted-foreground text-sm">{helperText}</p>}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';
