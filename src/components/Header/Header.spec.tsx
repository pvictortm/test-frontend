import React from 'react';
import { render } from '@testing-library/react'
import Header from './Header';

describe('Header component test', () => {
    test('renders without crashing', () => {
        render(<Header/>);

        const header = screen.getByTestId('header')

        expect(header).toBeInTheDocument();
    });
});