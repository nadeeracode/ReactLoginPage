import {render, screen} from '@testing-library/react';

import LoginFooter from '../LoginFooter';

describe('LoginFooter', () => {
    it('footer is visible', () => {
        render(<LoginFooter />);
        const FooterElement = screen.getByTitle('LoginFooter');
        expect(FooterElement).toBeVisible();
    })
});