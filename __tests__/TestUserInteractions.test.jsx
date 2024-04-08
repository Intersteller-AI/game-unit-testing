import { render, screen } from '@testing-library/react'
import TestUserInteractions from '../components/TestUserInteractions'
import userEvent from '@testing-library/user-event'

describe('User Interactions', () => {
    it("should interact with elements", () => {
        render(<TestUserInteractions />)

        // const inputElement = screen.getByRole('textbox')
        const nameInput = screen.getByPlaceholderText(/enter name/i);
        const descrInput = screen.getByPlaceholderText(/enter description/i);
        const passwordInput = screen.getByLabelText(/enter password/i);
        const submitButton = screen.getByRole('button', { name: /submit/i });
        const applyButton = screen.getByRole('button', { name: /apply/i });

        // Perform interactions using userEvent
        userEvent.type(nameInput, 'John Doe');
        userEvent.type(descrInput, 'Some description');
        userEvent.type(passwordInput, 'password123');
        userEvent.click(submitButton);
        userEvent.click(applyButton);

        // Add assertions here
    })
})
