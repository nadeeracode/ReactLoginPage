import {render, screen} from '@testing-library/react';

import LoginForm from '../LoginForm';

describe('test login form', () => {
    it('Render Username', async () => {
        render(<LoginForm />);
        const usernameElement = screen.getByPlaceholderText(/Username/i);
        expect(usernameElement).toBeInTheDocument();
    });
    it('Username Enabled', async () => {
        render(<LoginForm />);
        const usernameElement = screen.getByPlaceholderText(/Username/i);
        expect(usernameElement).toBeEnabled();
    });
    it('Render Password', async () => {
        render(<LoginForm />);
        const passwordElement = screen.getByPlaceholderText(/Password/i);
        expect(passwordElement).toBeInTheDocument();
    });
    it('Password Enabled', async () => {
        render(<LoginForm />);
        const passwordElement = screen.getByPlaceholderText(/Password/i);
        expect(passwordElement).toBeEnabled();
    });
    it('LoginButton Enabled', () => {
        render(<LoginForm />);
        //const loginButtonElement = screen.getByText(/Login/);
        const loginButtonElement = screen.getByRole(/button/);
        expect(loginButtonElement).toBeEnabled();
    })
});