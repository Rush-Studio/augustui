import { type Registry } from "shadcn/registry";

const lib: Registry["items"] = [
  {
    name: "utils",
    type: "registry:lib",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "registry/lib/utils.ts",
        type: "registry:lib",
      },
    ],
  },
];

export { lib };
