import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("Should", () => {
    const view = render(<Button title={'TITLE_BUTTON_PREVIEW'}
        onClickButton={() => {}} />);

        expect(view).toBeDefined();
  });
});
