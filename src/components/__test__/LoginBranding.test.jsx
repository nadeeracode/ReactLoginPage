import { render, screen } from '@testing-library/react';

import LoginBranding from '../LoginBranding';

describe('LoginBranding', () => {
    it('renders logo image', () => {
        render(<LoginBranding />);
        screen.debug();
        // check if App components renders headline
        const logoElement = screen.getByRole('img');
        expect(logoElement).toBeInTheDocument();
    });

});