import { useArgs } from "@storybook/preview-api";
import { useRef } from "react";
import { SlideFade } from ".";
import { Box, Text } from "../..";
import { Button } from "../Button";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Transitions/SlideFade",
  component: SlideFade,
  tags: ["autodocs"],
} satisfies Meta<typeof SlideFade>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    in: false,
  },
  render: function Render(args) {
    const [{ in: slideFadeIn }, updateArgs] = useArgs();
    const btnRef = useRef(null);
    return (
      <>
        <Button ref={btnRef} onClick={() => updateArgs({ in: !slideFadeIn })}>
          Click Me
        </Button>
        <SlideFade offsetY={"20px"} {...args}>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            <Text>Lorem ipsum odor amet, consectetuer adipiscing elit.</Text>
          </Box>
        </SlideFade>
      </>
    );
  },
};
