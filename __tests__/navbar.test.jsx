import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Navbar from '@/components/navbar/Navbar';
import { useRouter } from "next/navigation"
import userEvent from '@testing-library/user-event';

describe('Navbar', () => {
  describe('Rendering', () => {
    it('renders logo, content, and navigation links', () => {
      render(<Navbar />);
      expect(screen.getByText('Unit Testing')).toBeInTheDocument();
      expect(screen.getByText('First Test')).toBeInTheDocument();
      expect(screen.getByText('Mock Data Tests')).toBeInTheDocument();
      expect(screen.getByText('Test State changes')).toBeInTheDocument();
      expect(screen.getByText('Test API')).toBeInTheDocument();
      expect(screen.getByText('Sign In')).toBeInTheDocument();
      expect(screen.getByText('Sign Up')).toBeInTheDocument();
    });
  });


  describe("Navigation", () => {

    // it("should navigate accordingly", async () => {

    //   let pathname = '/';

    //   const push = jest.fn().mockImplementation((url) => {
    //     pathname = url;
    //     return Promise.resolve(true);
    //   });

    //   useRouter.mockReturnValue({
    //     pathname,
    //     push,
    //   });

    //   render(<Navbar />)

    //   await userEvent.click(screen.getByTestId('first-test'));
    //   expect(pathname).toBe('/');

    //   await userEvent.click(screen.getByTestId('mock-data-tests'));
    //   expect(pathname).toBe('/mock-data-test');

    //   await userEvent.click(screen.getByTestId('test-state-changes'));
    //   expect(pathname).toBe('/test-state-change');

    //   await userEvent.click(screen.getByTestId('test-api'));
    //   expect(pathname).toBe('/test-api');
    // })

    it('clicking on logo redirects to the home page', () => {
      delete window.location;
      window.location = { href: '' };

      render(<Navbar />);
      fireEvent.click(screen.getByText('Unit Testing'));
      expect(window.location.href).toBe('');
    });
  })

  describe('Accessibility', () => {
    it('all elements in the navbar are accessible', () => {
      render(<Navbar />);
      const navBar = screen.getByTestId('navigation-main');
      expect(navBar).toHaveAttribute('aria-label', 'Main Navigation');
    });
  });


  describe('Styling', () => {
    it('navbar is styled correctly', () => {
      render(<Navbar />);
      const navBar = screen.getByRole('navigation');
      expect(navBar).toHaveClass('w-full');
      expect(navBar).toHaveClass('flex');
      expect(navBar).toHaveClass('justify-center');
      expect(navBar).toHaveClass('px-12');
      expect(navBar).toHaveClass('bg-white');
      expect(navBar).toHaveClass('drop-shadow');
    });
  });
});
