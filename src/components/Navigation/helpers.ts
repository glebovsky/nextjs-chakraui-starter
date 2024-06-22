import { Variants } from 'framer-motion'

export const mobileMenuButtonLineVariants: Record<string, Variants> = {
  lineOne: {
    open: {
      y: 6,
      rotate: 45,
    },
    closed: {
      y: 0,
      rotate: 0,
    },
  },
  lineTwo: {
    open: {
      x: -5,
      opacity: 0,
    },
    closed: {
      x: 0,
      opacity: 1,
    },
  },
  lineThree: {
    open: {
      y: -6,
      rotate: -45,
    },
    closed: {
      y: 0,
      rotate: 0,
    },
  },
}
