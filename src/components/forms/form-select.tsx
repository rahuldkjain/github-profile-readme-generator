'use client';

import { forwardRef } from 'react';
import { Select, type SelectOption } from '@/components/ui/select';

export interface FormSelectProps {
  label?: string;
  error?: string;
  helperText?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  className?: string;
}

export const FormSelect = forwardRef<HTMLButtonElement, FormSelectProps>((props, ref) => {
  return <Select ref={ref} {...props} />;
});

FormSelect.displayName = 'FormSelect';
