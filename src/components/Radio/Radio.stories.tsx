import { RadioGroup, Stack } from "@chakra-ui/react";
import { Radio } from "./Radio";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { theme } from "../../theme";

const meta = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Radio"),
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    value: "1",
  },
  render: function Render() {
    const [{ value }, updateArgs] = useArgs();
    return (
      <RadioGroup onChange={(value) => updateArgs({ value })} value={value}>
        <Stack direction="row">
          <Radio value="1">First</Radio>
          <Radio value="2">Second</Radio>
          <Radio value="3">Third</Radio>
        </Stack>
      </RadioGroup>
    );
  },
};
