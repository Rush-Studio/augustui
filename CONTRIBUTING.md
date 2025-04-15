# Contributing to AugustUI

Thank you for your interest in contributing to AugustUI. We sincerely appreciate your support and are excited to welcome contributors to the project. This guide outlines the directory structure and provides detailed, step-by-step instructions for adding new components to AugustUI.

Review the [example PR](https://github.com/rush-studio/augustui/pull/3) to understand which files need modification. **Adding a new component or effect requires changes to only 5 files** and typically takes about 10 minutes to complete!

When you're finished, open a pull request from your forked repository to the main repository [here](https://github.com/rush-studio/augustui/compare).

## Getting Started

### Fork and Clone the Repository

1. **Fork this repository**

   Click [here](https://github.com/rush-studio/augustui/fork) to fork the repository.

2. **Clone your forked repository to your local machine**

   ```bash
   git clone https://github.com/<YOUR_USERNAME>/augustui.git
   ```

3. **Navigate to the project directory**

   ```bash
   cd augustui
   ```

4. **Install dependencies**

   ```bash
   npm install
   ```

5. **Create a `.env.local` file**

   ```bash
   touch .env.local && echo "NEXT_PUBLIC_APP_URL=http://localhost:3000" > .env.local
   ```

6. **Run the project**

   ```bash
   npm run dev
   ```

## Adding a New Component

To add a new component to AugustUI, follow these steps:

### 1. Create a new branch for your changes

```bash
git checkout -b feat/new-component
```

### 2. Create the Component

Create the main component file in `registry/augustui/example-component.tsx`

```typescript
import React from "react";

export default function ExampleComponent() {
  return (
    <div>
      <h1>Example Component</h1>
    </div>
  );
}
```

### 3. Create a Component Demo

Develop a basic example to showcase your component in `registry/example/example-component-demo.tsx`

```typescript
import ExampleComponent from "@/registry/augustui/example-component";

export default function ExampleComponentDemo() {
  return (
    <div className="relative flex justify-center">
      <ExampleComponent />
    </div>
  );
}
```

### 4. Update the Sidebar

Add your component to the sidebar navigation in `config/docs.ts`

Check if your component belongs to an existing category in the sidebar navigation (e.g. Background, Buttons, etc). If it does, add it under that category. If not, add it under the Components category.

```typescript
{
  title: "Components",
  items: [
    // ... existing components ...
    {
      title: "Example Component",
      href: `/docs/components/example-component`,
      items: [],
      label: "New",
    }
  ]
}
```

### 5. Create Documentation

Create an MDX file to document your component in `content/docs/components/example-component.mdx`

````md
---
title: Example Component
date: 2024-06-01
description: Example component for AugustUI
author: AugustUI
published: true
---

<ComponentPreview name="example-component-demo" />

## Installation

<Tabs defaultValue="cli">

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add "https://augustui.com/r/example-component"
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="example-component" />

</Steps>

</TabsContent>

</Tabs>

## Props

| Prop    | Type     | Default  | Description                |
| ------- | -------- | -------- | -------------------------- |
| `color` | `String` | `"blue"` | The color of the component |
````

### 6. Update Registry

Export your component and example in the registry files (`registry/registry-ui.ts` and `registry/registry-examples.ts`):

In `registry/registry-ui.ts`:

```typescript
export const ui: Registry = [
  // ... existing components ...
  {
    name: "example-component",
    description: "A component that does something",
    type: "registry:ui",
    dependencies: ["motion"],
    files: [
      {
        path: "augustui/example-component.tsx",
        type: "registry:ui",
        target: "components/augustui/example-component.tsx",
      },
    ],
  },
];
```

In `registry/registry-examples.ts`:

```typescript
export const examples: Registry = [
  // ... existing examples ...
  {
    name: "example-component-demo",
    description: "An example of the example-component",
    type: "registry:example",
    registryDependencies: ["example-component"],
    files: [
      {
        path: "registry/example/example-component-demo.tsx",
        type: "registry:example",
        target: "components/example-component-demo.tsx",
      },
    ],
  },
];
```

Make sure to add any necessary dependencies, tailwind configurations, or other properties as needed for your specific component.

### 7. Build registry

```bash
npm run build:registry
```

### 8. Run the dev environment (if it wasn't already) to check your component

```bash
npm run dev
```

### 9. Commit your changes

```bash
git add .
git commit -m "feat: add example-component"
git push origin feat/new-component
```

## Adding to the Showcase

### 1. Create a new branch for your changes

```bash
git checkout -b showcase/showcase-website
```

### 2. Create a Showcase MDX File

Create your showcase entry in `content/showcase/example-website.mdx`

```mdx
---
title: example-website.com
description: Website description
image: /showcase/example-website.png
href: https://example-website.com
featured: true
affiliation: YC S21, raised $5M
---
```

### 3. Create an image

Upload an image of your site to `public/showcase/example-website.png`

## Ask for Help

For any help or questions, please open a new GitHub issue.
