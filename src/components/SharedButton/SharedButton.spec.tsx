import { SharedButton } from "./SharedButton";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("should render SharedButton with props", async () => {
  const text = "Test Button";
  const size = "medium";
  const onClick = jest.fn();
  render(<SharedButton buttonText={text} size={size} onClick={onClick} />);
  expect(size).toEqual("medium");
  expect(text).toEqual("Test Button");
  expect(screen.getByText("Test Button")).toBeVisible();
  await userEvent.click(screen.getByText(text));
  expect(onClick).toHaveBeenCalled();
});
