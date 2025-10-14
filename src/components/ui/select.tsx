'use client';

import { Fragment, forwardRef } from 'react';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Transition,
} from '@headlessui/react';
import { ChevronDown, Check } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
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

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      placeholder = 'Select an option',
      options,
      value,
      onChange,
      disabled = false,
      required = false,
      id,
      className = '',
    },
    ref
  ) => {
    const selectedOption = options.find((option) => option.value === value);

    return (
      <div className={`w-full space-y-2 ${className}`}>
        {label && (
          <label htmlFor={id} className="text-foreground block text-sm font-medium">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}

        <Listbox value={value} onChange={onChange} disabled={disabled}>
          <div className="relative">
            <ListboxButton
              ref={ref}
              id={id}
              className={`border-input bg-background text-foreground focus:ring-ring relative w-full cursor-default rounded-lg border py-2 pr-10 pl-4 text-left transition-colors focus:ring-2 focus:outline-none ${
                error ? 'border-destructive focus:ring-destructive' : ''
              } ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-accent/50'}`}
            >
              <span className="block truncate">
                {selectedOption ? selectedOption.label : placeholder}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronDown className="text-muted-foreground h-4 w-4" aria-hidden="true" />
              </span>
            </ListboxButton>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="border-border bg-background text-foreground absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border py-1 shadow-lg focus:outline-none">
                {options.map((option) => (
                  <ListboxOption
                    key={option.value}
                    className={({ active }) =>
                      `relative cursor-default py-2 pr-4 pl-10 transition-colors select-none ${
                        active ? 'bg-accent text-accent-foreground' : ''
                      }`
                    }
                    value={option.value}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                        >
                          {option.label}
                        </span>
                        {selected ? (
                          <span className="text-primary absolute inset-y-0 left-0 flex items-center pl-3">
                            <Check className="h-4 w-4" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </Listbox>

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

Select.displayName = 'Select';
