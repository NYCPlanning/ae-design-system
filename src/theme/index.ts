import { ThemeConfig, ChakraTheme } from "@chakra-ui/react";
import { tokens } from "./tokens";
import { semanticTokens } from "./semantic-tokens";
import { components } from "./components";

const config: ThemeConfig = {
  cssVarPrefix: "dcp",
};

export const theme: ChakraTheme = {
  components,
  config,
  direction: "ltr",
  styles: {},
  semanticTokens,
  ...tokens,
};
