import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LangProvider } from '../context/LangContext';

import NameData from '../components/NameData/NameData';
import i18n from '../lang/I18Config';

describe('testSuite', () => {
  beforeEach(() => {
    i18n.init();
  });

  test('Error is shown', async () => {
    const user = userEvent.setup();

    render(
      <LangProvider>
        <NameData />
      </LangProvider>,
    );

    const sendButton = screen.getByText('Send');

    await user.click(sendButton);

    const elementName = screen.getByText('Introduce name');
    expect(elementName).toBeDefined();
  });
});
