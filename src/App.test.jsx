import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('megjeleníti a propsban kapott neveket és az alapértelmezett nevet', () => {
  render(<App />);
  expect(screen.getByText('Szia, Alice!')).toBeInTheDocument();
  expect(screen.getByText('Szia, Bob!')).toBeInTheDocument();
  expect(screen.getByText('Szia, Vendég!')).toBeInTheDocument();
});

test('a számláló gombjai módosítják az értéket', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: '+1' }));
  fireEvent.click(screen.getByRole('button', { name: '+1' }));
  fireEvent.click(screen.getByRole('button', { name: '-1' }));
  expect(screen.getByText('Aktuális érték: 1')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Nullázás' }));
  expect(screen.getByText('Aktuális érték: 0')).toBeInTheDocument();
});

test('a bejelentkezés gomb átváltja a megjelenített tartalmat', () => {
  render(<App />);
  expect(screen.getByText('Kérlek, jelentkezz be!')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Bejelentkezés' }));
  expect(screen.getByText('Üdv újra itt!')).toBeInTheDocument();
  expect(screen.getByText('Ezt csak bejelentkezve látod.')).toBeInTheDocument();
});

test('teendőt lehet hozzáadni és törölni', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/új teendő/i), { target: { value: 'Tesztek írása' } });
  fireEvent.click(screen.getByRole('button', { name: 'Hozzáadás' }));
  expect(screen.getByText(/Tesztek írása/)).toBeInTheDocument();
  expect(screen.getByLabelText(/új teendő/i)).toHaveValue('');

  fireEvent.click(screen.getAllByRole('button', { name: 'Törlés' })[2]);
  expect(screen.queryByText(/Tesztek írása/)).not.toBeInTheDocument();
});

test('üres teendőt nem ad hozzá', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/új teendő/i), { target: { value: '   ' } });
  fireEvent.click(screen.getByRole('button', { name: 'Hozzáadás' }));
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
});
