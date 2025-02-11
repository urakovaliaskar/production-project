import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  const buttonText = 'Click me';

  test('renders Button component', () => {
    render(<Button>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });
  test('renders Button component with clear theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toHaveClass('clear');
    screen.debug();
  });
});
