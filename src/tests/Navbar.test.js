import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Navbar from '../commonComponents/Navbar/Navbar';
import i18n from '../lang/I18Config';
import { LangProvider } from '../context/LangContext';

describe('testSuite', () => {
  beforeEach(() => {
    i18n.init();
  });

  test('Navbar is render', () => {
    render(
      <BrowserRouter>
        <LangProvider>
          <Navbar />
        </LangProvider>
      </BrowserRouter>,
    );
    const elementName = screen.getByText('Name');
    expect(elementName).toBeDefined();
    const elemetnGeneralInfo = screen.getByText('General Information');
    expect(elemetnGeneralInfo).toBeDefined();
    const elementOneDay = screen.getByText('1 Day Information');
    expect(elementOneDay).toBeDefined();
  });

  test('Language test', async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <LangProvider>
          <Navbar />
        </LangProvider>
      </BrowserRouter>,
    );

    const englishButton = screen.getByText('en');

    await user.click(englishButton);

    const elementName = screen.getByText('Nombre');
    expect(elementName).toBeDefined();
  });
});
