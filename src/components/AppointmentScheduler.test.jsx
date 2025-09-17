import { render, screen } from '@testing-library/react';
import AppointmentScheduler from './AppointmentScheduler';

test('renders AppointmentScheduler heading', () => {
  render(<AppointmentScheduler />);
  expect(screen.getByText(/Appointment Scheduler/i)).toBeInTheDocument();
});
