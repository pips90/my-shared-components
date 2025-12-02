import { SharedButton } from "./SharedButton";
import { render, screen } from "@testing-library/react";

it("should render SharedButton with props", () => {
  const text = "Test Button";
  const size = "medium";
  render(<SharedButton buttonText={text} size={size} />);
  expect(size).toEqual("medium");
  expect(text).toEqual("Test Button");
  expect(screen.getByText("Test Button")).toBeVisible();
});
