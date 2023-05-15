import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button clicked", () => {
  it("Should", () => {
    const functionButton = jest.fn();
    const { getByText } = render(<Button title='Click' onClickButton={functionButton}></Button>);

    fireEvent.click(screen.getByText(''));
        expect(functionButton).toBeCalled();
  });
});
