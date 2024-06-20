'use client'

import { motion } from 'framer-motion'
import { Box, Button } from '@chakra-ui/react'

import {
  mobileMenuButtonLine1Variants,
  mobileMenuButtonLine2Variants,
  mobileMenuButtonLine3Variants,
} from '@/components/Navigation/helpers'

const MobileMenuButtonLineStyles = {
  as: motion.span,
  borderRadius: 'full',
  w: '4',
  h: '0.5',
  bg: 'currentColor',
}

const MobileMenuButton = ({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => {
  return (
    <Button
      variant="ghost"
      colorScheme="gray"
      onClick={onToggle}
      title="Toggle menu"
      aria-label="Toggle menu"
      display={{ base: 'flex', md: 'none' }}
      gap="1"
      flexDir="column"
      alignItems="flex-start"
    >
      <Box
        variants={mobileMenuButtonLine1Variants}
        animate={isOpen ? 'open' : 'close'}
        {...MobileMenuButtonLineStyles}
      />
      <Box
        variants={mobileMenuButtonLine2Variants}
        animate={isOpen ? 'open' : 'close'}
        {...MobileMenuButtonLineStyles}
        w="3"
      />
      <Box
        variants={mobileMenuButtonLine3Variants}
        animate={isOpen ? 'open' : 'close'}
        {...MobileMenuButtonLineStyles}
      />
    </Button>
  )
}

export default MobileMenuButton
