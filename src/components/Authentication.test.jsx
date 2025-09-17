import { render, screen } from '@testing-library/react';
import Authentication from './Authentication';

test('renders Authentication heading', () => {
  render(<Authentication />);
  expect(screen.getByText(/Authentication/i)).toBeInTheDocument();
});
