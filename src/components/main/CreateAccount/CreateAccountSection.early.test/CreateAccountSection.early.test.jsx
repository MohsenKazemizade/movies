// Unit tests for: CreateAccountSection

import React from "react";
import CreateAccountSection from "../CreateAccountSection";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CreateAccountSection() CreateAccountSection method", () => {
  // Happy Path Tests
  describe("Happy Paths", () => {
    test("should render the component with the correct heading", () => {
      // Render the component
      render(<CreateAccountSection />);

      // Assert that the heading is present
      const heading = screen.getByRole("heading", {
        name: /create your free account/i,
      });
      expect(heading).toBeInTheDocument();
    });

    test("should render all feature descriptions", () => {
      // Render the component
      render(<CreateAccountSection />);

      // Assert that all feature descriptions are present
      const features = [
        "Manage parental controls for kids and teens",
        "Build your own free watchlist",
        "Save your watch progress",
      ];

      features.forEach((feature) => {
        expect(screen.getByText(feature)).toBeInTheDocument();
      });
    });

    test("should render the Create Account button", () => {
      // Render the component
      render(<CreateAccountSection />);

      // Assert that the Create Account button is present
      const createAccountButton = screen.getByRole("button", {
        name: /create account/i,
      });
      expect(createAccountButton).toBeInTheDocument();
    });

    test("should render the Sign In button", () => {
      // Render the component
      render(<CreateAccountSection />);

      // Assert that the Sign In button is present
      const signInButton = screen.getByRole("button", { name: /sign in/i });
      expect(signInButton).toBeInTheDocument();
    });
  });

  // Edge Case Tests
  describe("Edge Cases", () => {
    test("should handle missing SVG elements gracefully", () => {
      // Render the component
      render(<CreateAccountSection />);

      // Assert that the SVG elements are present
      const svgs = screen.getAllByRole("img");
      expect(svgs.length).toBe(3);
    });

    test("should handle unexpected class names gracefully", () => {
      // Render the component
      render(<CreateAccountSection />);

      // Assert that the container has the expected class
      const container = screen.getByRole("region");
      expect(container).toHaveClass("container");
    });
  });
});

// End of unit tests for: CreateAccountSection
