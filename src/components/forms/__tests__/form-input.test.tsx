import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { FormInput } from '../form-input';

describe('FormInput', () => {
  it('renders basic input with label', () => {
    render(<FormInput id="test-input" label="Test Label" />);

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders without label when not provided', () => {
    render(<FormInput id="test-input" placeholder="Enter text" />);

    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    expect(screen.queryByRole('label')).not.toBeInTheDocument();
  });

  it('shows required asterisk when required prop is true', () => {
    render(<FormInput id="test-input" label="Required Field" required />);

    expect(screen.getByText('*')).toBeInTheDocument();
    expect(screen.getByText('*')).toHaveClass('text-destructive');
  });

  it('displays error message when error prop is provided', () => {
    const errorMessage = 'This field is required';
    render(<FormInput id="test-input" label="Test Field" error={errorMessage} />);

    const errorElement = screen.getByRole('alert');
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(errorMessage);
    expect(errorElement).toHaveClass('text-destructive');
  });

  it('displays helper text when provided and no error', () => {
    const helperText = 'This is helpful information';
    render(<FormInput id="test-input" label="Test Field" helperText={helperText} />);

    expect(screen.getByText(helperText)).toBeInTheDocument();
    expect(screen.getByText(helperText)).toHaveClass('text-muted-foreground');
  });

  it('hides helper text when error is present', () => {
    const helperText = 'This is helpful information';
    const errorMessage = 'Error occurred';

    render(
      <FormInput id="test-input" label="Test Field" helperText={helperText} error={errorMessage} />
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.queryByText(helperText)).not.toBeInTheDocument();
  });

  it('applies error styling when error is present', () => {
    render(<FormInput id="test-input" label="Test Field" error="Error message" />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-destructive', 'focus:ring-destructive');
  });

  it('applies custom className', () => {
    const customClass = 'custom-input-class';
    render(<FormInput id="test-input" className={customClass} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveClass(customClass);
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<FormInput ref={ref} id="test-input" />);

    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });

  it('handles user input correctly', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<FormInput id="test-input" onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'Hello World');

    expect(input).toHaveValue('Hello World');
    expect(handleChange).toHaveBeenCalled();
  });

  it('passes through all HTML input attributes', () => {
    render(
      <FormInput
        id="test-input"
        type="email"
        placeholder="Enter email"
        disabled
        maxLength={50}
        data-testid="email-input"
      />
    );

    const input = screen.getByTestId('email-input');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('placeholder', 'Enter email');
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute('maxLength', '50');
  });

  it('associates label with input using htmlFor and id', () => {
    render(<FormInput id="test-input" label="Test Label" />);

    const label = screen.getByText('Test Label');
    const input = screen.getByRole('textbox');

    expect(label).toHaveAttribute('for', 'test-input');
    expect(input).toHaveAttribute('id', 'test-input');
  });

  it('has proper accessibility attributes for error state', () => {
    render(<FormInput id="test-input" label="Test Field" error="Error message" />);

    const errorElement = screen.getByRole('alert');
    expect(errorElement).toHaveAttribute('role', 'alert');
  });
});
