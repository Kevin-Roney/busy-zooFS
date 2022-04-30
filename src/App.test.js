import { render, screen } from '@testing-library/react';
import App from './App';
import FightClub from './FightClub/FightClub';

test('renders Welcome to the Sketchy Roadside Zoo! string', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the Sketchy Roadside Zoo!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders The Shark is charging up! button', () => {
  render(<FightClub />);
  const linkElement = screen.getByText(/The Shark is charging up!/i);
  expect(linkElement).toBeInTheDocument();
});
