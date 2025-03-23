import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialLinks from './SocialLinks';

describe('SocialLinks Component', () => {
    test('renders without crashing', () => {
        render(<SocialLinks />);
        const socialLinksElement = screen.getByTestId('social-links');
        expect(socialLinksElement).toBeInTheDocument();
    });

    test('renders all social media links', () => {
        render(<SocialLinks />);
        const links = screen.getAllByRole('link');
        expect(links.length).toBeGreaterThan(0);
    });
});