import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 2', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react online/i);
  expect(linkElement).toBeInTheDocument();
});