import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders Button with label', () => {
    render(<Button label="Test Button" onClick={() => {}} />);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Clickable Button" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Clickable Button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button label="Disabled Button" onClick={() => {}} disabled />);
    expect(screen.getByText('Disabled Button')).toBeDisabled();
  });
});
