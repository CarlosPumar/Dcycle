import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../commonComponents/Navbar/Navbar';

test('Navbar is render', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  const elementCovid = screen.getByText('Covid');
  expect(elementCovid).toBeDefined();
  const elementName = screen.getByText('Name');
  expect(elementName).toBeDefined();
});
