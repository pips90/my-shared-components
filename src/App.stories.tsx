import type { Meta, StoryObj } from "@storybook/react";
import App from "./App";

const meta: Meta<typeof App> = {
  title: "Example/App",
  component: App,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
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
          "The `App` component demonstrates the usage of the `SharedButton` and `SharedInput` components. It is the main entry point for this example.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof App>;

export const Default: Story = {
  render: () => <App />,
};
