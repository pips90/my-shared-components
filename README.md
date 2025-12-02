My Shared UI Component Library

A lightweight, theme-ready React component library built with TypeScript, Vite, Styled-Components, and Storybook.

This project demonstrates how to:

Build reusable UI components

Export components through a clean public API

Support light & dark mode using a scalable token system

Use Storybook for component documentation

Ship a library designed to later be consumed inside a monorepo or full application

📦 Available Components
<SharedButton />

A reusable button component supporting three sizes:

size: "small" | "medium" | "large";

Props:

interface SharedButtonProps {
buttonText: string;
size: "small" | "medium" | "large";
onClick: () => void;
}

Example:

<SharedButton
buttonText="Click Me!"
size="medium"
onClick={() => console.log("clicked")}
/>

<SharedInput />

A reusable input component supporting three sizes and a standard React change handler.

Props:

interface SharedInputProps {
type: string;
placeholderText: string;
size: "small" | "medium" | "large";
onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

Example:

<SharedInput
type="text"
placeholderText="Email"
size="large"
onChange={(e) => console.log(e.target.value)}
/>

🎨 Theming & Tokens

This library uses a token-based theming system defined in:

src/theme/theme.css

Tokens are implemented using CSS variables, allowing apps to control light/dark mode however they want (local state, system preference, LaunchDarkly, etc.).

Light Mode Tokens (default)
:root {
--btn-bg: #ffffff;
--btn-text: #111827;
--btn-border: #d1d5db;

--input-bg: #ffffff;
--input-text: #111827;
--input-border: #d1d5db;
}

Dark Mode Tokens
[data-theme="dark"] {
--btn-bg: #1f2937;
--btn-text: #f9fafb;
--btn-border: #4b5563;

--input-bg: #1f2937;
--input-text: #f9fafb;
--input-border: #4b5563;
}

Why Tokens?

Keeps components clean

Allows centralized theming

Automatically adapts components to dark mode

Easily expanded later (colors, typography, spacing, shadows, variants)

Works with any app’s theme strategy

Does not require LaunchDarkly inside the library

How Consuming Apps Control Theme

Example using React state:

<div data-theme={isDark ? "dark" : "light"}>
  <SharedButton />
  <SharedInput />
</div>

Example using LaunchDarkly in a real app:

const flags = useFlags();

<div data-theme={flags.darkMode ? "dark" : "light"}>
  <SharedButton />
</div>

Your shared library automatically responds based on the tokens.

📚 Storybook

Storybook is deployed at:

https://pips90.github.io/my-shared-components/

It includes:

Interactive playgrounds for each component

A11y addon

Vitest/Jest interaction testing

Automated deployment with gh-pages

Run locally:

npm run storybook

Build:

npm run build-storybook

Deploy:

npm run deploy-storybook

🧱 Public API

Library exports are defined in:

src/index.ts

import "./theme/theme.css";

export _ from "./components/SharedButton/SharedButton";
export _ from "./components/SharedInput/SharedInput";

Consumers import:

import { SharedButton, SharedInput } from "my-shared-components";
import "my-shared-components/theme.css";

This is the standard pattern used in professional design systems.

🚀 Local Development

Install dependencies:

npm install

Start dev server:

npm run dev

Preview build:

npm run preview

Run tests:

npm test

Lint:

npm run lint

🛠️ Build & Publish

Although this project currently acts as a demo, the structure supports future publishing or monorepo integration.

Future steps (optional):

Add Vite library build (build.lib)

Output dist/ folder with .d.ts files

Publish to npm or use as a pnpm workspace package

📌 Future Enhancements

This shared library is designed to grow.
Potential future additions include:

More shared components (Card, Modal, Select, Tooltip, Toast, etc.)

Component variants (primary, secondary, outline)

Expanded token system (typography, spacing, radii, shadows)

Semantic tokens (--color-surface, --color-accent)

Support for multiple themes (dark, light, brand themes)

Auto-theme detection based on system settings

Storybook theme switcher

📝 License

MIT
(Adjust as needed for your use case.)
