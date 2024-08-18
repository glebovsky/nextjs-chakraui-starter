'use client'

import { motion } from 'framer-motion'
import { Box, Button } from '@chakra-ui/react'

import { mobileMenuButtonLineVariants } from '@/components/organisms/Navigation/helpers'

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
      overflow="hidden"
    >
      {Object.keys(mobileMenuButtonLineVariants).map((line, index) => (
        <Box
          key={index}
          variants={mobileMenuButtonLineVariants[line]}
          animate={isOpen ? 'open' : 'close'}
          {...MobileMenuButtonLineStyles}
          w={line === 'lineTwo' ? '3' : '4'}
        />
      ))}
    </Button>
  )
}

export default MobileMenuButton
