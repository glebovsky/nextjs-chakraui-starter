'use client'

import { motion } from 'framer-motion'
import { Link } from '@chakra-ui/next-js'
import { Flex, Stack, Grid, Button, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import Section from '@/components/Section'
import Logo from '@/components/Logo'
import MobileMenuButton from '@/components/Navigation/MobileMenuButton'

type TNavigationProps = {
  showLogoTitle?: boolean
}

const navigationMenuWrapperVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const sectionVariants = {
  open: {
    height: '100dvh',
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    height: 'auto',
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const Navigation = ({ showLogoTitle = false }: TNavigationProps) => {
  const { isOpen, onToggle } = useDisclosure()
  const bg = useColorModeValue('gray.50', 'gray.900')

  return (
    <Section
      py="4"
      bg={bg}
      position="fixed"
      inset="0 0 auto 0"
      zIndex="sticky"
      alignItems="flex-start"
      as={motion.div}
      variants={sectionVariants}
      animate={isOpen ? 'open' : 'close'}
    >
      <Grid
        gridTemplateColumns={{ base: '1fr', md: 'auto 1fr' }}
        gridTemplateRows={{ base: 'auto 1fr', md: '1fr' }}
        gap="4"
      >
        <Flex justify="space-between">
          <Logo showTitle={showLogoTitle} />
          <MobileMenuButton isOpen={isOpen} onToggle={onToggle} />
        </Flex>
        <Stack
          as="nav"
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'flex-start', md: 'center' }}
          gap={{ base: '4', md: '6' }}
          ml={{ base: '0', md: 'auto' }}
          display="none"
        >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Button as={Link} href="/contact" colorScheme="gray">
            Contact
          </Button>
        </Stack>
      </Grid>
    </Section>
  )
}

export default Navigation
