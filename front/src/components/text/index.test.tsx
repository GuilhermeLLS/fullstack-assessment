import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Text from "./index";

describe("<Text />", () => {
  test("should return text with <span> tag", () => {
    const fakeTag = "span";
    const fakeText = "text";

    render(<Text tag={fakeTag} text={fakeText} />);

    expect(screen.getByText(fakeText).tagName).toBe("SPAN");
  });
  test("should return text with <h1> tag", () => {
    const fakeTag = "h1";
    const fakeText = "text";

    render(<Text tag={fakeTag} text={fakeText} />);

    expect(screen.getByRole("heading")).toHaveTextContent(fakeText);
  });
  test("should return text with <span> tag, since invalid tag was provided", () => {
    const fakeTag = "button";
    const fakeText = "text";

    render(<Text tag={fakeTag} text={fakeText} />);

    expect(screen.getByText(fakeText).tagName).toBe("SPAN");
  });
});
