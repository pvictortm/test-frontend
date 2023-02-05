import React from 'react';
import { render } from '@testing-library/react'
import Footer from './Footer';
import { Header } from '../Header/Header';

describe('Footer component test', () => {
    test('renders without crashing', () => {
        render(<Footer/>);

        const footer = screen.getByTestId('footer')

        expect(Header).toBeInTheDocument();
    });
});