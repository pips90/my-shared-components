# My Shared UI Component Library

A lightweight, theme-ready React component library built with
**TypeScript**, **Vite**, **Styled-Components**, and **Storybook**.

This project demonstrates how to:

-   Build reusable UI components\
-   Export components through a clean public API\
-   Support light & dark mode using a scalable token system\
-   Use Storybook for component documentation\
-   Ship a library designed to be consumed inside a monorepo or full
    application

## 📦 Available Components

### `<SharedButton />`

A reusable button component supporting three sizes:

    size: "small" | "medium" | "large"

**Props**

``` ts
interface SharedButtonProps {
  buttonText: string;
  size: "small" | "medium" | "large";
  onClick: () => void;
}
```

**Example**

``` tsx
<SharedButton
  buttonText="Click Me!"
  size="medium"
  onClick={() => console.log("clicked")}
/>
```

### `<SharedInput />`

A reusable input component supporting three sizes and a standard React
change handler.

**Props**

``` ts
interface SharedInputProps {
  type: string;
  placeholderText: string;
  size: "small" | "medium" | "large";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
```

**Example**

``` tsx
<SharedInput
  type="text"
  placeholderText="Email"
  size="large"
  onChange={(e) => console.log(e.target.value)}
/>
```

## 🎨 Theming & Tokens

The token-based theming system is defined in:

    src/theme/theme.css

### Light Mode Tokens (default)

``` css
:root {
  --btn-bg: #ffffff;
  --btn-text: #111827;
  --btn-border: #d1d5db;

  --input-bg: #ffffff;
  --input-text: #111827;
  --input-border: #d1d5db;
}
```

### Dark Mode Tokens

``` css
[data-theme="dark"] {
  --btn-bg: #1f2937;
  --btn-text: #f9fafb;
  --btn-border: #4b5563;

  --input-bg: #1f2937;
  --input-text: #f9fafb;
  --input-border: #4b5563;
}
```

## 📚 Storybook

Live Storybook:\
**https://pips90.github.io/my-shared-components/**

Run locally:

    npm run storybook

Build:

    npm run build-storybook

Deploy:

    npm run deploy-storybook

## 🧱 Public API

Exports defined in:

    src/index.ts

``` ts
import "./theme/theme.css";

export * from "./components/SharedButton/SharedButton";
export * from "./components/SharedInput/SharedInput";
```

## 🚀 Local Development

    npm install
    npm run dev
    npm run preview
    npm test
    npm run lint

## 🛠️ Build & Publish

Future-ready for:

-   Vite library build\
-   Type declarations\
-   Publishing to npm\
-   Integration in a pnpm monorepo

## 📌 Future Enhancements

-   More shared components\
-   Component variants\
-   Expanded token system\
-   Multiple themes\
-   Auto theme detection\
-   Storybook theme switcher

## 📝 License

MIT
