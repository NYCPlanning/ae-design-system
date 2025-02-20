import { Button as ChakraButton } from "@chakra-ui/react";
import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import * as React from "react";

export const Button = React.forwardRef(function Button(
  props: ChakraButtonProps,
  ref: React.ForwardedRef<unknown>,
) {
  const { children, ...rest } = props;
  return (
    <ChakraButton data-label={children} ref={ref} {...rest}>
      {children}
    </ChakraButton>
  );
});

export interface ButtonProps extends ChakraButtonProps {}
