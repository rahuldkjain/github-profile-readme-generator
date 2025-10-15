'use client';

import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

export interface FormCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

export const FormCheckbox = forwardRef<HTMLInputElement, FormCheckboxProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        <div className="flex items-center gap-2">
          <input
            ref={ref}
            type="checkbox"
            className={`border-input bg-background text-primary focus:ring-ring h-4 w-4 rounded transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
              error ? 'border-destructive' : ''
            } ${className}`}
            {...props}
          />
          {label && (
            <label htmlFor={props.id} className="text-foreground text-sm font-medium">
              {label}
            </label>
          )}
        </div>
        {error && (
          <p className="text-destructive text-sm" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormCheckbox.displayName = 'FormCheckbox';
