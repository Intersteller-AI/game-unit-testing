import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TestWithMockDataWithBranching from '../components/TestWithMockDataWithBranching'

const mockData = [
    {
        "id": 1,
        "first_name": "Fletcher",
        "last_name": "McVanamy",
        "email": "mmcvanamy0@e-recht24.de",
        "age": 30
    }, {
        "id": 3,
        "first_name": "Amby",
        "last_name": "Emmer",
        "email": "aemmer2@buzzfeed.com",
        "age": 67
    }
]

describe('Test With Mock Data With Branching', () => {
    describe('List renders', () => {
        it('should render successfully with unordered list', () => {
            render(<TestWithMockDataWithBranching data={mockData} displayUnorderedList={true} />)
            expect(screen.getByText(/Fletcher/i)).toBeInTheDocument()
        })

        it('should render successfully with ordered list', () => {
            render(<TestWithMockDataWithBranching data={mockData} displayUnorderedList={false} />)
            expect(screen.getByText(/McVanamy/i)).toBeInTheDocument()
        })
    })

    describe('Email link click handler', () => {
        it('should call the click handler when an email is clicked', async () => {
            const mockHandleClick = jest.fn()
            render(
                <TestWithMockDataWithBranching
                    data={mockData}
                    displayUnorderedList={true}
                    handleClick={mockHandleClick}
                />
            )
            await userEvent.click(screen.getByText(/mmcvanamy0@e-recht24.de/i))
            expect(mockHandleClick).toHaveBeenCalled()
        })
    })
})
