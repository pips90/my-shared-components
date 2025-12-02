import { SharedButton } from "./SharedButton";
import { render, screen } from "@testing-library/react";

it("should render SharedButton with props", () => {
  const text = "Test Button";
  render(<SharedButton buttonText={text} />);
  expect(text).toEqual("Test Button");
  expect(screen.getByText("Test Button")).toBeVisible();
});
