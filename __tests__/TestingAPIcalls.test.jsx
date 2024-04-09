import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TestingAPICalls from '../components/TestingAPICalls';
import * as Services from '../utils/Services';

jest.mock('../utils/Services');

describe('Testing API Calls', () => {
    it('should fetch and render data', async () => {
        const mockData = [
            {
                "source": {
                    "id": "the-hindu",
                    "name": "The Hindu"
                },
                "author": "The Hindu",
                "title": "Ahead of election, People Living with HIV/AIDS put forward their demands - The Hindu",
                "description": null,
                "url": "https://www.thehindu.com/news/cities/chennai/ahead-of-election-people-living-with-hivaids-put-forward-their-demands/article68042200.ece",
                "urlToImage": null,
                "publishedAt": "2024-04-08T19:24:00Z",
                "content": null
            },
        ];

        Services.FetchData.mockResolvedValue({ articles: mockData });

        render(<TestingAPICalls />);

        // Assert that FetchData was called
        expect(Services.FetchData).toHaveBeenCalledTimes(1);

        // Wait for data to be loaded and rendered
        await waitFor(() => {
            // Assert that each item's title is rendered
            mockData.forEach((item, key) => {
                expect(screen.getByText(item.title)).toBeInTheDocument();
            });
        });
    });
});
