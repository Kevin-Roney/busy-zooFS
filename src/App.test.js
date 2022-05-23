import { fireEvent, render, screen } from '@testing-library/react';
import App from './ZooPage';
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

test('when you click the sun emoji renders We are open, have your waivers signed and cash in hand!', () => {
  render(<App />);
  const closeZooButton = screen.queryByText('Close');
  const openZooButton = screen.queryByText('Open');

  fireEvent.click(closeZooButton);

  const closeZooEl = screen.queryByText(/We are closed.. Too Bad!/i);
  expect(closeZooEl).toBeInTheDocument();

  fireEvent.click(openZooButton);

  const openZooEl = screen.queryByText(/We are open, have your waivers signed and cash in hand!/i);
  expect(openZooEl).toBeInTheDocument();
});

test('When user clicks the Oops all Bats! button it will add a bat emoji to the array', () => {
  render(<App />);
  
  const bats = screen.queryAllByText(/🦇/i);
  const batsInArrayStart = bats.length; 
  const addBatButton = screen.queryByText(/Oops all Bats!/i);
  expect(bats.length).toBe(0);

  fireEvent.click(addBatButton);


  const batsAdded = screen.queryAllByText(/🦇/i);
  expect(batsAdded.length).toBe(batsInArrayStart + 1);
});