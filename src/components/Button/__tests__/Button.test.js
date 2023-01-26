import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../Button";

describe("Button Component", () => {
  it('should render arrow icon with class "button-arrow-right" by default', () => {
    render(<Button />);
    const arrowIcon = screen.getByAltText("arrow");
    expect(arrowIcon).toHaveClass("button-arrow-right");
  });

  it('should render arrow icon with class "button-arrow-left" when direction prop is "left"', () => {
    render(<Button direction="left" />);
    const arrowIcon = screen.getByAltText("arrow");
    expect(arrowIcon).toHaveClass("button-arrow-left");
  });

  it("should call onChange prop function when button is clicked", () => {
    const mockOnChange = jest.fn();
    render(<Button onChange={mockOnChange} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockOnChange).toHaveBeenCalled();
  });
});
