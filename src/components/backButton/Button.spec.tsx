import React from 'react';
import { render } from '@testing-library/react'
import Button from './Button';

describe('Button component test', () => {
    test('renders without crashing', () => {
        render(<Button/>);

        const button = screen.getByTestId('button')

        expect(button).toBeInTheDocument();
    });
});