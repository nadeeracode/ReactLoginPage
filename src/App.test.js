import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
    it('true is truthy', () => {
        expect(true).toBe(true);
    });
    it('false is falsy', () => {
        expect(false).toBe(false);
      });
    // it('renders headline', () => {
    //     render(<App/>);
    //     screen.debug();
    //     // check if App components renders headline
    // });
});
