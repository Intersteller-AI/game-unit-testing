import { render, screen } from '@testing-library/react';
import TestWithMockData from '../components/TestWithMockData';

const mockData = [
  { id: 1, first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com' },
  { id: 2, first_name: 'Jane', last_name: 'Smith', email: 'jane.smith@example.com' },
];

describe('Test With Mock Data', () => {
  it('should render the component with mock data', () => {
    render(<TestWithMockData data={mockData} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(mockData.length);
  });

  it('should render each item correctly', () => {
    render(<TestWithMockData data={mockData} />);
    mockData.forEach(item => {
      expect(screen.getByText(`${item.first_name} ${item.last_name}`)).toBeInTheDocument();
      expect(screen.getByText(item.email)).toBeInTheDocument();
      expect(screen.getByText(item.id.toString())).toBeInTheDocument();
    });
  });
});
