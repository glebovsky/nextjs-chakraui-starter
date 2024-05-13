import type { SystemStyleObject } from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  maxW: "container.lg",
};

const variants = {
  full: {
    maxW: "container.full",
  },
};

export const container = {
  baseStyle,
  variants,
};
