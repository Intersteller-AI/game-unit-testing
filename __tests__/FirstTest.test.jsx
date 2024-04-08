import { render, screen } from '@testing-library/react'
import FirstTest from '../components/FirstTest';

describe("FirstTest", () => {
    it("should have first test on the screen", () => {
        const { container } = render(
            <FirstTest />,
        );
        const element = screen.getByText(/first test/i);
        expect(element).toBeInTheDocument();
    });

    it("should render four squares with specified background colors", () => {
        render(<FirstTest />);
        const blueSquare = screen.getByTestId('blue-square');
        const redSquare = screen.getByTestId('red-square');
        const yellowSquare = screen.getByTestId('yellow-square');
        const greenSquare = screen.getByTestId('green-square');

        expect(blueSquare).toBeInTheDocument();
        expect(redSquare).toBeInTheDocument();
        expect(yellowSquare).toBeInTheDocument();
        expect(greenSquare).toBeInTheDocument();

        const allSquares = screen.getAllByTestId(/square/);
        expect(allSquares).toHaveLength(4);
    });
});


