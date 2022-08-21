import { render, screen } from '@testing-library/react';
import Echart from './Echart';
import App from './Echart';

test('renders learn react link', () => {
  render(<Echart />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
