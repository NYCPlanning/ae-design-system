import type { Meta, StoryObj } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Checkbox } from "./Checkbox";
import { theme } from "../../theme";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Checkbox"),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    variant: "base",
    size: "md",
    isChecked: false,
    isDisabled: false,
    children: "Medium checkbox label",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/yKCsuZxvSyAmdxaziIU2jS/Chakra-UI-Figma-Kit-for-DCP?node-id=441-490&t=0imiNI8frfIDMA69-4",
    },
  },
};

export const Small: Story = {
  args: {
    variant: "base",
    size: "sm",
    isChecked: false,
    isDisabled: false,
    children: "Small checkbox label",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/yKCsuZxvSyAmdxaziIU2jS/Chakra-UI-Figma-Kit-for-DCP?node-id=441-490&t=0imiNI8frfIDMA69-4",
    },
  },
};
