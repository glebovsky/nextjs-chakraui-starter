import { Variants } from 'framer-motion'

export const mobileMenuButtonLine1Variants: Variants = {
  open: {
    y: 6,
    rotate: 45,
  },
  closed: {
    y: 0,
    rotate: 0,
  },
}

export const mobileMenuButtonLine2Variants: Variants = {
  open: {
    x: -5,
    opacity: 0,
  },
  closed: {
    x: 0,
    opacity: 1,
  },
}

export const mobileMenuButtonLine3Variants: Variants = {
  open: {
    y: -6,
    rotate: -45,
  },
  closed: {
    y: 0,
    rotate: 0,
  },
}
