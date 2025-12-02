import type { Meta, StoryObj } from "@storybook/react";
import { SharedButton } from "./SharedButton";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof SharedButton> = {
  title: "SharedButton component",
  component: SharedButton,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 600,
          margin: "2rem auto",
          border: "1px solid #eee",
          padding: 24,
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "The `SharedButton` component demonstrates the usage of the `SharedButton` component with props.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SharedButton>;
const smallButton = "small";
const mediumButton = "medium";
const largeButton = "large";

const onClick = () => console.log("Button Clicked!");

const smallText = "Small Button";
const mediumText = "Medium Button";
const largeText = "Large Button";
export const SmallButton: Story = {
  render: () => (
    <SharedButton size={smallButton} onClick={onClick} buttonText={smallText} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Small Button"));
    expect(smallText).toEqual("Small Button");
  },
};

export const MediumButton: Story = {
  render: () => (
    <SharedButton
      size={mediumButton}
      onClick={onClick}
      buttonText={mediumText}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Medium Button"));
    expect(smallText).toEqual("Medium Button");
  },
};

export const LargeButton: Story = {
  render: () => (
    <SharedButton size={largeButton} onClick={onClick} buttonText={largeText} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Large Button"));
    expect(smallText).toEqual("Large Button");
  },
};
