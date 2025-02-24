import { defineStyleConfig } from "@chakra-ui/react";

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    border: "1px solid rgba(255, 255, 255, 0)",
    borderRadius: "base",
    px: 6,
    py: 3,
    whiteSpace: "normal",
    display: "inline-block",
    _before: {
      display: "block",
      content: "attr(data-label)",
      fontWeight: "medium",
      height: 0,
      overflow: "hidden",
      visibility: "hidden",
    },
  },
  sizes: {
    xs: {
      fontSize: "xs",
      minH: 10,
      minW: 10,
    },
    sm: {
      fontSize: "sm",
      minH: 11,
      minW: 11,
    },
    md: {
      fontSize: "md",
      minH: 12,
      minW: 12,
    },
    lg: {
      fontSize: "lg",
      minH: 14,
      minW: 14,
    },
  },
  variants: {
    primary: {
      backgroundColor: "primary.600",
      color: "white",
      // TODO: Refactor setting boxShadow tokens
      boxShadow: "0 1.5 1.5 0 rgba(35, 78, 82, 0.08)",
      _disabled: {
        backgroundColor: "primary.500",
        color: "white",
        opacity: 0.64,
        pointerEvents: "none",
      },
      _hover: {
        backgroundColor: "brand.50",
        border: "1px solid",
        borderColor: "brand.800",
        boxShadow: "0 1 1.5 0 rgba(217, 107, 39, 0.18)",
        color: "gray.700",
        fontWeight: "medium",
      },
      _focus: {
        backgroundColor: "brand.50",
        border: "1px solid",
        borderColor: "brand.800",
        boxShadow: "0 1 1.5 0 rgba(217, 107, 39, 0.18)",
        color: "gray.700",
        fontWeight: "medium",
      },
      _active: {
        backgroundColor: "primary.500",
        border: "none",
        boxShadow:
          "0px 4px 4px 0px rgba(0, 0, 0, 0.08) inset, 0px -4px 4px 0px rgba(0, 0, 0, 0.08) inset, 4px 0px 4px 0px rgba(0, 0, 0, 0.08) inset, -4px 0px 4px 0px rgba(0, 0, 0, 0.08) inset;",
        color: "white",
        fontWeight: "medium",
        textDecorationLine: "underline",
      },
    },
    secondary: {
      backgroundColor: "white",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "primary.600",
      boxShadow: "0 1.5 1.5 0 rgba(44, 122, 123, 0.04)",
      color: "gray.700",
      ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":
        { borderRightWidth: "1px" },
      ".chakra-button__group[data-attached][data-orientation=horizontal] > &:last-of-type":
        { borderLeftWidth: "1px" },
      ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":
        { borderBottomtWidth: "1px" },
      ".chakra-button__group[data-attached][data-orientation=vertical] > &:last-of-type":
        { borderTopWidth: "1px" },
      _disabled: {
        backgroundColor: "gray.50",
        borderColor: "primary.600",
        color: "gray.700",
        opacity: 0.64,
        pointerEvents: "none",
      },
      _hover: {
        backgroundColor: "white",
        borderColor: "brand.800",
        boxShadow: "0 1 1.5 0 rgba(217, 107, 39, 0.18)",
        color: "gray.700",
        fontWeight: "medium",
      },
      _focus: {
        backgroundColor: "white",
        borderColor: "brand.800",
        boxShadow: "0 1 1.5 0 rgba(217, 107, 39, 0.18)",
        color: "gray.700",
        fontWeight: "medium",
      },
      _active: {
        background: "rgba(43, 119, 120, 0.04)",
        boxShadow:
          "0px 4px 4px 0px rgba(0, 0, 0, 0.08) inset, 0px -4px 4px 0px rgba(0, 0, 0, 0.08) inset, 4px 0px 4px 0px rgba(0, 0, 0, 0.08) inset, -4px 0px 4px 0px rgba(0, 0, 0, 0.08) inset",
        color: "gray.700",
        fontWeight: "medium",
        textDecorationLine: "underline",
      },
    },
    tertiary: {
      padding: 0,
      height: "auto",
      lineHeight: "normal",
      verticalAlign: "baseline",
      backgroundColor: "white",
      color: "primary.500",
      fontWeight: "medium",
      textDecoration: "underline",
      _hover: {
        _disabled: {
          pointerEvents: "none",
        },
      },
      _active: {
        color: "primary.500",
      },
    },
  },
  defaultProps: {
    variant: "primary",
    size: "md",
  },
});
