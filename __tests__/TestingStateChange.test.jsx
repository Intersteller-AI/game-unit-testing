import { render, screen, waitFor } from "@testing-library/react"
import TestingStateChange from "../components/TestingStateChange"
import userEvent from '@testing-library/user-event'

describe("TestingStateChange component", () => {
    it("renders 'page loaded' text", () => {
        render(<TestingStateChange />)
        expect(screen.getByText(/page loaded/i)).toBeInTheDocument();
    })

    it("toggles text visibility on button click", async () => {
        render(<TestingStateChange />);
        await userEvent.click(screen.getByText(/toggle text/i));
        expect(screen.getByText(/text visible/i)).toBeInTheDocument();
    })

    it("disables button on click", async () => {
        render(<TestingStateChange />)
        await userEvent.click(screen.getByText(/toggle button disabled/i));
        expect(screen.getByText(/toggle text/i)).toBeDisabled();
    })

    it("adds an element to the list", async () => {
        render(<TestingStateChange />)
        expect(screen.getAllByTestId('record').length).toBe(3);

        await userEvent.click(screen.getByText(/add to list/i));
        expect(screen.getAllByTestId('record').length).toBe(4);

        expect(screen.getByText(/priyansh/i)).toBeInTheDocument();
    })

    it("removes an element from the list", async () => {
        render(<TestingStateChange />)
        await userEvent.click(screen.getByText(/remove from list/i));
        expect(screen.getAllByTestId('record').length).toBe(2);
    })
})
