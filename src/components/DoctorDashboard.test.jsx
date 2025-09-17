import { render, screen } from '@testing-library/react';
import DoctorDashboard from './DoctorDashboard';

test('renders DoctorDashboard heading', () => {
  render(<DoctorDashboard />);
  expect(screen.getByText(/Doctor Dashboard/i)).toBeInTheDocument();
});
