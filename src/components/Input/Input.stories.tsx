import type { Meta, StoryObj } from "@storybook/react";
import { chakra } from "@chakra-ui/system";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Input } from "./Input";
import { theme } from "../../theme";
import { userEvent, within } from "@storybook/test";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Input"),
    placeholder: { type: "string" },
  },
  decorators: [
    // Because <Input> defaults to 100% width, wrap stories in div with max width.
    (Story) => <chakra.div maxW="560px">{Story()}</chakra.div>,
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    placeholder: "Placeholder Text",
    size: "md",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/yKCsuZxvSyAmdxaziIU2jS/Chakra-UI-Figma-Kit-for-DCP?node-id=441-1234&t=0imiNI8frfIDMA69-4",
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Type into input", async () => {
      await userEvent.type(
        canvas.getByPlaceholderText(/Placeholder Text/),
        "Input component test",
      );
    });
  },
};

export const Invalid: Story = {
  args: {
    placeholder: "Placeholder Text",
    size: "md",
    isInvalid: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/yKCsuZxvSyAmdxaziIU2jS/Chakra-UI-Figma-Kit-for-DCP?node-id=441-1234&t=0imiNI8frfIDMA69-4",
    },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Placeholder Text",
    size: "md",
    isDisabled: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/yKCsuZxvSyAmdxaziIU2jS/Chakra-UI-Figma-Kit-for-DCP?node-id=441-1234&t=0imiNI8frfIDMA69-4",
    },
  },
};
