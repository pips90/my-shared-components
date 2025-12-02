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
    onChange: (e) => console.log("Small input changed: ", e.target.value),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByPlaceholderText("Small Input")).toBeVisible();
    expect(smallText).toEqual("Small Input");
    await userEvent.type(
      canvas.getByPlaceholderText(smallText),
      "I'm a small input"
    );
    expect(canvas.getByPlaceholderText(smallText)).toHaveValue(
      "I'm a small input"
    );
  },
};

export const MediumInput: Story = {
  args: {
    size: mediumInput,
    placeholderText: mediumText,
    type: "text",
    onChange: (e) => console.log("Medium input changed: ", e.target.value),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByPlaceholderText("Medium Input")).toBeVisible();
    expect(mediumText).toEqual("Medium Input");
    await userEvent.type(
      canvas.getByPlaceholderText(mediumText),
      "I'm a medium input"
    );
    expect(canvas.getByPlaceholderText(mediumText)).toHaveValue(
      "I'm a medium input"
    );
  },
};

export const LargeInput: Story = {
  args: {
    size: largeInput,
    placeholderText: largeText,
    type: "text",
    onChange: (e) => console.log("Large input changed: ", e.target.value),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByPlaceholderText("Large Input")).toBeVisible();
    expect(largeText).toEqual("Large Input");
    await userEvent.type(
      canvas.getByPlaceholderText(largeText),
      "I'm a large input"
    );
    expect(canvas.getByPlaceholderText(largeText)).toHaveValue(
      "I'm a large input"
    );
  },
};
