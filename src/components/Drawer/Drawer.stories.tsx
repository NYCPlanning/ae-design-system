import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { useRef } from "react";
import { Button } from "../Button";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "./Drawer";
import { theme } from "../../theme";

const meta = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Drawer"),
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    placement: "bottom",
    isOpen: false,
    onClose: () => {
      return;
    },
    children: "Content here",
  },
  render: function Render(args) {
    const [{ onClose }, updateArgs] = useArgs();
    function onClick() {
      updateArgs({ isOpen: true });
    }
    const btnRef = useRef(null);

    return (
      <>
        <Button ref={btnRef} onClick={onClick}>
          Open
        </Button>
        <Drawer
          {...args}
          onClose={() => {
            onClose();
            updateArgs({ isOpen: false });
          }}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>{args.children}</DrawerBody>

            <DrawerFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  },
};
