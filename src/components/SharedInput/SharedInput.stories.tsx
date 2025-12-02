import type { Meta, StoryObj } from "@storybook/react";
import { SharedInput } from "./SharedInput";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof SharedInput> = {
  title: "SharedInput component",
  component: SharedInput,
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
          "The `SharedInput` component demonstrates the usage of the `SharedInput` components with props.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SharedInput>;
const smallInput = "small";
const mediumInput = "medium";
const largeInput = "large";

const smallText = "Small Input";
const mediumText = "Medium Input";
const largeText = "Large Input";

export const SmallInput: Story = {
  args: {
    size: smallInput,
    placeholderText: smallText,
    type: "text",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByPlaceholderText("Small Input"), "Hello");
    expect(canvas.getByPlaceholderText("Small Input")).toBeInTheDocument();
  },
};

export const MediumButton: Story = {
  args: {
    size: mediumInput,
    placeholderText: mediumText,
    type: "text",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Medium Button"));
    expect(smallText).toEqual("Medium Button");
  },
};

export const LargeButton: Story = {
  args: {
    size: largeInput,
    placeholderText: largeText,
    type: "text",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Large Button"));
    expect(largeText).toEqual("Large Button");
  },
};
