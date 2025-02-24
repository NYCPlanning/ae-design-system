import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-designs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  refs: {
    "@chakra-ui/react": {
      disable: true,
    },
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      skipChildrenPropWithoutDoc: false,
      propFilter: (prop) =>
        prop.parent !== undefined &&
        !["__css", "sx", "css", "as", "apply"].includes(prop.name) &&
        (!prop.parent.fileName.includes("node_modules") ||
          (prop.parent.fileName.includes("node_modules") &&
            prop.parent.fileName.includes("node_modules/@chakra-ui/") &&
            !prop.parent.fileName.includes(
              "node_modules/@chakra-ui/styled-system",
            ) &&
            !prop.parent.fileName.includes("node_modules/@chakra-ui/system"))),
    },
  },
};
export default config;
