import { render, screen } from '@testing-library/react';
import PatientRecords from './PatientRecords';

test('renders PatientRecords heading', () => {
  render(<PatientRecords />);
  expect(screen.getByText(/Patient Records/i)).toBeInTheDocument();
});
