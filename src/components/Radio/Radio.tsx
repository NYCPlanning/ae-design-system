import {
  Radio as ChakraRadio,
  RadioGroup as ChakraRadioGroup,
} from "@chakra-ui/react";
import {
  RadioProps as ChakraRadioProps,
  RadioGroupProps as ChakraRadioGroupProps,
} from "@chakra-ui/react";

export const Radio = ChakraRadio;
export interface RadioProps extends ChakraRadioProps {}

export const RadioGroup = ChakraRadioGroup;
export interface RadioGroupProps extends ChakraRadioGroupProps {}
