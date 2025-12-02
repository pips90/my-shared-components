import { SharedInput } from "./SharedInput";
import { render, screen } from "@testing-library/react";

it("should render SharedButton with props", () => {
  const text = "Test Input";
  const inputType = "text";
  render(<SharedInput type={inputType} placeholderText={text} />);
  expect(text).toEqual("Test Input");
  expect(screen.getByPlaceholderText("Test Input")).toBeVisible();
  expect(inputType).toEqual("text");
});
