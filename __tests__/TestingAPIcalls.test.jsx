import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TestingAPICalls from '../components/TestingAPICalls';
import * as Services from '../utils/Services';

jest.mock('../utils/Services');

describe('Testing API Calls', () => {
    it('should fetch and render data', async () => {
        const mockData = [
            {
                source: { id: 'the-times-of-india', name: 'The Times of India' },
                author: 'TIMESOFINDIA.COM',
                title: "Iranian proxy downs Israel's Hermes 900 - The Times of India",
                description:
                    'Hezbollah shot down Israeli Hermes 900 armed drone over Lebanese territory. In response, IDF retaliated with air strikes on the Hezbollah training camp in Lebanon.The spy drone was allegedly on an intel gathering mission over Hezbollah units. Earlier',
                url:
                    'https://timesofindia.indiatimes.com/videos/toi-original/iranian-proxy-downs-israels-hermes-900/videoshow/109104204.cms',
                urlToImage:
                    'https://timesofindia.indiatimes.com/photo/msid-109104204,imgsize-75192.cms',
                publishedAt: '2024-04-07T08:24:54Z',
                content:
                    'Apr 07, 2024, 01:54PM ISTSource: TOI.inHezbollah shot down Israeli Hermes 900 armed drone over Lebanese territory. In response, IDF retaliated with air strikes on the Hezbollah training camp in Leban… [+177 chars]',
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
