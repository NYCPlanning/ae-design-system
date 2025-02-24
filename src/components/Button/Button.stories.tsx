import type { Meta, StoryObj } from "@storybook/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";
import { IconButton } from "./IconButton";
import { theme } from "../../theme";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Button"),
    children: { type: "string" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Primary Btn",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/yKCsuZxvSyAmdxaziIU2jS/Chakra-UI-Figma-Kit-for-DCP?node-id=441-374&t=0imiNI8frfIDMA69-4",
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
    children: "Secondary Btn",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/yKCsuZxvSyAmdxaziIU2jS/Chakra-UI-Figma-Kit-for-DCP?node-id=441-374&t=0imiNI8frfIDMA69-4",
    },
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    size: "md",
    children: " Tertiary Btn",
  },
};

export const WithButtonGroup = () => (
  <ButtonGroup isAttached={true} variant={"secondary"}>
    <Button>Save</Button>
    <Button>Cancel</Button>
  </ButtonGroup>
);

export const WithVerticalButtonGroup = () => (
  <ButtonGroup
    isAttached={true}
    variant={"secondary"}
    orientation="vertical"
    size="sm"
  >
    <Button>Save</Button>
    <Button>Cancel</Button>
  </ButtonGroup>
);

export const AsIconButton = () => (
  <IconButton aria-label="Add" icon={<AddIcon />} />
);

export const WithButtonGroupAndIcons = () => (
  <ButtonGroup isAttached={true} orientation="vertical">
    <IconButton variant={"secondary"} aria-label="Add" icon={<AddIcon />} />
    <IconButton variant={"secondary"} aria-label="Add" icon={<MinusIcon />} />
  </ButtonGroup>
);
