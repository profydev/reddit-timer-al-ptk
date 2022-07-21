import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Header', () => {
  it.each([
    ['logo', /reddit timer logo/i],
    ['search', /search/i],
    ['how it works', /how it works/i],
    ['about', /about/i],
  ])('"%s" link gets rendered', (title, pattern) => {
    render(<App />);
    const link = screen.getByRole('link', { name: pattern });
    expect(link).toBeInTheDocument();
  });
});
