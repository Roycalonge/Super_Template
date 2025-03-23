import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageCarousel from './ImageCarousel';

describe('ImageCarousel Component', () => {
    test('renders without crashing', () => {
        render(<ImageCarousel />);
        const carouselElement = screen.getByTestId('image-carousel');
        expect(carouselElement).toBeInTheDocument();
    });

    // Add more tests as needed
});