import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input Component", () => {
  it("renders the input field with label and placeholder", () => {
    const label = "Username";
    const id = "username";
    const placeholder = "Enter your username";

    render(<Input label={label} id={id} placeholder={placeholder} />);

    const labelElement = screen.getByText(label);
    const inputElement = screen.getByPlaceholderText(placeholder);

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();

    expect(inputElement).toHaveAttribute("id", id);
    expect(inputElement).toHaveAttribute("name", id);
    expect(inputElement).toHaveAttribute("type", "text");
  });

  it("renders with custom class name", () => {
    const label = "Email";
    const id = "email";
    const placeholder = "Enter your email";
    const className = "custom-class";

    render(
      <Input
        label={label}
        id={id}
        placeholder={placeholder}
        classNameContainer={className}
      />
    );

    const containerElement = screen.getByTestId("input-container");

    expect(containerElement).toHaveClass(className);
  });
});
