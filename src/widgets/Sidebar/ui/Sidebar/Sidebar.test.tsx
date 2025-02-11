import { fireEvent, screen } from '@testing-library/react';
import { RenderWithTranslation } from 'shared/lib/tests/RenderWithTranslation/RenderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('renders Sidebar component', () => {
    RenderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    screen.debug();
  });
  test('Toggle Sidebar', () => {
    RenderWithTranslation(<Sidebar />);
    const toggle = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggle);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
