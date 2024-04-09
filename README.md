# How to Write Unit Tests in React

This tutorial will guide you through writing unit tests in Next.js using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). By the end, you'll be able to test components, simulate user interactions, test state updates, and make API calls.

## Table of Contents

- [Introduction](#introduction)
- [Setting Up Your Project](#setting-up-your-project)
- [Writing Your First Test](#writing-your-first-test)
- [Testing with Mock Data](#testing-with-mock-data)
- [Testing User Interactions](#testing-user-interactions)
- [Testing State Updates](#testing-state-updates)
- [Testing API Calls](#testing-api-calls)
- [Conclusion](#conclusion)

## Introduction

When building a website, it's crucial to ensure that each unit of your code works as expected. Unit tests help you achieve this by comparing the expected output with the actual output of your code.

In this tutorial, we'll cover the basics of writing unit tests for Next.js Application. We'll use [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

## Setting Up Your Project

First, create a new Next.js application using this command

```
npx create-next-app@latest
```
Then install [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
```
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

Create a file and name it `jest.config.js` and paste this code inside it.

```jsx
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
```

As you can see, the config file requires us to create one more file to make our tests work. This setup file will be included before every test and we'll use it to import React Testing Libary in every test so we don't need to do it manually.

Let's create the setup file now. It must be called `jest.setup.js` and should contain the following line:

```jsx
// file: jest.setup.js
import "@testing-library/jest-dom";
```

And finally you have to add these following lines in your `package.json`:

```json
"scripts": {
  "test": "jest --watch",
  "test-coverage": "jest --coverage --verbose"
}
```

Now whenever you run the `npm run test` command you will run the testing suite:

## How to Test Components using React Testing Library

Before we write our first test, let's create a directory where we'll store them. By default, tests are stored in the directory called `__tests__`. This name seems strange but it has a good reason to have double underscore pre- and postfixes. Thanks to these, your test directory will be always at the top of your project tree.


## Writing Your First Test

We'll start with a basic test for a simple component that renders an `<h2>` element and four boxes in it. Create a new file named `FirstTest.jsx` (component) and `FirstTest.test.jsx` (testing):

```jsx
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
```

## Testing with Mock Data

Next, we'll test a component that displays a list of items. We'll pass mock data as a prop to the component and test if the list renders correctly:

```jsx
// Mock data
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
```

## Testing User Interactions

Testing user interactions is crucial. For example, we can test if a button click toggles the visibility of a text:

```jsx
import { render, screen } from '@testing-library/react'
import TestUserInteractions from '../components/TestUserInteractions'
import userEvent from '@testing-library/user-event'

describe('User Interactions', () => {
    it("should interact with elements", () => {
        render(<TestUserInteractions />)

        // const inputElement = screen.getByRole('textbox')
        const nameInput = screen.getByPlaceholderText(/enter name/i);
        const descrInput = screen.getByPlaceholderText(/enter description/i);
        const passwordInput = screen.getByLabelText(/enter password/i);
        const submitButton = screen.getByRole('button', { name: /submit/i });
        const applyButton = screen.getByRole('button', { name: /apply/i });

        // Perform interactions using userEvent
        userEvent.type(nameInput, 'John Doe');
        userEvent.type(descrInput, 'Some description');
        userEvent.type(passwordInput, 'password123');
        userEvent.click(submitButton);
        userEvent.click(applyButton);

        // Add assertions here
    })
})
```

## Testing State Updates

State updates are a common part of React components. We can test if a component behaves as expected after a state update:

```jsx
// api testing
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
```

## Testing API Calls

Finally, we'll test a component that makes an API call to fetch data. We'll mock the API call and test if the data is rendered correctly, I am using news api for this you can use api you desire:

```jsx
// Mock API call
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TestingAPICalls from '../components/TestingAPICalls';
import * as Services from '../utils/Services';

jest.mock('../utils/Services');

describe('Testing API Calls', () => {
    // i have just taken the first object from the data and checking it, if my api call is working perfectly
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
```

## Conclusion

Unit testing is essential for ensuring your React components work as expected. With Jest and React Testing Library, you can easily write and run tests for your components, user interactions, state updates, and API calls.

---

Note - I have not included redirection with links testing in it, I have tried it but it did not worked in next.js for me if you can provide me any solution regarding it, then I would be very helpful for me

Thanks

Happy Testing 😀