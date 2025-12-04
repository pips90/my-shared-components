import type { Meta, StoryObj } from "@storybook/react";
import { SharedButton } from "./SharedButton";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof SharedButton> = {
  title: "SharedButton component",
  component: SharedButton,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    buttonText: { control: "text" },
    onClick: { action: "clicked" },
  },
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
          "The `SharedButton` component demonstrates usage with adjustable props.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SharedButton>;

export const SmallButton: Story = {
  args: { size: "small", buttonText: "Small Button" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Small Button"));
    expect(canvas.getByText("Small Button")).toBeVisible();
  },
};

export const MediumButton: Story = {
  args: { size: "medium", buttonText: "Medium Button" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Medium Button"));
    expect(canvas.getByText("Medium Button")).toBeVisible();
  },
};

export const LargeButton: Story = {
  args: { size: "large", buttonText: "Large Button" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Large Button"));
    expect(canvas.getByText("Large Button")).toBeVisible();
  },
};
