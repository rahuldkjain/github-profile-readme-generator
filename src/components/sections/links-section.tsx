'use client';

import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormInput } from '@/components/forms/form-input';
import type { LinksFormData } from '@/lib/validations';

interface LinksSectionProps {
  register: UseFormRegister<LinksFormData>;
  errors: FieldErrors<LinksFormData>;
}

export function LinksSection({ register, errors }: LinksSectionProps) {
  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <h2 className="text-2xl font-bold">Links</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Add links to your portfolio, blog, and resume
        </p>
      </div>

      <FormInput
        {...register('portfolio')}
        id="portfolio"
        label="👨‍💻 Portfolio"
        type="url"
        placeholder="https://yourportfolio.com"
        error={errors.portfolio?.message}
        helperText="Your personal website or portfolio"
      />

      <FormInput
        {...register('blog')}
        id="blog"
        label="📝 Blog"
        type="url"
        placeholder="https://yourblog.com"
        error={errors.blog?.message}
        helperText="Where you write articles"
      />

      <FormInput
        {...register('resume')}
        id="resume"
        label="📄 Resume/CV"
        type="url"
        placeholder="https://drive.google.com/your-resume"
        error={errors.resume?.message}
        helperText="Link to your resume or CV"
      />
    </div>
  );
}
