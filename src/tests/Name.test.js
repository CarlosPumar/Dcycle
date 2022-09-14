import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NameData from '../components/NameData/NameData';

test('Error is shown', async () => {
  const user = userEvent.setup();

  render(<NameData />);

  const sendButton = screen.getByText('Enviar');

  await user.click(sendButton);

  const elementName = screen.getByText('Introduce un nombre');
  expect(elementName).toBeDefined();
});
