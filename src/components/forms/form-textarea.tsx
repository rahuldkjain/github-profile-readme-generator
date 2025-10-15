'use client';

import { forwardRef } from 'react';
import type { TextareaHTMLAttributes } from 'react';

export interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label htmlFor={props.id} className="text-foreground block text-sm font-medium">
            {label}
            {props.required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <textarea
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

FormTextarea.displayName = 'FormTextarea';
