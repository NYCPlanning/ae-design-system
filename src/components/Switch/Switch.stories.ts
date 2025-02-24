import type { Meta, StoryObj } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Switch } from "./Switch";
import { theme } from "../../theme";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Switch"),
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    variant: "base",
    size: "lg",
    isChecked: false,
    isDisabled: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/yKCsuZxvSyAmdxaziIU2jS/Chakra-UI-Figma-Kit-for-DCP?node-id=441-1610&t=0imiNI8frfIDMA69-4",
    },
  },
};

export const Small: Story = {
  args: {
    variant: "base",
    size: "sm",
    isChecked: false,
    isDisabled: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/yKCsuZxvSyAmdxaziIU2jS/Chakra-UI-Figma-Kit-for-DCP?node-id=441-1610&t=0imiNI8frfIDMA69-4",
    },
  },
};
